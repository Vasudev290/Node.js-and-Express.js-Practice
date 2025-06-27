const fs = require("fs");
const a = 10;
setImmediate(() => console.log("setImmediate"));
fs.readFile("./file.txt", "utf-8", () => {
  console.log("File data readed successful!");
});

setTimeout(() => {
  console.log("Timer Experied");
}, 0);

function printA() {
  console.log("A =", a);
}
printA();

console.log("last line of the file!");
