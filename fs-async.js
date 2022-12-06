const { readFile, writeFile } = require("fs");

console.log("start");
readFile("./folder/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  const first = result;

  readFile("./folder/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
    }
    const second = result;

    writeFile(
      "./folder/result_async.txt",`This is async writeFile function result ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with task");
      }
    );
  });
});

console.log("starting next task");