//objects store the variables and its values as key:value pairs
//named function
function okay() {
    var cone = new Object();
    cone.name = "icecream";
    cone.number = 45;
    cone.age = 25;
    return cone;
}
console.log(okay());

//self invoking function
function abc() {
    var product = new Object();
    product.name = "washing machine";
    product.type = "appliance";
    product.cost = 90000;
    return product;
}
console.log(abc());

//objects
const gender = {
    male: 26,//male is a property and gender is an object
    female: 25,
    les: 18,
    ga: 56,

}
//so we use objectname.property name for getting the objects out
console.log(gender.male);
console.log(gender["female"]);

//inline 
const choc = {
    name: "ferrero",
    cost: 45,
    who: "anyone",
    loc: function anylo() {
        return "name: " + this.name + "  cost of the chocolate: " + this.cost + "  who can eat this chocolate:  " + this.who     //here this.name refers to object.name
    }
}
console.log(choc.loc());

//customobject
function prson(pname, page, pjob) {
    this.name = pname;
    this.age = page;
    this.job = pjob;
    this.infor = function () {
        return "person's name: " + this.name + " age: " + this.age
            + " job: " + this.job
    }
}
var maley = new prson("ammu", 45, "software");
console.log(maley.infor())

