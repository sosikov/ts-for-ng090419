// types
type snb = string | number | boolean;
type sn = string | number;

// task 1
function isInArray(arr: snb[], ...args: snb[]): boolean {
    for (const arg of [...args]) {
        if (!arr.includes(arg)) {
            return false;
        }
    }
    return true;
}

// task 2
function summator(...args: sn[]): number {
    let result: number = 0;
    for (let arg of [...args]) {
        if (typeof arg === 'string') {
            arg = parseInt(arg);
        }
        result += arg;
    }
    return result;
}

// task 3
function getUnique(...args: snb[]): snb[] {
    return [...new Set([...args])];
}

// task 4
function toMatrix(data: sn[], rowSize: number): sn[][] {
    const res: sn[][] = [];
    for (let i: number = 0; i < data.length; i += rowSize) {
        res.push(data.slice(i, i + rowSize));
    }
    return res;
}
