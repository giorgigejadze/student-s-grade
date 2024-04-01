const prompt = require('prompt-sync')();

let score = prompt("Enter the student's score ");

if (score >= 90 && score <= 100) {
  console.log('Your grade: A');
}
if (score >= 80 && score <= 89) {
  console.log('Your grade: B');
}
if (score >= 70 && score <= 79) {
  console.log('Your grade: C');
}
if (score >= 60 && score <= 69) {
  console.log('Your grade: D');
}
if (score >= 0 && score <= 59) {
  console.log('Your grade: F');
}