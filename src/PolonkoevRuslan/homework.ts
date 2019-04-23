// #1

function isInArray(arr: unknown[], ...args: unknown[]): boolean {
    args.forEach(arg => {
        if (arr.indexOf(arg) === -1) {
            return false;
        }
    });
    return true;
}

// #2

function summator(...args: (string | number)[]): number {
    return args.reduce((acc:number, next: string | number) => {
        if (typeof next === 'string') {
            acc += parseInt(next);
        } else {
            acc += next;
        }
        return acc;
    }, 0);
}

// #3

function getUnique(...args: unknown[]): unknown[] {
    const filteredArr = args.filter((arg, i, arr) => {
        return arr.indexOf(arg) === i;
    });
    return filteredArr;
}

// #4

function toMatrix(data: unknown[], rowSize: number) {
    let arr: unknown[] = [];

    data.reduce((acc: unknown[], next: unknown, i: number): unknown[] => {
        if (acc.length === rowSize) {
            arr.push(acc);
            acc = [];
        }
        if (i === data.length - 1) {
            arr.push(acc);
        }

        acc.push(next);
        
        return acc;
    }, []);

    return arr;
}
