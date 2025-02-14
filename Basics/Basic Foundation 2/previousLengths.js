/*
  8. Previous Lengths - You are passed an array
  (similar to saying 'takes in an array' or 'given an array') 
  containing strings.  Working within that same array, 
  replace each string with a number - the length of 
  the string at the previous array index - and return the array.  
  For example, previousLengths(["hello", "dojo", "awesome"])
   should return ["hello", 5, 4]. Hint: Can for 
   loops only go forward?
*/

function previousLengths(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1].length;
  }
  return arr;
}

console.log(previousLengths(["hello", "dojo", "awesome"]));
