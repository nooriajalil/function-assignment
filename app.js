
// qno1
// function custom(a,b) {
//     return Math.pow(a,b)   
// }
// console.log(custom(2,4));


function power(base, exponent) {
    return Math.pow(base, exponent);
}

let base = 2;
let exponent = 4;
let result = power(base, exponent);

console.log(result); 

// qno2

// program to check leap year
function checkLeapYear(year) {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

// take input
const year = prompt('Enter a year:');

checkLeapYear(year);

// qno3

// Function to calculate the semi-perimeter (S)
function calculateSemiPerimeter(a, b, c) {
    return (a + b + c) / 2;
  }
  
  // Function to calculate the area of the triangle
  function calculateAreaOfTriangle(a, b, c) {
    var s = calculateSemiPerimeter(a, b, c);
    var area = (s * (s - a) * (s - b) * (s - c));
    return area;
  }
  
  // Example usage
  var a = 5; // side a
  var b = 6; // side b
  var c = 7; // side c
  
  var a = calculateAreaOfTriangle(a, b, c);
  console.log("The area of the triangle is: " + a);

//   qno4
  // Function to calculate average of three subjects
function calculateAverage(marks1, marks2, marks3) {
    return (marks1 + marks2 + marks3) / 3;
  }
  
  // Function to calculate percentage of total marks (assuming total marks = 300)
  function calculatePercentage(marks1, marks2, marks3) {
    var totalMarks = 300; // Assuming each subject is out of 100
    var obtainedMarks = marks1 + marks2 + marks3;
    return (obtainedMarks / totalMarks) * 100;
  }
  
  // Main function to call average and percentage functions and display results
  function mainFunction(marks1, marks2, marks3) {
    var average = calculateAverage(marks1, marks2, marks3);
    var percentage = calculatePercentage(marks1, marks2, marks3);
    
    console.log("Average Marks: " + average);
    console.log("Percentage: " + percentage + "%");
  }
  
  // Example usage
  var marks1 = 80; // Marks in subject 1
  var marks2 = 75; // Marks in subject 2
  var marks3 = 90; // Marks in subject 3
  
  mainFunction(marks1, marks2, marks3);

//   qno6

function removeVowels(sentence) {
    return sentence.replace(/[aeiouAEIOU]/g, '');
}

// Example usage
console.log(removeVowels("This is a test sentence.")); // Output: "Ths s  tst sntnc."

// qno7
function countSuccessiveVowels(text) {
    var count = 0;
    for (var i = 0; i < text.length - 1; i++) {
        var pair = text[i] + text[i + 1];
        console.log(pair);
        
        if (/([aeiouAEIOU]){2}/.test(pair)) {
            // count++;
        }
    }
    return count;
}

// Example usage
console.log(countSuccessiveVowels("Pleases read this application and give me gratuity"));

// qno8
function convertToMeters(km) {
    return km * 1000;
}

function convertToFeet(km) {
    return km * 3280.84;
}

function convertToInches(km) {
    return km * 39370.1;
}

function convertToCentimeters(km) {
    return km * 100000;
}

// Example usage
var distanceInKm = 5; // Example distance
console.log("Meters: " + convertToMeters(distanceInKm));
console.log("Feet: " + convertToFeet(distanceInKm));
console.log("Inches: " + convertToInches(distanceInKm));
console.log("Centimeters: " + convertToCentimeters(distanceInKm));

// qno9
function currencyNotes(amount) {
    var hundred = Math.floor(amount / 100);
    var remainder = amount % 100;

    var fifty = Math.floor(remainder / 50);
    remainder = remainder % 50;

    var ten = Math.floor(remainder / 10);

    console.log("100 notes: " + hundred);
    console.log("50 notes: " + fifty);
    console.log("10 notes: " + ten);
}

// Example usage
currencyNotes(880); // Output: 100 notes: 8, 50 notes: 1, 10 notes: 3





