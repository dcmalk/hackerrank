function plusMinus(arr) {
  let n = arr.length;
  let counts = {
    pos: 0,
    neg: 0,
    zero: 0,
  };

  for (let i of arr) {
    counts.pos += i > 0 ? 1 : 0;
    counts.neg += i < 0 ? 1 : 0;
    counts.zero += i == 0 ? 1 : 0;
  }

  let posRatio = (counts.pos / n).toFixed(6);
  let negRatio = (counts.neg / n).toFixed(6);
  let zerosRatio = (counts.zero / n).toFixed(6);

  console.log(`${posRatio}\n${negRatio}\n${zerosRatio}`);
}

function main() {
  //const arr = [1, 1, 0, -1, -1];
  const arr = [-4, 3, -9, 0, 4, 1];

  plusMinus(arr);
}

main();
