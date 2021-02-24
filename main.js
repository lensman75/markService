let input = [
  'Оцените пожалуйста сервис от 1(ого) до 10(ти). десять',
  'Оцените пожалуйста .сер.ви.с о.т 1(ого) до 10(ти). десять.',
];

let replaceDictionary = { '1(ого)': '>1', '10(ти)': '<10', десять: '10' };

let convertedInput = [];
let filteredInput = [];
let finalResult = [];
let tempArr = [];

function convertInput(arr) {
  convertedInput = arr.replaceAll('.', '').split(' ');
  return convertedInput;
}

function filterInput(arr) {
  filteredInput = arr.map((v) => {
    return replaceDictionary[v];
  });
  return filteredInput;
}

console.log(convertInput(input[0]));

console.log(filterInput(convertInput(input[0])));

console.log(filteredInput);

console.log(convertedInput);

// for (let i = 0; i < filteredInput.length; i++) {
//   console.log(typeof filteredInput[i]);
// }

console.log(compare(filteredInput));

console.log(input[0].indexOf(convertedInput[4]));

console.log(filteredInput);
// for (let i = 0; i < filteredInput.length; i++){
//   console.log(input[0].indexOf(filteredInput[i]));
// }

function compare(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'undefined') {
      continue;
    } else {
      tempArr.push(convertedInput[i]);
    }
  }
}

console.log(tempArr);

for (let i = 0; i < tempArr.length; i++) {
  console.log(input[0].indexOf(tempArr[i]));
  let obj = {};
  obj['text'] = tempArr[i];
  obj['startPos'] = input[0].indexOf(tempArr[i]);
  finalResult.push(obj);
}

console.log(finalResult);
