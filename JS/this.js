//blank program is one of the shortest program in js....js engine is goint to load and allocate the memory eventhough theres is nothing to be loaded
//when global execution context is created global object is created and a this is created along with it
//this is similar to window in the global spacxe;this===window
//global space is nothing but which is written at the top of tje program nd not inside the function

var x = 10;//global space variable
function hoi() {
    var b = 8;
    console.log(b)//functional space variable
}
console.log(x);
//console.log(window.x)-o/p-10
//console.log(this.x)-o/p-10
console.log(b);//not defined
