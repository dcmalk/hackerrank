/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
  return grades.map((grade) => {
    if (grade < 38) {
      return grade;
    }
    let nextMultiple = Math.ceil(grade / 5) * 5;
    return nextMultiple - grade < 3 ? nextMultiple : grade;
  });
}

function main() {
  let grades = [84, 29, 57];

  console.log(gradingStudents(grades));
}

main();
