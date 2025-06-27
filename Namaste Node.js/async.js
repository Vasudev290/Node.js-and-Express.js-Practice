const fs = require("fs");
const https = require("https");
const crypto = require('crypto')
console.log("Hello World!");

var a = 544534;
var b = 890654332476;

//fetch
https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Data fetched Successfully!");
});

setTimeout(() => {
  console.log("setTimeOut Called after 5 seconds!");
}, 5000);

fs.readFile("./file.txt", "utf-8", (err, data) => {
  console.log("File Data :", data);
});

crypto.pbkdf2("Password", "salt", 50000, 10, "sha512", (err, data) => {
    console.log(data, "crypto Data genarated successfull..!")
})

function multiplcationCal(x, y) {
  const result = a * b;
  return result;
}

const c = multiplcationCal(a, b);
console.log("Total Value of MultiCal :", c);

/*
Excution Output
 => Hello World!
 => Total Value of MultiCal : 484991566280486200
 => File Data :, Hello eevryone goodafternoon..!
 => res, "Data fetched Successfully!
 => setTimeOut Called after 5 seconds!
*/
