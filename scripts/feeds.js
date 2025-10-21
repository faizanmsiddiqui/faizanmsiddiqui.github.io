/**
 * --- Command-line usage ---
 * node feeds.js --generate
 * node feeds.js --remove
 */

const fs = require("fs");
const matter = require("gray-matter");
const path = require("path");
const yaml = require("js-yaml");
const { Feed } = require("feed");

const config = yaml.load(fs.readFileSync("site.config.yaml", "utf8"));

const title = config.title;
const url = config.url;
const contentDirs = config.feeds.contentDirs;
const outputDir = config.feeds.outputDir;

/**
 * Recursively reads all `.mdx` files from subdirectories
 * Skips `.mdx` files directly inside the root directory
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
      !isRoot // Skip `.mdx` in root (e.g., `./blog/index.mdx`)
    ) {
      files.push(fullPath);
    }
  }

  return files;
}

/**
 * Extracts front matter metadata from `.mdx` file
 */
function parseFrontMatter(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  const { data } = matter(raw);

  return {
    title: data.title ?? "Untitled",
    description: data.description ?? "",
    date: data.date ? new Date(data.date) : new Date(),
    link:
      url +
      "/" +
      path
        .relative(".", filePath)
        .replace(/\\/g, "/")
        .replace(/index.mdx$/, "")
        .replace(/\.mdx$/, ""),
  };
}

/**
 * Generates RSS and Atom feeds
 */
function generateFeeds(dirName, posts) {
  const rssFileName = `${dirName}-rss.xml`;
  const atomFileName = `${dirName}-atom.xml`;
  const rssFilePath = path.join(outputDir, rssFileName);
  const atomFilePath = path.join(outputDir, atomFileName);
  const feed = new Feed({
    title: `${title} ${
      dirName.charAt(0).toUpperCase() + dirName.slice(1)
    } Feed`,
    description: `Latest ${dirName} updates`,
    id: url,
    link: url,
    language: "en",
    feedLinks: {
      rss2: `${url}/${dirName}-rss.xml`,
      atom: `${url}/${dirName}-atom.xml`,
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
  fs.writeFileSync(rssFilePath, feed.rss2(), "utf8");
  console.log(`Generated ${dirName} RSS feed ${rssFilePath}`);
  fs.writeFileSync(atomFilePath, feed.atom1(), "utf8");
  console.log(`Generated ${dirName} Atom feed ${atomFilePath}`);
}

/**
 * Removes existing feed files
 */
function removeFeeds() {
  if (!fs.existsSync(outputDir)) {
    console.log(`No ${outputDir} directory found.`);
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
    const filePath = path.join(outputDir, file);
    fs.unlinkSync(filePath);
    console.log(`Removed ${filePath}`);
  }
}

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

main();
