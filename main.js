let str = 'Оцените пожалуйста сервис от 1(ого) до 10(ти). 10()';

function cleanDotComma(str) {
  let x;
  x = str.split('.').join('').split(',').join('');
  return x;
}

let test = cleanDotComma(str);

function convToArray(str) {
  return str.split(' ');
}

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
    } else {
      return;
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

function final(arr) {
  let finArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (isEmpty(createObject(arr[i])) == true) {
      continue;
    } else {
      finArr.push(createObject(arr[i]));
    }
  }
  return finArr;
}

console.log(final(convToArray(test)));
