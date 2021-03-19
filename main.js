let input = [
  'Оцените пожалуйста сервис от 1(ого) до 10(ти). 10()',
  'Оце,ните пожа,луйста .сер.ви.с о.т 1(ого) до 9(ти). 8().',
];

function cleanDotComma(str) {
  let x;
  x = str.split('.').join('').split(',').join('');
  return x;
}

let tt = cleanDotComma(input[1]);

function createObject(word) {
  let obj = {};
  if (word == 'от' || word == 'с' || word == 'до' || word == 'по') {
    switch (word) {
      case 'от':
      case 'с':
        obj.Key = word;
        obj.Num = undefined;
        obj.Prefix = '>';
        obj.TemporalCase = undefined;
        break;
      case 'до':
      case 'по':
        obj.Key = word;
        obj.Num = undefined;
        obj.Prefix = '<';
        obj.TemporalCase = undefined;
        break;
      default:
        console.log('SOME ERROR HAPPEN');
        break;
    }
  } else if (isNaN(parseInt(word)) == false) {
    if (word.includes('(ого)') || word.includes('(ти)')) {
      obj.Key = word;
      obj.Num = parseInt(word);
      obj.Prefix = undefined;
      obj.TemporalCase = 'genitive';
    } else if (word.includes('()')) {
      obj.Key = word;
      obj.Num = parseInt(word);
      obj.Prefix = undefined;
      obj.TemporalCase = 'nominative';
    }
  }
  return obj;
}

function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

let ttt = tt.split(' ');

let ar = [];
for (let i = 0; i < ttt.length; i++) {
  ar.push(createObject(ttt[i]));
}
ar;
ar.length;
for (let i = ar.length - 1; i >= 0; i--) {
  if (isEmpty(ar[i])) {
    ar.splice(i, 1);
  }
}
ar.length; //?

console.log(ar);

function convert(inp) {
  let arr = [];
  for (let i = 0; i < inp.split(' ').length; i++) {
    arr.push(inp.split(' ').map((v) => createObject(v)));
  }
  return arr;
}

// console.log(convert(cleanDotComma(input[1])));

let fin = convert(cleanDotComma(input[1]));
