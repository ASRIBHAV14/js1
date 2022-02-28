a();//a called
b();//typeerror :b is not defined

//function statement aka function declaration
function a(){
    console.log("a clled")
}

//function expression
var b=function(){
    console.log("b called")
}

//the difference between them is hoisting one of them gives the output and other throws the error.
