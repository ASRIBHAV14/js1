//a block is place where the statements are grouped together.We use this where single statements are replaced by a multiple statements.so js expects only 1 statement instead of many statements.

{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);//wer can get the value of a
console.log(b);//undefined-reference error
console.log(c);//" "
//when debugger is kept at line 4 i.e...,var  .......var is kept inside global environmnt and let and const are in block scope.whwn the whole code is ran again const and let are no longer available.

//shadowing in case of var
var a = 1000;
{
    var a = 100;//this var shadows the other var
    let b = 200;
    let c = 300;
    console.log(a);//100
}
console.log(a);//100 this is because var is in the global scope and they both are pointing to the same location that is global space

//there are 3 types of memory : 
//GLOBAL SCOPE:where var variables and values are stored
//block scope:where let and const are defined after the function or block they are not anymore
//script: a separate memory where let and var are defined

//shadowing in case of let
let p = 100;
{
    let p = 20;
    console.log(p)//20
}
console.log(p)//100
//the same is the case with const
//the same process goes in function

//illegal shadowing
//you can't write let in the global space and var in the block ,it throws a error
let a = 100;
{
    var a = 1000;
}//throws error coz a is already declared

let a = 98;
function nji() {
    var a = 58;
}//doesn't throw error because  var is function scoped

let a = 100;
function nji() {
    let a = 1000;
}//no error

var a = 90;
function mnjh() {
    let a = 98;
}//works fine

//blockscope is lexical scope

const a = 10;
{
    const a = 20;
    {
        const a = 30;
        console.log(a)//30
    }
    console.log(a)//20
}
console.log(a);//30 