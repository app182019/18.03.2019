console.clear()
var arr = [ 1, 4, 5, -9 , 6 ] // this is how to create array with elements

var myArray = [] // this is how to create an empty array

var x = parseInt(prompt("please enter number (-1 to exit)"))
while (x != -1)
  {
    myArray.push(x) // insert x as last element in the array
    x = parseInt(prompt("please enter number (-1 to exit)"))
  }

var sum = 0
for(var i = 0; i < myArray.length; i = i + 1)
  {
    sum = sum + myArray[i]; // add to sum the array elemnt in i location [index]
  }

console.log(`Sum = ${sum}`)
console.log(`Average = ${sum / myArray.length}`)
