//operators

var x =5;
var y = x ** 2;
alert("square is"+y);
var z= Math.pow(x,2);
alert("square is"+z);
var carname1="bmw";
var carname2="civic reborn";
document.getElementById("demo").innerHTML= carname1 + "<br>"+carname2;
var answer1= "alright";
var answer2 = "its 'alright'";
var answer3 = 'its "ok" tanzeel';

//objects
var person = {
    firstName : "John",
    lastName  : "Doe",
    age     : 50,
    eyeColor  : "blue"
  };
document.getElementById("demo2").innerHTML= person.firstName + "is" + person.age + "years old."; 

//functions
var a =5;
var b = 10;

function myFunction(){
var z =a*b;
return z;
}
var t = myFunction();
alert("multiplacation calling function"+t);