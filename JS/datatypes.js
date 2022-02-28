console.log("hello");
document.write("hii");
// datatypes
var general;
console.log(typeof general);
general = 9.3;
console.log(typeof general);
general = 9;
console.log(typeof general);
general = "hii";
console.log(typeof general);
general = 'hi';
console.log(typeof general);
general = null;
console.log(typeof general);

//arrays
general = ["hot", "cold", "cafe"];
console.log(typeof general);
console.log(general.length);

//+operator(concatination)
console.log(2 + 3);
console.log("hawaien" + "harley");
console.log(2 + "hawaein");

//typeconversions

//implicit
var num1 = 9;
var num2 = num1 + 5;
console.log(typeof num2);
num2 = num1 + "hii";
console.log(typeof num2);

//prompt
var num9 = prompt("enter some value");
console.log(typeof num9)
var num10 = parseInt(num9) + "hii";
console.log(num10);

alert("this is an alert");