let input = [
  'Оцените пожалуйста сервис от 1(ого) до 10(ти). 10()',
  'Оце,ните пожа,луйста .сер.ви.с о.т 1(ого) до 10(ти). 10().',
];

let arrFromInput = [];
let outputArray = [];
let secondaryArray = [];
let result = [];

function cleanDotComma(str) {
  let x;
  x = str.split('.').join('').split(',').join('');
  return x;
}

let clean = cleanDotComma(input[1]);

function findDigits(str) {
  let tmpArr = [];
  arrFromInput = str.split(' ');
  for (let i = 0; i < arrFromInput.length; i++) {
    if (isNaN(parseInt(arrFromInput[i]))) {
      tmpArr.push(0);
      continue;
    } else {
      tmpArr.push(parseInt(arrFromInput[i]));
    }
  }
  return tmpArr;
}

outputArray = findDigits(clean);

console.log(arrFromInput);
console.log(outputArray);

function final(arr1, arr2) {
  // TODO: Add counter to catch 'from', 'to', 'mark'.
  let counter = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] == 0) {
      continue;
    } else {
      if (arr1[i] > 0) {
        switch (counter) {
          case counter == 0:
            if (arr2[i] - 1 == 'от') {
              result['text'] = arr1[i];
              counter += 1;
            }
        }
      }
    }
  }
}

final(arrFromInput, outputArray);

console.log(final(arrFromInput, outputArray));
