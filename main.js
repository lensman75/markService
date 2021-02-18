let input = [
  'Оцените пожалуйста сервис от 1(ого) до 10(ти). 10',
  'Оцените пожалуйста сервис от 1(ого) до 10(ти). Десять.',
];

let convertedInput = [];
let filteredInput = [];

function convertInput(arr) {
  convertInput = arr.split(' ');
  return convertInput;
}
// TODO: Add functionality to remove dots in line.
console.log(convertInput(input[1]));
