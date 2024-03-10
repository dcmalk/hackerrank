/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
  return a.find((el) => a.indexOf(el) === a.lastIndexOf(el));

  // First pass
  // let unique;
  // a.forEach((el, index) => {
  //   if (!a.includes(el, index + 1) && a.indexOf(el) === index) {
  //     unique = el;
  //   }
  // });
  // return unique;
}

function main() {
  //let a = [1, 2, 3, 4, 3, 2, 1];
  let a = [0, 0, 1, 2, 1];
  console.log(lonelyinteger(a));
}

main();
