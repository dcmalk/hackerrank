/*
 * Complete the 'marsExploration' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function marsExploration(s) {
  let changed = 0;
  let signals = s.match(/.{3}/g);

  for (let signal of signals) {
    if (signal[0] !== 'S') changed++;
    if (signal[1] !== 'O') changed++;
    if (signal[2] !== 'S') changed++;
  }

  return changed;
}

function main() {
  //const s = 'SOSTOT';
  const s = 'SOSSPSSQSSOR';

  console.log(marsExploration(s));
}

main();
