/*
 * Complete the 'flippingBits' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER n as parameter.
 */

function flippingBits(n) {
  let bin = n.toString(2).padStart(32, '0');
  let flip = '';

  for (let i = 0; i < 32; i++) {
    flip = flip + (bin[i] === '0' ? '1' : '0');
  }

  // console.log(bin);
  // console.log(flip);
  return parseInt(flip, 2);
}

function main() {
  n = 2147483647;
  //n = 1;
  //n = 0;

  console.log(flippingBits(n));
}

main();
