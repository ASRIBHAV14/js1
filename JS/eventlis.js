// the below function first gets the element whose ID is clickMe and then it is added with a event listener.When the click is done it calls the callbacxk function.
document.getElementById("clickMe").
    addEventListener("click",
        function xyz() {
            console.log("hiii this page is working");
        });

document.getElementById("submit").
    addEventListener("click",
        function bh() {
            console.log("submit button is working")
        })

//whenever you are going to click a button,it is pushed onto callstack
//for data hiding we use closures
function abc() {
    let count = 0
    document.getElementById("clickMe").
        addEventListener("click",
            function yu() {
                console.log("you have clicked click me button", ++count)
            })

}
abc();
//when we are writing a outer function(abc) it forms closure with callback function (yu)
//the event listener in the webpage has a thing which is handler.The handler has the call back function.
//closure has all the scopes attached to it
