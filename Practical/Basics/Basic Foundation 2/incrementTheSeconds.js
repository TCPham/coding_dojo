/*
  7. Increment the Seconds - Given an 
  array of numbers arr, add 1 to every 
  other element, specifically those whose 
  index is odd (arr[1], arr[3], arr[5], etc).  
  Afterward, console.log each array value 
  and return arr.
*/

function incrementTheSeconds(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      arr[i]++;
      console.log(arr[i]);
    }
  }
  return arr;
}

console.log(incrementTheSeconds([1, 2, 3, 4, 5]));
