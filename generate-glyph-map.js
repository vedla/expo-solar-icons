const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, '/src/solar-icons/config.json');

// Output file
const outputPath = path.join(__dirname, 'src/glyphMap.json');

const data = JSON.parse(fs.readFileSync(inputPath, 'utf-8'));

if (!data.glyphs) {
  throw new Error('Invalid file: missing "glyphs" array');
}

const glyphMap = {};

for (const glyph of data.glyphs) {
  if (glyph.css && typeof glyph.code === 'number') {
    glyphMap[glyph.css] = glyph.code;
  }
}

fs.writeFileSync(outputPath, JSON.stringify(glyphMap, null, 2));

console.log('glyphMap.json generated');
