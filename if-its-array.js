/*. Checking if it's an Array
Instructions:

1. Create different variables, each containing either an array or a non-array value.

2. Now use isArray to check if each variable is an array.

3. Print a message to the console indicating whether each variable is an array or not. */

// Step 1
const array = [1, 2, 3, 4];
const array2 = '[]';

// step 2
const checkArray = Array.isArray(array);
const checkArray2 = Array.isArray(array2);

// step 3
console.log(`Array is an array: ${checkArray}`);
console.log(`Array is an array: ${checkArray2}`);
