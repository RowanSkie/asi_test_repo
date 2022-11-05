function arith(num1, num2){
	const arit = [];
	arit.push(num1+num2);
	arit.push(num1-num2);
	arit.push(num1/num2);
	arit.push(num1*num2);
	
	return arit;
};

function loop(count){
	con = [];
	for(let i = 0; i < count; i++){
		con.push(i);
	}
	return con;
}

function bool(num1,num2){
	return Boolean(num1 <= num2);
}

function output(num1, num2, arit, con, bool){
	console.log("\nFunction: Arithmetics");
	console.log(num1, "+", num2, "=",arit[0]);
	console.log(num1, "-", num2, "=",arit[1]);
	console.log(num1, "/", num2, "=",arit[2]);
	console.log(num1, "*", num2, "=",arit[3]);
	
	console.log("\nFunction: Loop");
	for(let i = 0;i < con.length; i++){
		console.log("counting :",con[i])
	}
		
	console.log("\nFunction: Boolean");
	console.log("Is",num1,"lessthan or equals to",num2,":",bool);
	process.exit();
}

function names(){
console.log("Group Members:\nJericho Magsino\nKyle Tangcawan\nMark Zuniga\nNicole Manansala");
}

module.exports = {arith, loop, bool, output, names};