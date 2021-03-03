let input = [
  'Оцените пожалуйста сервис от 1(ого) до 10(ти). 10()',
  'Оце,ните пожа,луйста .сер.ви.с о.т 1(ого) до 10(ти). 10().',
];

let arrFromInput = [];
let outputArray = [];
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

console.log(clean);
console.log(arrFromInput);
console.log(outputArray);

function final(arr1, arr2, str, arrFinal) {
  let counter = 0;
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] == 0) {
      continue;
    } else {
      if (arr2[i] >= 1) {
        switch (counter) {
          case 0:
            if (arr1[i - 1] == 'от') {
              arrFinal['text'] = '>' + parseInt(arr1[i]);
              arrFinal['startPos'] = str.indexOf(arr1[i]);
              arrFinal['length'] = arr1[i].length;
              counter += 1;
            }
            break;
          case 1:
            if (arr1[i - 1] == 'до') {
              arrFinal['text'] = '<' + parseInt(arr1[i]);
              arrFinal['startPos'] = str.indexOf(arr1[i]);
              arrFinal['length'] = arr1[i].length;
              counter += 1;
            }
            break;
          case 2:
            arrFinal['text'] = parseInt(arr1[i]);
            arrFinal['startPos'] = str.indexOf(arr1[i]);
            arrFinal['length'] = arr1[i].length;
            counter += 1;
            break;
          default:
            console.log('Somewhere error happen!');
        }
      }
    }
  }
  return arrFinal;
}

final(arrFromInput, outputArray, clean, result);
