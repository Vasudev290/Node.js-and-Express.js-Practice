const fs = require("fs");
const crypto = require("crypto");

//if we want decrease the thread pool size also
process.env.UV_THREADPOOL_SIZE = 8;

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, data) => {
  console.log("1- crypto done");
});

// fs.readFile("./file.txt", "utf-8", (err, data) => {
//   console.log("File data readed successful! => ", data);
// });

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, data) => {
  console.log("2- crypto done");
});
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err) => {
  console.log("3- crypto done");
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err) => {
  console.log("4- crypto done");
});
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err) => {
  console.log("5- crypto done");
});
