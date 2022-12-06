const path = require("path");

console.log(path.sep);
const filePath = path.join("./folder", "subFolder", "test.txt");
const base = path.basename(filePath);
const absolute = path.resolve(__dirname, "folder", "subFolder", "test.txt");

console.log(absolute,base);