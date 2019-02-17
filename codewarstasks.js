// Task 1. You get an array of numbers, return the sum of all of the positives ones.

function positiveSum(arr) {
  //var result = 0;
  var positiveArr = arr.filter(function(number) {
    return number > 0;
  });
  var result = positiveArr.reduce(function(sum, current) {
    return sum + current;
  }, 0);
  return result;
}

/*
	Task 2. Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), write a function elevator accepting 3 arguments (in order):

	left - The current floor of the left elevator
	right - The current floor of the right elevator
	call - The called floor, i.e. the floor you want to reach
	It should return the name of the elevator closest to the called floor ("left"/"right").

	In the case where both elevators are equally distant from the called floor, choose the elevator to the right.

	You can assume that the inputs will always be valid integers between 0-2.
*/

function elevator(left, right, call){
  // code on! :)
  var one = Math.abs(call - left);
  var two = Math.abs(call - right);
  if (one>=two) {
    return "right";
  } else {
    return "left";
  }
}

/*
	Task 3.
	Complete the function that determines if a given number is a power of two.

	a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

	https://en.wikipedia.org/wiki/Power_of_two
*/

function isPowerOfTwo(n){
  //.. should return true or false ..
   if (typeof n !== 'number') 
      return 'Not a number'; 

    return n && (n & (n - 1)) === 0;
}

/* 
Task 4. getNames()
The following code is not giving the expected results. Can you figure out what the issue is? */
function getNames(data){
  return data.map(({ name }) => name);
}

/* 
Task 5. Rotate for a Max
Take a number: 56789. Rotate left, you get 67895.

Keep the first digit in place and rotate left the other digits: 68957.

Keep the first two digits in place and rotate the other ones: 68579.

Keep the first three digits and rotate left the rest: 68597. Now it is over since keeping the first four it remains only one digit which rotated is itself.

You have the following sequence of numbers:

56789 -> 67895 -> 68957 -> 68579 -> 68597

and you must return the greatest: 68957.

Calling this function max_rot (or maxRot or ... depending on the language)

max_rot(56789) should return 68957
*/

function maxRot(n) {
  // your code
  let string = String(n)
  const result = [string]

  for (let index = 0; index < string.length; index++) {
    string = `${string.slice(0, index)}${string.slice(index + 1)}${
      string[index]
    }`
    result.push(string)
  }

  return Math.max(...result)
}

/*
Task 6. Are they the "same"?
Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
*/
function comp(array1, array2){
  //your code here
  if (!array1 || !array2) return false

  const a1 = [...array1].sort((a, b) => a - b)
  const a2 = [...array2].sort((a, b) => a - b)
  const a1Squared = a1.map(num => MatSh.pow(num, 2))

  return JSON.stringify(a1Squared) === JSON.stringify(a2)
}

/*
Task 7.Multiples of 3 or 5
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
*/
function solution(n){
  var c=0;
  n--;
  while (n>2)
    {
      if (n%3==0 || n%5==0)
        {
          c+=n;
        }
        n--;
    }
    return c;
}