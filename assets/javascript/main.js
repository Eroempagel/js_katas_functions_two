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

console.log(add(2, 4));
document.body.innerHTML += "</br>" + add(2, 4) + "</br>";

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
    mult += add(a, 0);
    count += 1;
  }
  return mult;
}
console.log(multiply(6, 4));
document.body.innerHTML += "</br>" + multiply(6, 4) + "</br>";
console.log(multiply(8, 5));
document.body.innerHTML += "</br>" + multiply(8, 5) + "</br>";

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
    i++;
  }
  return pow;
}
console.log(power(2, 8));
document.body.innerHTML += "</br>" + power(2, 8) + "</br>";
console.log(power(3, 4));
document.body.innerHTML += "</br>" + power(3, 4) + "</br>";
console.log(power(4, 3));
document.body.innerHTML += "</br>" + power(4, 3) + "</br>";

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
    i++;
  }
  return facto;
}
console.log(factorial(4));
document.body.innerHTML += "</br>" + factorial(4) + "</br>";
console.log(factorial(5));
document.body.innerHTML += "</br>" + factorial(5) + "</br>";
console.log(factorial(6));
document.body.innerHTML += "</br>" + factorial(6) + "</br>";

/** KATA 05 ⮕ Fibonacci
 ***
 *** Write a function named "Fibonacci" which takes an argument n
 *** and returns the nth Fibonacci number.
 *** fibonacci sequence: 0 1 1 2 3 5 8 13 21 34 55 89 144
 ***
 **/

function fibonacci(x) {
  let arr = [0, 1];
  let i = 2;
  while (i < add(x, 1)) {
    // F(n) = F(n-1) + F(n-2)
    arr.push(add(arr[add(i, -1)], arr[add(i, -2)]));
    i++;
  }
  // taking into account index of zero
  return arr[add(x, -1)];
}
console.log(fibonacci(6));
document.body.innerHTML += "</br>" + fibonacci(6) + "</br>";
console.log(fibonacci(7));
document.body.innerHTML += "</br>" + fibonacci(7) + "</br>";
console.log(fibonacci(8));
document.body.innerHTML += "</br>" + fibonacci(8) + "</br>";
