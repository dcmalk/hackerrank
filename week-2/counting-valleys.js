/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
  let valleys = 0;
  let elevation = 0;

  for (let step of path) {
    if (step === 'U') {
      elevation++;
      if (elevation === 0) {
        valleys++;
      }
    } else {
      elevation--;
    }
  }
  return valleys;

  // let seaLevel = true;
  //
  // for (let step of path) {
  //   elevation = elevation + (step === 'U' ? 1 : -1);
  //   if (elevation === -1 && seaLevel) {
  //     valleys++;
  //   }
  //   seaLevel = elevation === 0;
  // }
  // return valleys;
}

function main() {
  const steps = 12;
  const path = 'DDUUDDUDUUUD';
  console.log(countingValleys(steps, path));
}

main();
