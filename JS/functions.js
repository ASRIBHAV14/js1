//named
//anonyms
//constructor
//self-invoking

// we have to declare a function and we have to call a function,if the function is not called it doesn't work,......return statement is mandatory

//named function.........function name can be called multiple times at any place
//function statement aka function declaration
function add(a, b) {
    console.log("hii")
    return a + b; //if you don't write return statement and you write console.log you'll get undefined as output
}

console.log(add(2, 3));
add(5, 8);//calling the function by its name

var d = add(5, 6)
console.log(d)

//sub
function sub(f, g) {
    return f - g
}

console.log(sub(7, 8))


//anonymous function
//in named function we can call the function as that is having a name but in here we don't have a name for a function,so we store it in avariable and call it by its variable name
var add = function (a, b) { return a + b };
console.log(add(80, 80));
//this is stored in a variable

//passed as an argument to a function
// in here actually a timeout is taken as an argument
setTimeout(function () {
    alert("this message is displayed after how many seconds?")
}, 50);

//anonymous function with a construc
var mul = new Function("a", "b", "console.log('hi');return a*b");
console.log(mul(9, 5));


//self invoking
(function (a, b) {
    console.log("self..............")
    return a * b
}(6, 7));

//first class functions
//the ability to use functions  as values and can be passed as an argument to other function and returned from another function is known as first class functions
var ab=function xy(param){
    return function(param){
        //anonymous function
    }
}
console.log(ab());