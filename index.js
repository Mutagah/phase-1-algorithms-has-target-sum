function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let iteratorA= 0 ; iteratorA < array.length; iteratorA++){
    for(let iteratorB = iteratorA + 1; iteratorB < array.length; iteratorB++){
      if (array[iteratorA]+ array[iteratorB] === target) return true;
  }
}
return false
}

/* 
  Write the Big O time complexity of your function here
  O(n^2)
  
*/

/* 
  Add your pseudocode here
  iterate to the first value in the array
  iterate to the remaining second value in the array
  check if the sum equals the targeted value
*/

/*
  Add written explanation of your solution here
  iterated the first value in the array
  iterated the remaining potential second value in the array
  check if the sum equals the targeted value
  return true if sum of the iterated elements 
  at a given instance equals the target otherwise false

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 0, 4, 6, 30], 30));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 13, 12, 1, 0], 14));


}

module.exports = hasTargetSum;
