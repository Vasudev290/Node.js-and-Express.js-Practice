const fs = require("fs");

setImmediate(() => console.log("setImmediate"));

setTimeout(() => {
  console.log("Timer Experied");
}, 0);

Promise.resolve().then(() => console.log("Promise Resolve!"));

fs.readFile("./file.txt", "utf-8", () => {
  setTimeout(() => {
    console.log("2nd Timer Experied");
  }, 0);
  process.nextTick(() => console.log("2nd process.nextTick"));

  setImmediate(() => console.log("2nd setImmediate"));

  console.log("File data readed successful!");
});

process.nextTick(() => console.log("process.nextTick"));

console.log("last line of the file!");

/**
last
nexttrick
promise
timer exper
setimmediate

file readed
2nd nexttrick
2nd setimmedate
2nd timer
 */
