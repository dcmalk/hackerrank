/*
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY strings
 *  2. STRING_ARRAY queries
 */

function matchingStrings(strings, queries) {
  let stringHash = {};
  let matches = [];

  for (let s of strings) {
    stringHash[s] = (stringHash[s] || 0) + 1;
  }

  for (let q = 0; q < queries.length; q++) {
    matches[q] = stringHash[queries[q]] || 0;
  }

  return matches;
}

function main() {
  const strings = ['ab', 'ab', 'abc'];
  const queries = ['ab', 'abc', 'bc'];

  const res = matchingStrings(strings, queries);

  console.log(res.join('\n'));
}

main();
