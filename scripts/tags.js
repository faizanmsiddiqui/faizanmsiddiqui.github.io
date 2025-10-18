const fs = require("fs");
const path = require("path");

const sourceFileName = "tags.yml";
const sourceFile = path.resolve(`./${sourceFileName}`);
const targetDirs = ["./blog", "./notes", "./snippets"].map((d) =>
  path.resolve(d)
);

function copyTagsFile() {
  if (!fs.existsSync(sourceFile)) {
    console.error("Source file not found:", sourceFile);
    return;
  }

  for (const dir of targetDirs) {
    const dest = path.join(dir, sourceFileName);
    try {
      fs.copyFileSync(sourceFile, dest);
      console.log(`Copied ${sourceFileName} → ${dir}`);
    } catch (err) {
      console.error(`Failed to copy to ${dir}:`, err);
    }
  }
}

function removeTagsFile() {
  for (const dir of targetDirs) {
    const filePath = path.join(dir, sourceFileName);
    if (fs.existsSync(filePath)) {
      try {
        fs.unlinkSync(filePath);
        console.log(`Removed ${sourceFileName} from ${dir}`);
      } catch (err) {
        console.error(`Failed to remove from ${dir}:`, err);
      }
    }
  }
}

// --- Command-line usage ---
//   node tags.js --generate
//   node tags.js --remove

const arg = process.argv[2];

if (arg === "--generate") copyTagsFile();
else if (arg === "--remove") removeTagsFile();
else console.log("Usage: node tags.js [--generate|--remove]");
