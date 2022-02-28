function a() {
    c();
    function c() {
        console.log(b);
    }

}
var b = 10;//you have to define  b before calling function a
//if we log B inside a function we can get the value of B.
//if we log B inside a inner function also we can get the va;ue of B
a();

//example 2
function n() {

    var l = 20;
    m();
    function m() {
        console.log(l);//if l is defined outside the function and then if its called we can get the value of l
    }
}
n();
//if we define call l outside the function we get the output as not defined as the value of it is defined inside the function
//whenever a global execution context is created,lexical environment is also created.
//lexical environment is nothing but local memory  along with lexical environment of parent.
//lexical means where the code is physically present that means in the above example c is inside a in other words c is lexically inside A
//c's lexical parent is A
//when js is skimming through a function it checks its local values and variables and it checks its parents one
function k(){
    var np=10;
    lo();
    function lo(){
        console.log(np);
    }
}
k();
//so in here in the function lo first it checks for the value of np in its local when its not available in the local it goes to its parents 
//scope chain-if you don't find the value for a variable in your local environment you go to the parents scope,if you don't find the value there also you go to find it in its parents scope..it goes on till you get the value null(not defined)
//the chain of lexical environments is called as scope chain