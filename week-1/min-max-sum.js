/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  let sum = 0;
  arr.forEach((num) => (sum += num));

  let min = sum - arr[0];
  let max = min;

  for (let i = 1; i < arr.length; i++) {
    const x = sum - arr[i];
    min = x < min ? x : min;
    max = x > max ? x : max;
  }

  return `${min} ${max}`;
}

function main() {
  const arr = [1, 2, 3, 4, 5];

  console.log(miniMaxSum(arr));
}

main();
