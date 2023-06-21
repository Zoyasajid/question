//  question no 1

function triangle() {
    var side1 = Number(prompt("Enter the number for  1:"));
    var side2 = Number(prompt("Enter the number for 2:"));
    var side3 = Number(prompt("Enter the number for 3:"));
  
    if (side1 === side2 && side2 === side3) {
      return "Equilateral triangle";
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
      return "Isosceles triangle";
    } else {
      return "Scalene triangle";
    }
  }
  console.log(triangle());

//  question no 2

function yearcheck(year) {

    let leap = new Date(year, 1, 29).getDate() === 29;
    if (leap) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

let year = prompt('Enter a year:');

yearcheck(year);

//   question no 3
function sumArray(numbers) {
    var sum = 0;
    
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    
    return sum;
  }
  var numbers = [1, 2, 3,  3,4, 5];
console.log(sumArray(numbers)); 

//  question no 4

function reverseArray(array) {
    var reverse = [];
    
    for (var i = array.length - 1; i >= 0; i--) {
      reverse.push(array[i]);
    }
    
    return reverse;
  }
  var array = [1, 2, 3, 4, 5];
console.log(reverseArray(array));

