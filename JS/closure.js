const greet = 'hi'
function ok() {
    console.log(greet)
}
ok()


//2nd
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('outer' + outerVariable)
        console.log("inner" + innerVariable)
    }
}

const hello = outerFunction('outside')
hello('inside')
//binding function along with its lexical scope is called as closure
//you can pass the function as a parameter to a function
function a() {
    var av = 10;
    b();

}
a(function b() {
    console.log(av)

});
//you can return a function also
function x() {
    var a = 90;
    function yu() {
        console.log(a);
    }
    return yu;

}
var ty = x();
console.log(ty);




//or

function a() {
    var a = 20;
    return function b() {
        console.log(a);
    }
    b();
}
a();


//when we are executing x() the whole yu() function is returned
//after printing ty x() gets destroyed and x itelf is not in the program.so now ty contains yu function.
//after 1000 lines of code when try to call the ty then the output of it will be 90.because the function yu still remembers the lexical scope.
//outer functions return inner functions as their output.
//here we get the function along with lexical scope as the output

function bh() {
    var t = 9;
    return function iu() {
        console.log(t);
    }
    t = 99;
    iu();
}
var nh = bh();
console.log(nh);//99 is the output because t only points to the memory location not the value of it 

function a() {
    var z = 22;
    function b() {
        var y = 23;
        function c() {
            console.log(y, z);
        }
        c();
    }
    b();
}
a();
//here we get the values of y and z because they are local variables values and they are of lexical scopes's values.They are not collected by garbage.
//eventhough if the closure is executed in some other scope,it has the values of its original scope.

