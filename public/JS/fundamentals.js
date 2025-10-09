/***************************
 * 
 
FUNDAMENTALS CODE

****************************/

function myFunction(p1, p2) {
return p1 * p2; //this function will return the multiplication of p1 and p2.
}


// Window Alert
function initialise() {
window.alert("Hello World");
document.getElementById("printhere").innerHTML = "Hello World";


let x = "20"  
let y = "25"

document.getElementById("datatypes").innerHTML = parseInt(x) + parseInt(y);



// booleans and conditionals
x = 5;
y = 9;

if(x != y ){document.getElementById("booleans").innerHTML = "its true "+ x +"!= "+ y  };



let my_array = ["item1", "item2", "item3"];
// Referring to array by index
document.getElementById("array").innerHTML = my_array[1];
my_array[0] = "newItem1";
document.getElementById("changearray").innerHTML = my_array[0];
document.getElementById("fullarray").innerHTML = my_array;
document.getElementById("arraylength").innerHTML = my_array.length;



let text = "";
for (i = 0; i < 25; i= i + 4){
 text += "The number is " + i + "<br>";
}
document.getElementById("forloop").innerHTML = text;

document.getElementById("function").innerHTML = myFunction(5, 4);


// debugging

let xq = 20;
let yq = 8;
let zq = xq + yq;
console.log("The Value is", zq);





}


// Function
function dateTime(){
    document.getElementById('dateTime').innerHTML = Date();
};
