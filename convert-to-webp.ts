// convert-to-webp.js
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const inputDir = "./public";
const files = fs.readdirSync(inputDir).filter((f) => f.endsWith(".png"));

files.forEach(async (file) => {
  const inputPath = path.join(inputDir, file);
  const outputPath = path.join(inputDir, file.replace(".png", ".webp"));

  try {
    await sharp(inputPath).webp({ quality: 80 }).toFile(outputPath);
    console.log(`✅ Converted: ${file} → ${path.basename(outputPath)}`);
  } catch (err) {
    console.error(`❌ Failed to convert ${file}:`, err);
  }
});
