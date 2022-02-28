/* function a() {
    var a = 9;
    setTimeout(function () {
        console.log(a);
    }, 2000);
    console.log("hii javascript")
}
a(); */
//here the settimeout first takes the callback function and stores somewhere in the memory and  when the timer expires then it puts onto the stack and console.log is printed

//when you want 1 for 1 sec and 2 for 2 secs and 3 for 3 secs we use for loop
function x() {
    for (var i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);


    }
    console.log("hii");
}
x();
//here we get 6 everytime coz we are printing i everytime which is pointing to the same memory location everytime
//the simple sol of it is using let because leyt is block scoped.after every iterationthe variable is destroyed and a whole new memory location is pointed.

function y() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
    console.log("hiiiii")
}
y();

//we can do this by using var also but by creating another inner function
function yt() {
    for (i = 1; i < 6; i++) {
        function close(i) {
            setTimeout(function () {
                console.log(i)
            }, i * 1000)
        }
        close(i);
    }
    console.log("din");
}
yt();