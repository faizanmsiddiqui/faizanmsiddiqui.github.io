const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const { Feed } = require("feed");

// Directories to include (extendable)
const contentDirs = ["./blog"];

// Output directory
const outputDir = "./static";

// Site title
const siteTitle = "Faizan Siddiqui";

// Site base URL
const siteUrl = "https://faizansiddiqui.me";

/**
 * Recursively reads all .mdx files from subdirectories
 * Skips .mdx files directly inside the root directory
 */
function readMDXFilesRecursively(dir, isRoot = true) {
  const files = [];

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      // Recurse into subdirectories
      files.push(...readMDXFilesRecursively(fullPath, false));
    } else if (
      entry.isFile() &&
      entry.name.endsWith(".mdx") &&
      !isRoot // Skip .mdx in root (e.g., ./blog/index.mdx)
    ) {
      files.push(fullPath);
    }
  }

  return files;
}

/**
 * Extracts front matter metadata from a .mdx file
 */
function parseFrontMatter(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  const { data } = matter(raw);
  return {
    title: data.title ?? "Untitled",
    description: data.description ?? "",
    date: data.date ? new Date(data.date) : new Date(),
    link:
      siteUrl +
      "/" +
      path
        .relative(".", filePath)
        .replace(/\\/g, "/")
        .replace(/\index.mdx$/, "")
        .replace(/\.mdx$/, ""),
  };
}

/**
 * Generates RSS and Atom feeds
 */
function generateFeeds(dirName, posts) {
  const feed = new Feed({
    title: `${siteTitle} ${
      dirName.charAt(0).toUpperCase() + dirName.slice(1)
    } Feed`,
    description: `Latest ${dirName} updates`,
    id: siteUrl,
    link: siteUrl,
    language: "en",
    feedLinks: {
      rss2: `${siteUrl}/static/${dirName}-rss.xml`,
      atom: `${siteUrl}/static/${dirName}-atom.xml`,
    },
  });

  posts
    .sort((a, b) => b.date - a.date)
    .forEach((post) => {
      feed.addItem({
        title: post.title,
        description: post.description,
        date: post.date,
        id: post.link,
        link: post.link,
      });
    });

  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(
    path.join(outputDir, `${dirName}-rss.xml`),
    feed.rss2(),
    "utf8"
  );
  fs.writeFileSync(
    path.join(outputDir, `${dirName}-atom.xml`),
    feed.atom1(),
    "utf8"
  );

  console.log(`Generated ${dirName} RSS and Atom feeds`);
}

/**
 * Removes existing feed files
 */
function removeFeeds() {
  if (!fs.existsSync(outputDir)) {
    console.log("No static directory found.");
    return;
  }

  const files = fs.readdirSync(outputDir);
  const feedFiles = files.filter(
    (f) => f.endsWith("-rss.xml") || f.endsWith("-atom.xml")
  );

  if (feedFiles.length === 0) {
    console.log("No feed files found to remove.");
    return;
  }

  for (const file of feedFiles) {
    fs.unlinkSync(path.join(outputDir, file));
    console.log(`Removed ${file}`);
  }

  console.log("All feed files removed.");
}

/**
 * Main script logic
 */
function main() {
  const arg = process.argv[2];

  if (arg === "--generate") {
    for (const dir of contentDirs) {
      if (!fs.existsSync(dir)) continue;

      const files = readMDXFilesRecursively(dir);
      const posts = files.map(parseFrontMatter).filter(Boolean);
      const dirName = path.basename(dir);
      generateFeeds(dirName, posts);
    }
  } else if (arg === "--remove") {
    removeFeeds();
  } else {
    console.log("Usage: node feeds.js [--generate|--remove]");
  }
}

// Run script
main();
