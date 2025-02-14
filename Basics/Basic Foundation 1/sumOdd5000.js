/*
  3. Sum odd 5000 - Write a function that
  returns the sum of all the odd numbers
  from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
*/

function sumOdd5000() {
  let sum = 0;
  for (let i = 1; i <= 5000; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumOdd5000());
