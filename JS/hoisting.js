//if we use the values even before we initialize them,we caan get the values of the function defined inside them and we can get undefined for a variable


console.log(hoist);//this results in the output of the whole function
console.log(hoist());//this results in the output of the console.log
console.log(x);//this results in undefined

var x = 7;//if x is not defined we get output as error if we try to print x
function hoist() {
    console.log("hii there")
}


//In the memory code allocation,we can store the whole code only in the named function,it is not possible to store the wholw code if it is a anonymous function or arrow function they result in the output of undefined
//anonymous and arrow function are treated as another variable and memory is allocated as undefined

//anonymous
var hoo = function () {

}

//arrow function
var hoi = () => {
    console.log("dooodleee")
}