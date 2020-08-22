/*

   1. Constant O(1) - Someone directly answers your request. - Linear O(n) - Asking person by person.

   2. Linear O(1) - Only two possible outcomes, always has to perform one operation.

   3. Polynomial O(n^ 2), O(n*m) - Nested for loops, has to run through both array lengths to compare elements.

   4. Linear O(n) - Run time determined by array length.

   5. Linear O(n) - Searches through an array for an item.

   6. Polynomial O(n^2) - Runs through nested for loops and logs out pairs of elements.

   7. Linear O(n) - Time is still determined by length of input because it compares every element and does something accordingly.

   8. Logarithmic O(log(n)) - Uses Math.Floor to cut the input in half and changes the min and max index accordingly. 

   9. Constant O(1) - Directly returns a single random element of an array.

   10. Detects Prime Numbers. 
   Linear N runs through two steps to determine the value and return a boolean. Determines if its a prime number.

*/

// Iterative versions of recursion excercises

function countSheep(num) {
  for (let i = num; i >= 0; i--) {
    if (i === 0) {
      console.log("All sheep jumped over the fence");
    } else {
      console.log(`${i}: Another sheep jumps over the fence`);
    }
  }
}

//countSheep(3);

const powerCalc = (base, exponent) => {
  let product = 1;
  if (exponent <= 0) {
    return "exponent should be >= 0";
  }
  for (let i = 0; i < exponent; i++) {
    product *= base;
  }
  return product;
};

//console.log(powerCalc(2,0));

const reverseStr = (str) => {
  let output = "";
  for (let i = str.length - 1; i >= 0; i--) {
    output = output + str[i];
  }
  return output;
};

//console.log(reverseStr("WOWZA"));

const tri = (num) => {
  let base = 0;
  let step = 1;
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push((base += step));
    step++;
  }
  return arr;
};

//console.log(tri(10))

//need to find a way to only push completed date values
const splitter = (string) => {
  let output = "";
  let arr = [];
  for (let i = 0; i < string.length; i++) {
    output = output += string[i];
    if (string[i] === "/") {
      string[i] = "";
      output = "";
    } else {
      console.log(output);
    }
  }
  return arr;
};

//console.log(splitter("08/31/1992"));

const fibo = (num) => {
  let base = 0;
  const arr = [0, 1];
  for (let i = 0; i < num; i++) {
    arr.push(arr[i] + arr[i + 1]);
  }
  return arr.slice(1, -1);
};

//console.log(fibo(10));

const facto = (num) => {
  let total = 1;
  for (let i = 1; i <= num; i++) {
    total *= i;
  }
  return total;
};

//console.log(facto(5));
