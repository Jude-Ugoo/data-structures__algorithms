//?====================== Pseudocode for Binary Search ==============================
// let min = 0 and max = n-1
// compute guess as the average of max and min, rounded down so that it is an integer
// if array[guess] equals target, then stop. You found it! Return guess
// if the guess was too low, that is, array[guess] < target, then set min = guess + 1
// Otherwise, the guess was too high. Set max = guess - 1.
// Go back to step two.
//?==================================================================================================

const binarySearch = (target) => {
  const arr = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97,
  ];

  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let guess = Math.floor((min + max) / 2);

    if (arr[guess] === target) {
      console.log("Target Found!");
      return guess;
    } else if (arr[guess] < target) {
      // Target not in lower half, search upper half only
      min = guess + 1; // update min
    } else {
      max = guess - 1;
    }
  }

  return -1; // Target not found
};
