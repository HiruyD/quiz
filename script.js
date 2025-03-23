// Array containing all possible digits (0-9) that can be randomly selected
let genNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let uniqueVal = []; // Array to store the generated random numbers
let numbers = [];
let distinctValues = [];
// Global variable to store the count of numbers to generate
let count = 0;

/**
 * Generates random numbers based on user input and stores them in an array
 * Also displays the generated numbers on the webpage
 */
function generate() {
  // Get the number of random digits to generate from the input field
  count = document.getElementById("number").value;

  // Clear the previous results by resetting the numbers array
  numbers = [];

  // Generate random numbers and add them to the array
  for (let i = 0; i < count; i++) {
    // Generate a random index to select a digit from genNum array
    let randomNum = genNum[Math.floor(Math.random() * genNum.length)];
    // Add the random digit to our numbers array
    numbers.push(randomNum);
  }

  // Display the generated numbers on the webpage, separated by commas
  document.getElementById("result").innerHTML = numbers.join(", ");
}

/**
 * Finds and displays duplicate numbers in the generated array
 * Uses nested loops to compare each number with every other number
 */
function duplicate() {
  // Clear the previous results by resetting the uniqueVal array
  uniqueVal = [];
  // Outer loop to select each number
  for (i = 0; i < count; i++) {
    // Inner loop to compare with remaining numbers
    // Starts from i+1 to avoid comparing a number with itself
    for (j = i + 1; j < count; j++) {
      // If a duplicate is found, display it
      if (numbers[i] == numbers[j]) {
        uniqueVal.push(numbers[i]);
        break; // Exit the inner loop after finding a duplicate
      }
      let distinctValues = [...new Set(uniqueVal)];
      document.getElementById("duplicate").innerHTML =
        distinctValues.join(", ");
    }
  }
  // Display the duplicate numbers on the webpage, separated by commas
}
