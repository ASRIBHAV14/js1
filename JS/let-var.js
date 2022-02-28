console.log(a);
var a = 10;//if we try to log the value of a first we can get the value of a as undefined
let b = 20;//if we try to get the value of b(i.e..,let) before initializing we can't the value of b it gives us error
//TEMPORAL DEADZONE-the phase between the hoisting and it is initialized with some value
//when you try to access the values during temporal deadzone you get reference error.You cannot access the valyes during T.D.Z.you can only access those variables when they have some value.
//var are attached to window when you write the code,but the thing is not the same for let and const and they are not attached to the window
//if we write window.a or this. a we can get the output as 10 in the case of var,but it is not the same for let and const they give undefined as output
//let and const are stored in a separate storage
//when let is declared more than once it throws syntax error.like....
let u = 5;
let u = 6//syntax error
//you can't redeclare the variable more than once in the same scope in the matter of let but in var itr xcan be possible
var ab = 10;
var ab = 20;

//we can declare a variable "a" once and we can initialize it anywhere in the program but it is not the same case in "const"
//const should declared and initialized at one place only otherwise we would get missing syntax error
//you cannot use the same variable twice for redeclaration in the matter of const it gives u typeerror
//when you try to access the values during temporal deadzone you get reference error or when there is no variable present in the code,u could get the same error
//when let is declared more than once it throws syntax error.
