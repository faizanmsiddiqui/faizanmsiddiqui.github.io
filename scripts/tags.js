/**
 * --- Command-line usage ---
 * node tags.js --generate
 * node tags.js --remove
 */

const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

const config = yaml.load(fs.readFileSync("site.config.yaml", "utf8"));

const sourceFile = config.tags.sourceFile;
const destinationFile = config.tags.destinationFile;

const source = `${sourceFile}`;
const destinationDirs = config.tags.destinationDirs;

function copyTagsFile() {
  if (!fs.existsSync(source)) {
    console.error("Source file not found:", source);
    return;
  }

  for (const dir of destinationDirs) {
    const destination = path.join(dir, destinationFile);

    try {
      fs.copyFileSync(source, destination);
      console.log(`Copied ${source} to ${destination}`);
    } catch (err) {
      console.error(`Failed to copy to ${destination}:`, err);
    }
  }
}

function removeTagsFile() {
  for (const dir of destinationDirs) {
    const destination = path.join(dir, destinationFile);

    if (!fs.existsSync(destination)) {
      console.log(`File not found at ${destination}, skipping removal.`);
    } else {
      try {
        fs.unlinkSync(destination);
        console.log(`Removed ${destination}`);
      } catch (err) {
        console.error(`Failed to remove from ${dir}:`, err);
      }
    }
  }
}

function main() {
  const arg = process.argv[2];

  if (arg === "--generate") copyTagsFile();
  else if (arg === "--remove") removeTagsFile();
  else console.log("Usage: node tags.js [--generate|--remove]");
}

main();
