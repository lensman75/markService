let input = [
  'Оцените пожалуйста сервис от 1(ого) до 10(ти). 10()',
  'Оце,ните пожа,луйста .сер.ви.с о.т 1(ого) до 10(ти). 10().',
];

console.log('hello');

function cleanDotComma(str) {
  let x;
  x = str.split('.').join('').split(',').join('');
  return x;
}

console.log(cleanDotComma(input[1]));

let clean = cleanDotComma(input[1]);
console.log(clean);

// function findDigits(str) {
//   let ar = [];
//   let tempAr = str.split(' ');
//   for (let i=0; i < tempAr.length; i++) {
//     if (isNaN(parseInt(tempAr[i]))){
//       continue;
//     } else {ar.push(parseInt(tempAr[i]))}
//   }
//   return ar;
// }

findDigits = (str) => {
  let arr = str.split(' ').map(v => {
    if (isNaN(parseInt(v)){
      continue;
    } else {return arr.push(parseInt(v))}
  })
  return arr;
}

console.log(findDigits(clean));

let y = 'bla';

console.log(isNaN(y));
