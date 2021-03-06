/** KATA 01 ⮕ add
 ***
 *** Write a function called add that takes two parameters
 *** and returns the sum of those 2 numbers.
 ***
 **/
function add(a, b) {
  return a + b;
  // document.body.innerHTML += "</br>" + add + "</br>";
}
document.body.innerHTML += "</br>" + "Kata 01 ⮕ Add: " + "</br>";
console.log(add(2, 4));
document.body.innerHTML += "</br>" + "2 + 4 = " + add(2, 4) + "</br>";

/** KATA 02 ⮕ Multiply
 ***
 *** Write a function named "multiply" which takes two arguments
 *** (as input variables) and returns their product.
 ***
 **/
function multiply(a, b) {
  let count = 0;
  let mult = 0;
  while (count < b) {
    mult = add(mult, add(a, 0));
    count = add(count, 1);
  }
  return mult;
}
document.body.innerHTML += "</br>" + "Kata 02 ⮕ Multiply: " + "</br>";
console.log(multiply(6, 4));
document.body.innerHTML += "</br>" + "6 * 4 = " + multiply(6, 4) + "</br>";
console.log(multiply(8, 5));
document.body.innerHTML += "</br>" + "8 * 5 = " + multiply(8, 5) + "</br>";

/** KATA 03 ⮕ Power/Exponentiation
 ***
 *** Write a function named "power" which takes two arguments
 *** ( x and n ) and returns the the result of raising x to the nth power.
 ***
 **/

function power(x, n) {
  let i = 0;
  let pow = 1;
  while (i < n) {
    pow = multiply(pow, x); //on each loop multiplies pow by base number
    i = add(i, 1);
  }
  return pow;
}
document.body.innerHTML += "</br>" + "Kata 03 ⮕ Power: " + "</br>";
console.log(power(2, 8));
document.body.innerHTML +=
  "</br>" + "2 to the 8th power = " + power(2, 8) + "</br>";
console.log(power(3, 4));
document.body.innerHTML +=
  "</br>" + "3 to the 4th power = " + power(3, 4) + "</br>";
console.log(power(4, 3));
document.body.innerHTML +=
  "</br>" + "4 to the 3rd power = " + power(4, 3) + "</br>";

/** KATA 04 ⮕ Factorial
 ***
 *** Write a function named "factorial" which takes a single argument
 *** and returns the factorial of that value.
 ***
 **/

function factorial(x) {
  let i = 1;
  let facto = 1;
  while (i <= x) {
    facto = multiply(facto, i);
    i = add(i, 1);
  }
  return facto;
}
document.body.innerHTML += "</br>" + "Kata 04 ⮕ Factorial: " + "</br>";
console.log(factorial(4));
document.body.innerHTML +=
  "</br>" + "factorial of 4 = " + factorial(4) + "</br>";
console.log(factorial(5));
document.body.innerHTML +=
  "</br>" + "factorial of 5 = " + factorial(5) + "</br>";
console.log(factorial(6));
document.body.innerHTML +=
  "</br>" + "factorial of 6 = " + factorial(6) + "</br>";

/** KATA 05 ⮕ Fibonacci
 ***
 *** Write a function named "Fibonacci" which takes an argument n
 *** and returns the nth Fibonacci number.
 *** fibonacci sequence: 0 1 1 2 3 5 8 13 21 34 55 89 ...
 ***
 **/

function fibonacci(x) {
  let arr = [0, 1];
  let i = 2;
  while (i < add(x, 1)) {
    // F(n) = F(n-1) + F(n-2)
    arr.push(add(arr[add(i, -1)], arr[add(i, -2)]));
    i = add(i, 1);
  }
  // lets log the array just to be sure the array matches the sequence
  console.log(arr);
  // taking into account index of zero, based on example fibonacci(8) = 13
  return arr[add(x, -1)];
}
document.body.innerHTML += "</br>" + "Kata 05 ⮕ Fibonacci: " + "</br>";
document.body.innerHTML +=
  "</br>" + "Given fibonacci sequence: 0 1 1 2 3 5 8 13 21 34 55 89" + "</br>";
console.log(fibonacci(6));
document.body.innerHTML += "</br>" + "fibonacci 6 = " + fibonacci(6) + "</br>";
console.log(fibonacci(7));
document.body.innerHTML += "</br>" + "fibonacci 7 = " + fibonacci(7) + "</br>";
console.log(fibonacci(8));
document.body.innerHTML += "</br>" + "fibonacci 8 = " + fibonacci(8) + "</br>";
console.log(fibonacci(9));
document.body.innerHTML += "</br>" + "fibonacci 9 = " + fibonacci(9) + "</br>";
