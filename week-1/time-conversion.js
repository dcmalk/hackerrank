/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  const time = s.slice(0, -2);
  const meridian = s.slice(-2);

  let [hours, minutes, seconds] = time.split(':');

  if (hours === '12') {
    hours = '00';
  }

  if (meridian === 'PM' && hours !== '12') {
    hours = (parseInt(hours) + 12).toString();
  }

  hours = hours.padStart(2, '0');

  return `${hours}:${minutes}:${seconds}`;
}

function main() {
  const s = '12:45:54PM';
  const result = timeConversion(s);
  console.log(result);
}

main();
