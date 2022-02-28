/* // we write a function and when we are calling that function, if we pass another function inside the older function as an argument it is known as call back function(second function which we passed as argument)
function ab() {

}
ab(function bc() {
    //bc is called as callback function
})
//u can call the function anywhere in the code.
function ab(bd) {

}
ab(function bd() {

})
//if you give the responsibility of callback function to anyother function it is the choice of the function to call anywherein the code.......it can be called back at anytime....so it is called as callback function
//we can use callback functions in asynchronous also,we can use settimeouts
//the  first function which we use a parameter in the settimeout is called as callback function
setTimeout(function ab(){
    console.log("this is going to appear after 5 secs")
},5000);
function bc(dd){
    console.log("this is outer fun")
    dd();
}
bc(function dd(){
    console.log("this is callback function")
})
//actually js is synchronous and is single threaded that means it is going to execute the code line by line in an orderly fashion but here 
//the js doesn't wait for 5 secs near the timer ,it instead gives it a separate memory and when the timer expires then it is going to print the output until then it is going to print the other ones.
//whatever we get the output in the webpage it comes through callstck only.
//js has only 1 callstack and we can call it as main thread. If we have any heavy programs which are going to take 20-30 secs ,it is going to block the whole program as it is going to more time.This is called as blocking the main thread. */

/* function ab() {
    console.log("hii")
}
function xy() {
    console.log("byee")
}
console.log(ab(xy())); */

function bv() {
    console.log("this is going to have another function in its parameter");


}

bv(function cd() {
    console.log("cd is called");
    
});
