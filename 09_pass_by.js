/*
It's always pass by value, but for objects the value of the variable is a reference. 
Because of this, when you pass an object and change its members, those changes persist outside of the function. 
This makes it look like pass by reference. But if you actually change the value of the object variable you will see that the change does not persist, proving it's really pass by value.

*/

function changeStuff(num, obj1, obj2) {
  num = num * 10;
  obj1.item = "changed";
  obj2 = { item: "changed" };
}

var num = 10;
var obj1 = { item: "unchanged" };
var obj2 = { item: "unchanged" };

changeStuff(num, obj1, obj2);

console.log(num); //10
console.log(obj1.item); //changed
console.log(obj2.item); //unchanged
