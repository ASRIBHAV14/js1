//Object creation

var person = new Object()
person.name = "bhavya"
person.age = 22

//keeping the object in function.....1
function createperson() {
    var person = new Object()
    person.name = "bhavya"
    person.age = 22
    return person;
}
console.log(createperson());

//creating object with{}.....2
function createperson2() {
    var person = {}
    person.name = "bhavyaaaaa"
    person.age = 22
    return person;
}
console.log(createperson2())

//creating object with[]......3
function createperson3() {
    var person = {}
    person['name'] = "bhavya"
    person['age'] = 22
    return person;
}
var hoo = createperson3();
prompt("name: " + hoo.name + "  age: " + hoo.age)

//creating the object in the first.......4
function createperson4() {
    var person = {
        name: "bhavya",
        age: 45,
        designation: "developer"

    }

}
var hu = createperson4();

//creating object with constructor
function Person() {
    this.name = "gola";
    this.age = "22";
}
var go = new Person();
console.log(go);

//creating object with method name
var food = {
    type: "sea food",
    restaurantType: function () { //method name rt
        alert("this is alert" + this.type)
    }
}
//creating many objects using prototype
var chicken = Object.create(food);
chicken.type = "good"
chicken.restaurantType();//calling with method name

//for loop and deletion
var person = {
    name: "kavya", //properties
    age: 45,
    designation: "teacher",
    subjects: ["math ", "physics ", "science "]
}
var through = "";
for (p in person) {
    through += p + " :"
}
console.log("before deletion  " + through);

//deletion
delete person.age
through = "";
for (p in person) {
    through += p + " : "
}
console.log("after deletion" + through);
