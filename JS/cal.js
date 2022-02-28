//named
function calc(a) {
    console.log("named function:")
    return a * a;
}
console.log(calc(9));

//anonymous
var c = function (b) {
    console.log("anonymous")
    return b * b;
}
console.log(c(5));

//constructor
var bh = new Function("d", "console.log('const');return d*d;")
console.log(bh(6))

    //self invok
    /* (function (p) {
        //console.log("hi");
        return p * p;
    })(8) */;