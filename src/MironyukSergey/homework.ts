/**
 * 1)
  Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
  Возвращает true, если все аргументы, кроме первого входят в первый.
  Первым всегда должен быть массив.
 */

type ArrTypes = string | boolean | number;

function isInArray(arr: ArrTypes[], ...args: ArrTypes[]): boolean {
  let isInArray = true;
  if(!args.length) { 
    throw new Error('Error: args must be provided');
  }
  args.forEach(arg => {
    if(!isInArray) return;
    if(!arr.includes(arg)) {
      isInArray = false;
    }
  });
  return isInArray;
}

// console.log('isInArray --->', isInArray(['1', '2', '3', 4, true], '1', 4, 4));
// console.log('isInArray --->', isInArray(['1', '2', '3', 4, true]));


/**
 * 2)
 Написать функцию summator(), которая суммирует переданые ей аргументы.
 Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено
 */

type SummatorType = string | number;

function summator1(...params: SummatorType[]): number {
  let sum: number = 0;
  params.forEach(item => {
    sum += parseFloat(item as string);
  });
  return sum;
}

function summator2(...params:SummatorType[]): number {
  let res: SummatorType = params.reduce((prev, current) => { 
    let prevValue: number = parseFloat(prev as string) || 0;
    let currentValue: number = parseFloat(current as string) || 0;
    return prevValue + currentValue; 
  }, 0);
  return parseFloat(res as string);
}

// console.log('summator1 --->', summator1(1,2,3));
// console.log('summator1 --->', summator1(1.5, '3', '3.3'));
// console.log('summator1 --->', summator1('1','2','4'));

// console.log('summator2 --->', summator2(1,2,3));
// console.log('summator2 --->', summator2(1.5, '3', '3.3'));
// console.log('summator2 --->', summator2('1','2','4'));


/**
 * 3)
  Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
  и возвращает массив уникальных элементов. Аргумент не должен изменяться.
  Порядок элементов результирующего массива должен совпадать с порядком,
  в котором они встречаются в оригинальной структуре.
 */

 function getUnique(...args: ArrTypes[]): ArrTypes[] {
  let resultArray: ArrTypes[] = [];
  args.map(value => {
    if(!resultArray.includes(value)) {
      resultArray.push(value);
    }
  })
  return resultArray;
 }

//  console.log('getUnique --->', getUnique('1', 2, 3, 3, '3', 4, '1', 1));
 

/**
 * 4)
 Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
возвращает новый массив. Число показывает количество элементов в подмассивах,
элементы подмассивов беруться из массива data.
Оригинальный массив не должен быть изменен.
*/

function toMatrix(data: any[], rowSize: number): any[] {
  let res: any[] = [];
  let rem: number = data.length % rowSize;
  let emptyCells: number = rem === 0 ? 0 : rowSize - rem;
  let totalRows = Math.ceil(data.length/rowSize);
  for(let i = 0; i < totalRows; i++) {
    res.push(data.slice(i * rowSize, (i+1) * rowSize));
  }
  if(emptyCells > 0) {
    for(let i = 0; i < emptyCells; i++) {
      res[totalRows - 1].push(null);
    }
  }
  return res;
}

//  console.log('toMatrix --->', toMatrix([1,2,3,4,5,6,7,8], 2));
//  console.log('toMatrix --->', toMatrix([1,2,3,4,5,6,7,8], 3));
//  console.log('toMatrix --->', toMatrix([1,2,3,4,5,6,7,8], 5));
//  console.log('toMatrix --->', toMatrix([1,2,3,4,5,6,7,8], 6));
 