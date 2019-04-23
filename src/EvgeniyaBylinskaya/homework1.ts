/* Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
 Возвращает true, если все аргументы, кроме первого входят в первый.
 Первым всегда должен быть массив.*/

function isInArray(array: any[], ...args: any[]): boolean {
    return args.every(arg => {
        return array.includes(arg);
    });
}

const inAr: boolean = isInArray(['a', 'b', 'c'], 'a', 'b');
const inArr2: boolean = isInArray(['a', 'b', 'c'], 1, 'a');


/*Написать функцию summator(), которая суммирует переданые ей аргументы.
 Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено*/

function isNumber(arg: sn): arg is number {
    return typeof arg === 'number';
}

type sn = string | number;
function reducer(sum: number, currentValue: sn): number {
    if (isNumber(currentValue)) {
        return sum + currentValue;
    } else {
        const parsedNumber = Number.parseInt(currentValue);
        return Number.isNaN(parsedNumber) ? sum : sum + parsedNumber;
    }
}

function summator(...args: sn[]): number {
    let sum: number = 0;
    sum = args.reduce(reducer, sum);
    return sum;
}

const num = summator('1', 2, 50, 'lol', -1);


/* Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
  и возвращает массив уникальных элементов. Аргумент не должен изменяться.
  Порядок элементов результирующего массива должен совпадать с порядком,
  в котором они встречаются в оригинальной структуре. */

function getUnique(...args: any[]): any[] {
    const unique: Set<any> = new Set<any>();
    args.forEach((arg) => {
        if (!unique.has(arg)) {
            unique.add(arg);
        }
    });

    return Array.from(unique);
}

const uniqueEls: any[] = getUnique('a', 'a', 3, '', true, false, true, '', 'a');


/* Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
 возвращает новый массив. Число показывает количество элементов в подмассивах,
 элементы подмассивов беруться из массива data.
 Оригинальный массив не должен быть изменен.*/

type row = any[];
function toMatrix(data: any[], rowSize: number): row[] {
    const matrix: row[] = [];
    if (rowSize > 0) {
        let currentIndex: number = 0;
        while (currentIndex < data.length) {
            const dataRow: row = data.slice(currentIndex, currentIndex + rowSize);
            matrix.push(dataRow);
            currentIndex += rowSize;
        }
    }
    return matrix;
}

const matrixM: row[] = toMatrix(['a', 'b', 'c', 'd', 'e'], -1);