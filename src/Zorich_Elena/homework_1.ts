// 1)
//   Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
//   Возвращает true, если все аргументы, кроме первого входят в первый.
//   Первым всегда должен быть массив.

type datatype = string | number;

function isInArray(arr: datatype[], ...arg: datatype[]): boolean {
    return arg.every(x => arr.indexOf(x) !== -1);
}

// 2)
//  Написать функцию summator(), которая суммирует переданые ей аргументы.
//  Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено

function summator(...arg: datatype[]): number {
    return arg.reduce((partial_sum: number, x: datatype) => {
        //Check for string
        const numItem: number = typeof x === 'string' ? parseInt(x) : x;
        //Check for NaN
        const numOr0 = (n: number) => isNaN(n) ? 0 : n;
        return numOr0(partial_sum) + numOr0(numItem);
    }, 0);
}

// 3)
//   Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
//   и возвращает массив уникальных элементов. Аргумент не должен изменяться.
//   Порядок элементов результирующего массива должен совпадать с порядком,
//   в котором они встречаются в оригинальной структуре.


function getUnique(...arg: datatype[]): datatype[] {
    const argUnique = new Set(arg);
    return Array.from(argUnique.values());
}

// 4)
//  Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
//  возвращает новый массив. Число показывает количество элементов в подмассивах,
//  элементы подмассивов беруться из массива data.
//  Оригинальный массив не должен быть изменен.

function toMatrix(data: datatype[], rowSize: number): datatype[][] {

    // Declaring a Two-Dimensional array
    const result: datatype[][] = [];

    for (let i: number = 0; i <= data.length; i += rowSize) {
        // Slice() is non-destructive to the original array
        result.push(data.slice(i, i + rowSize));
    }
    return result;
}

toMatrix(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r'], 5)
