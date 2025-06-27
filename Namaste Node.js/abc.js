
//We can't execess the file for variables, functions and methods it l'll leak the data
//for use case time we can export the modules.

console.log("Hi I'm from ABC file");
z="Hello world!"

var x = 10;
function calculateNumber(a, b){
    const sum = a + b;
    console.log(sum)
}


(function(module, require){

})(module.exports)

module.exports = {calculateNumber, x};