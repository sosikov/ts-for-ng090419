
// 1)
//   Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
//   Возвращает true, если все аргументы, кроме первого входят в первый.
//   Первым всегда должен быть массив.

function isInArray(arr: unknown[], ...args: unknown[]): boolean {
  const result = args.every(value => arr.indexOf(value) !== -1);
  return result;
}

// 2)
//  Написать функцию summator(), которая суммирует переданые ей аргументы.
//  Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено
type sn = string | number;
function summator(...args: sn[]): number {
  return args.reduce((acc: number, next: sn): number => {
    //проверка на строку
    if (typeof next === 'string') {
      acc += parseInt(next);
    } else {
      acc += next;
    }
    //проверка на NaN
    const  checkedNan = () => {
      return isNaN(acc) ? 0 : acc;
    };
    return checkedNan();
  }, 0);
}

// 3)
//   Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
//   и возвращает массив уникальных элементов. Аргумент не должен изменяться.
//   Порядок элементов результирующего массива должен совпадать с порядком,
//   в котором они встречаются в оригинальной структуре.

function getUnique(args: unknown []): unknown [] {
  const ids = args.filter((arg, id, arr) => {
    arr.indexOf(arg) === id;
  });
  return ids;
}

// 4)
//  Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
//  возвращает новый массив. Число показывает количество элементов в подмассивах,
//  элементы подмассивов беруться из массива data.
//  Оригинальный массив не должен быть изменен.
function toMatrix(data: unknown[], rowSize: number): unknown[][] {
  const newArray: unknown[] = [];
  data.reduce((arr: unknown[], next: any, index: number): unknown[] => {
    if (arr.length === rowSize) {
      newArray.push(arr);
      arr = [];
    }
    if (index === data.length - 1 {
      newArray.push(arr);
    }
  arr.push(next);
  return arr;
}, []);
}
