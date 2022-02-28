/* function out() {
    function inner() {
        console.log(a);
    }
    let a = 10;
    inner();
}
out();//10 will  be the output let still has access to inner scope

function oute(b) {
    function inn() {
        console.log(i, b);
    }
    let i = 10;
    inn();
}
oute("hello world");//10 along with hello world
 */
function outest() {
    var c = 20;
    function outer() {
        function inner(b) {
            console.log(a, b, c)
        }
        let a = 10;
        return inner;
    }

    return outer();
}
let a = 100;
(outest())("hello world");//10,helloworld and 20
//we wont get 100 as the output of a


