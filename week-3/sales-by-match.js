/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
  let socks = {};
  let pairs = 0;

  for (let i = 0; i < n; i++) {
    let color = ar[i];
    socks[color] = (socks[color] || 0) + 1;
  }

  for (const color in socks) {
    pairs += Math.floor(socks[color] / 2);
  }
  return pairs;
}

function main() {
  // const n = 7;
  // const ar = [1, 2, 1, 2, 1, 3, 2];

  const n = 9;
  const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

  console.log(sockMerchant(n, ar));
}

main();
