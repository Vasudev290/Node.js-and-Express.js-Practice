const fs = require("fs");

const a = 10;

setImmediate(() => console.log("setImmediate"));

Promise.resolve().then(() => console.log("Promise Resolve!"));

fs.readFile("./file.txt", "utf-8", () => {
  console.log("File data readed successful!");
});

setTimeout(() => {
  console.log("Timer Experied");
}, 0);

process.nextTick(() => console.log("process.nextTick"));

function printA() {
  console.log("A =", a);
}
printA();

console.log("last line of the file!");



/**
 * a=10;
 * last line
 * process.nextTick
 * promise resolve
 * timer experied
 * setIMmedated
 * file data readed 
 */