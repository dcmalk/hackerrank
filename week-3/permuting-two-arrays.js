/*
 * Complete the 'twoArrays' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY A
 *  3. INTEGER_ARRAY B
 */

function twoArrays(k, A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    if (A[i] + B[i] < k) {
      return 'NO';
    }
  }
  return 'YES';
}

function main() {
  // const k = 10;
  // const A = [2, 1, 3];
  // const B = [7, 8, 9];

  const k = 5;
  const A = [1, 2, 2, 1];
  const B = [3, 3, 3, 4];

  console.log(twoArrays(k, A, B));
}

main();
