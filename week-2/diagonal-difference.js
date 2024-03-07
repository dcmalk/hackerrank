/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
  // const n = arr.length;

  let leftToRight = 0;
  let rightToLeft = 0;

  arr.forEach((row, i) => {
    leftToRight += row[i];
    rightToLeft += row[arr.length - 1 - i];
  });

  // for (let i = 0; i < n; i++) {
  //   leftToRight += arr[i][i];
  //   rightToLeft += arr[i][n - i - 1];
  // }

  return Math.abs(leftToRight - rightToLeft);
}

function main() {
  // let arr = [
  //   [11, 2, 4],
  //   [4, 5, 6],
  //   [10, 8, -12],
  // ];

  let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ];

  const result = diagonalDifference(arr);

  console.log(result);
}

main();
