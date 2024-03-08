/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
  let min = scores[0];
  let max = scores[0];

  let min_count = 0;
  let max_count = 0;

  for (let score of scores) {
    if (score < min) {
      min_count++;
      min = score;
    } else if (score > max) {
      max_count++;
      max = score;
    }
  }

  return [max_count, min_count];
}

function main() {
  // const score = [12, 24, 10, 24];
  const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
  const result = breakingRecords(scores);
  console.log(result.join(' '));
}

main();
