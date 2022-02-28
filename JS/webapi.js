 function a() {
    console.log("haiiiii");
}
a();
console.log("byee");
//here we have global execution context first pushed into the call stack and when the jse comes to first line a is allocated some place ion the memory and function is written as it is.
//coming to the 4 th line when the function is invoked again the function is pushed on to the call stack and when the console log is done i.e.,haiiii is printed ands when there is nothing more to print this function is poped out of the call stack.
//then byee is printed onto the consiole.
//as the whole function has been completed printing the global execution context also gets destroyed.
//only the functions in the code are pushed on and poped out of the GEC

console.log("eventlistener")

let count = 0;
document.getElementById("submit").
    addEventListener("click", function cb() {
        console.log("callback is called", ++count)
    })
console.log("byki")
 
//the jse gets the console from web API and then it prints it onto the console
//document.getelementbyId goes to DOM  and gets the element.Add event listener is there to get registered click  for the local memory in the web API.so it stays there until some user clicks on the button
//then it goes to last line and execeutes the byki.
//when some user clicks on the button submit,the fuction is called onto the call stack queue  and event loop checks for the event and then pushes it onto the call stack.
//callback queue is there bcoz if a user clicks the button many times, the event gets called those many times and they are in the callback queue.as there is only one call stack they get executed each at a time.

console.log("this is about fetch")

setTimeout(function fet() {
    console.log("this is being fetched")
}, 6000)

fetch("https://api.netflix.com").
    then(function cbf() {
        console.log("fetches promises")
    });

console.log("the end")
//fetch goes and requests the api webpage and the fetch function returns a promise.we will execute the callback function once the promise has been resolved. 
//in other words when the page is fetched the callback function has been executed. 
//here console log is executed and the ettimeourt has registered itself in the webapi's local memory and it is waiting for the timer to expire,at the same time fetch function cbf is waiting for the page to come from the requested site.
//here the cbf has another quueue like structure which is microtask queue.Microtask quue has the highest priority than the callback queue.
//we only  keep the functions of promises in the microtask queue