/**
 * Задача 1
 * Функция ищет в массиве последующие переданные ей элемнты
 * Результатом является булево значение == найдены ли все аргументы в массиве
 * @param arr Массив аргументов, среди которых будет выполняться поиск
 * @param args Аргументы, которые будем искать в данном массиве
 */
function isInArray(arr: unknown[], ...args: unknown[]): boolean {
    for (const arg of [...args]) {
        if (arr.indexOf(arg) === -1) {
            return false;
        }
    }
    return true;
}

// tslint:disable-next-line
console.log(isInArray([1, '2', 3], 1, '2', 3)); // true
// tslint:disable-next-line
console.log(isInArray([1, '2', 3], 1, '2', 3, 4)); // false


/**
 * Задача 2
 * Функция суммирует все переданные ей аргументы
 * @param args Аргументы, которые необходимо сложить
 */
function summator(...args: (number | string)[]): number {
    let result: number = 0;
    for (let arg of [...args]) {
        if (typeof arg === 'string') {
            arg = parseInt(arg);
        }
        result += arg;
    }
    return result;
}

// tslint:disable-next-line
console.log(summator(1, '2', 3)); // 6


/**
 * Задача 3
 * Функция возвращает массив уникальных объектов
 * @param args Массив аргументов, которые будем фильтровать
 */
function getUnique(args: unknown[]): unknown[] {
    const unique = args.filter((val, i, arr) => arr.indexOf(val) === i);
    return unique;
}

// tslint:disable-next-line
console.log(getUnique([1, '2', 3, 1, 4, 3, 4, 5, true, true])); // [ 1, '2', 3, 4, 5, true ]


/**
 * Задача 4
 * Функция возвращает матрицу
 * @param data Массив данных
 * @param rowSize Количество элементов в подмассиве
 */

type sn = string | number
function toMatrix(data: sn[], rowSize: number): sn[][] {
    const res: sn[][] = [];
    data.reduce((acc: unknown[], next: unknown, index: number) => {
        if (acc.length === rowSize) {
            res.push(acc);
            acc = [];
        }
        acc.push(next);
        if (data.length === index + 1) {
            res.push(acc);
        }
        return acc;
    }, []);
    return res;
}

// tslint:disable-next-line
console.log(toMatrix([1, '2', 3, 4, '5', 6, 7, '8', 9], 3)); // [ [ 1, '2', 3 ], [ 4, '5', 6 ], [ 7, '8', 9 ] ]
