const fs = require("fs");
const path = require("path");

const inputDir = path.join(__dirname, "logos"); // <-- Change if needed

if (!fs.existsSync(inputDir)) {
  console.error("❌ Folder does not exist:", inputDir);
  process.exit(1);
}

fs.readdir(inputDir, (err, files) => {
  if (err) return console.error("Error reading folder:", err);

  files.forEach(file => {
    if (path.extname(file) === ".svg") {
      const filePath = path.join(inputDir, file);
      fs.readFile(filePath, "utf8", (readErr, data) => {
        if (readErr) return console.error(`Error reading ${file}:`, readErr);

        // Replace all fills except "none"
        const updated = data.replace(/fill="(?!none)[^"]*"/gi, 'fill="currentColor"');

        fs.writeFile(filePath, updated, "utf8", (writeErr) => {
          if (writeErr) return console.error(`Error writing ${file}:`, writeErr);
          console.log(`✅ Converted to white-controllable: ${file}`);
        });
      });
    }
  });
});
