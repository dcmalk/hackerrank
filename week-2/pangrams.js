/*
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(s) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const chars = s.toLowerCase();

  for (let letter of alphabet) {
    if (chars.includes(letter) === false) {
      return 'not pangram';
    }
  }

  // // First pass
  // s.toLowerCase()
  //   .split('')
  //   .forEach((char) => {
  //     chars.push(char.charCodeAt(0));
  //   });

  // for (let i = 97; i <= 122; i++) {
  //   if (chars.includes(i) === false) {
  //     return 'not pangram';
  //   }
  // }

  return 'pangram';
}

function main() {
  //const s = 'We promptly judged antique ivory buckles for the next prize';
  const s = 'We promptly judged antique ivory buckles for the prize';
  //const s = 'AC';

  console.log(pangrams(s));
}

main();
