// 1)

function isInArray2(arr: unknown[], ...args: unknown[]): boolean {
    return args.every((val: unknown) => arr.includes(val));
}

// 2)

type ns = string | number;

function summator(...args: ns[]): ns {
    return args.reduce((acc: number, currentVal: ns) => {
        if (typeof currentVal === 'string') {
            currentVal = Number(currentVal);
        }
        return acc + currentVal;
    }, 0);
}

// 3)

function getUnique(...args: ns[]): ns[] {
    return [...(new Set(args))];
    // args.map(val => {
    //   newSet.add(val);
    // });
    // const arr: unknown[] = [];
    // newSet.forEach((val) => {
    //   arr.push(val);
    // });
    // return arr;
}

// 4)

function toMatrix(data: ns[], rowSize: number): ns[][] {
    const matrix: ns[][] = [];
    const amountRow: number = Math.ceil(data.length / rowSize);
    for (let i = 0; i < data.length; i++) {
        if (amountRow === matrix.length) {
            break;
        }
        if (i !== 0) {
            matrix.push(data.slice(rowSize * i, rowSize * (i + 1)));
            continue;
        }
        matrix.push(data.slice(0, rowSize));
        continue;
    }
    return matrix;
}
