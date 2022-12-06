const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./folder/first.txt", "utf8");
const second = readFileSync("./folder/second.txt", "utf8");

writeFileSync(
  "./folder/result_sync.txt",
  `This is a result text file ${first} ${second}`,
  { flag: "a" }
);