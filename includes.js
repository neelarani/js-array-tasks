/* 3. Checking Array Membership with ‘includes’
Instructions:

1. Create an array of books containing different book.

2. Use the includes method to check if the array contains a javascript book.

3. Print a message to the console indicating whether the element is present in the array or not. */

// Step 1: Create an array of books
const books = ['Eloquent JavaScript', 'The Definitive Guide', 'Clean Code'];

// Step 2: Use the includes method to check if the array contains a JavaScript book

const hasJavascriptBook = books.includes('Clean Code');
console.log(hasJavascriptBook);

// Step 3: Print a message to the console based on the result
if (hasJavascriptBook) {
  console.log('The book is present');
} else {
  console.log('The book is not present');
}
