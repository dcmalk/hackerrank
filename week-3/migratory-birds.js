/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
  const birdCounts = Array(5).fill(0);

  for (const id of arr) {
    birdCounts[id - 1]++;
  }

  // Note that `indexOf` returns the index of first occurrence, thus handling ties
  return birdCounts.indexOf(Math.max(...birdCounts)) + 1;

  // // First pass
  // let birdCounts = {};
  // let mostFreq = 0;

  // for (let i = 0; i < arr.length; i++) {
  //   let id = arr[i];
  //   birdCounts[id] = (birdCounts[id] || 0) + 1;

  //   if (birdCounts[id] > (birdCounts[mostFreq] || 0)) {
  //     mostFreq = id;
  //   } else if (birdCounts[id] === birdCounts[mostFreq] && id < mostFreq) {
  //     mostFreq = id;
  //   }
  // }

  // return mostFreq;
}

function main() {
  //const arr = [4, 4, 1, 1, 2, 2, 3];
  const arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];
  console.log(migratoryBirds(arr));
}

main();
