const funcs = require("./zuniga_malicdem_maniago_tangcawan_functions.js");
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
console.log("Function names")
funcs.names();

x = 5;
y = 20;
z = 20;

ariths = funcs.arith(x,y);
loopres = funcs.loop(z);
boolres = funcs.bool(x,y);
console.log("Function: Print");
funcs.output(x,y,ariths,loopres,boolres);