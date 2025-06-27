const fs = require("fs");

setImmediate(() => console.log("setImmediate"));

setTimeout(() => {
  console.log("Timer Experied");
}, 0);

Promise.resolve().then(() => console.log("Promise Resolve!"));

fs.readFile("./file.txt", "utf-8", () => {
  console.log("File data readed successful!");
});

process.nextTick(() => {
  process.nextTick(() => console.log("inner nextTick"))
  console.log("nextTick")
})
console.log("last line of the file!");

/**
 * last line
 * nextTick
 * inner nextTick
 * promise resolve
 * timer experied
 * setImmediate
 * file data readed successfull
 */
