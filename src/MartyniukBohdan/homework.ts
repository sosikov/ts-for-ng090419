
/**
 * task 1
 */

function isInArray( arr: unknown[], ...args: unknown[]): boolean {
    for ( let i = 0; i < args.length; i++) {
        const value = args[i];
        if (arr.indexOf(value) !== -1) {
            return true;
        }
    }
    return false;
}


// console.log(isInArray([2,3,4], "s"))


/**
 * task 2
 */


type sn = number | string;

function summator(...args: sn[]): sn {
    return args.reduce(function(s, num) {
        if (typeof s === 'number' && typeof num   === 'number') {
            return s + num;
        } else {
            return parseInt(s as string) + parseInt(num as string);
        }
    }, 0);
}


// summator(3, 2, '3');


/**
 * task 3
 */


function getUnique(...args: unknown[]): unknown {
    return [...args];
}

// getUnique(2, 3, 'ok', true);

/**
 * task 4
 */


//  Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
//  возвращает новый массив. Число показывает количество элементов в подмассивах,
//  элементы подмассивов беруться из массива data.
//  Оригинальный массив не должен быть изменен.


function toMatrix(data: unknown[], rowSize: number) {
    const newArr: unknown[] = [];


    data.reduce((arr: unknown[], next: any, index: number): unknown[] => {

        const dataLength = data.length - 1


        if (arr.length === rowSize) {
            newArr.push(arr);
            arr = [];
        }

        if (index === dataLength) {
            newArr.push(arr);
        }

        arr.push(next);
        return arr;
    }, []);

    return newArr;

}
//console.log(toMatrix([3, 2, 3 ], 2))
