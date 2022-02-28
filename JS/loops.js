//if

var age = prompt("enter your age");
age = parseInt(age);
if (age <= 40) {
    document.write("You are young"); // console.log doesn't display on the browser
}
else if (age <= 60 && age > 40) {
    document.write("you are middle ");

}
else {
    document.write("you are dead")
}


//switch

var weight = parseFloat(prompt("enter your age"));
switch (weight) {
    case 50:
        document.write("You are underweight");
        break;
    case 60:
        document.write("you are good");
        break;
    case 70:
        document.write("We are good to go");
        break;
    default:
        document.write("okayyy");

}


//for loop
var subjects = ["maths", "science"];
var marks = new Array();
var Num;
for (var j = 0; j < subjects.length; j++) {
    Num = parseFloat(prompt("enter  marks for subject:" + subjects[j]));
    marks[j] = Num;
    //document.write(marks[j] + sub[j])
}

for (h in marks) {
    console.log(marks[h])
}

//while
var a = 8;
while (a < 10) {
    console.log(a);
    a++;
}

//do while
do {
    console.log(a);
} while (a < 10)