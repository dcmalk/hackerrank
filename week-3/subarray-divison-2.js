/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(s, d, m) {
  let count = 0;

  for (let index = 0; index <= s.length - m; index++) {
    let segmentSum = 0;
    for (let i = 0; i < m; i++) {
      segmentSum += s[i + index];
    }
    count += segmentSum === d ? 1 : 0;
  }

  return count;
}

function main() {
  const s = [2, 2, 1, 3, 2];
  const d = 4;
  const m = 2;
  console.log(birthday(s, d, m));
}

main();
