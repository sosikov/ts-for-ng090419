// interface IAccount {
//     firstName: string;
//     age: number;
// }
//
// const user = {
//     firstName: 'Igor',
//     age: 33
// }
//
// let admin: typeof user = 1;
//
// class Account {
//     public firstName!: string;
//     public age!: number;
// }
//
// let a: Account = new Account();

// let b: string = 's';
// let c: string;
// c = 's';
// let a = 'sd';
// a = 1;

// let s: string = 'sd';
// let b: boolean = true;
// let n: number = NaN;
// let nill: null = null;
// let u: undefined = undefined;
// let simb: symbol = Symbol('asd');

// let a: any = 1;
// a();
//
// let v: void = undefined;
//
// function f(): never {
//     throw new Error('my error');
// }
//
// f();

// type Acc = {
//     firstName: string
// };
//
// interface IAge {
//     age: number;
// }
//
// let arr: Acc[] = [{firstName: 'Igor'}];
//
// interface IAccount extends IAge, Acc {
//     age: number;
// }
//
// class User implements IAccount {
//     public firstName!: string;
//     public age!: number;
// }

// class Person implements IUser{
// //    public  firsName!: string;
// // }
// //
// // new User();
// //
// // fetch('localhost')
// //     .then((res: Response) => res.json())
// //     .then((user: IUser) => console.log(user))
// generic -> interface/type/class/function
// interface IAccount<IdType> {
//     id: IdType;
//     firstName: string;
// }
//
// let user: IAccount<number>;
// let admin: IAccount<string>;
//
// let arr: Array<string>
// let arr1: string[]
//
// [1,2,3].map((a)=>a.)

// function average<CustomType>(a: CustomType, b: CustomType, c: CustomType): string {
//     let v: CustomType;
//     const total = (a + b + c) / 3;
//     return `Average is ${total}`;
// }
//
// average<number>(1, 2, 2);
// average<string>('1', '2', '2');
// average<sn>(1, '2', 1);
// // average('1', '2', 1);
// // average(1, '2', 1);
// const cc: number = average(1, 2, 1);

// function average(a: number, b?: number, c?: number): string {
//     let total: number = a;
//     if (b !== undefined) {
//         total += b;
//     }
//     if (c !== undefined) {
//         total += c;
//     }
//     return `Average is ${total / 3}`;
// }
//
// average(1);
// average(1, 2);
// average(1, 2, 4);
// average<string>('1', '2', '2');
// average<sn>(1, '2', 1);
// // average('1', '2', 1);
// // average(1, '2', 1);
// const cc: number = average(1, 2, 1);

// function average(a: number, b: number = 0, c: number = 0): string {
//     const total: number = a + b + c;
//     return `Average is ${total / 3}`;
// }
//
// average(1);
// average(1, 2);
// average(1, 2, 4);
// average(1, '2', 1);
// average('1', '2', 1);
// average(1, '2', 1);
// const cc: number = average(1, 2, 1);

// type sn = string | number;
//
// function average(a: number, b: string): string;
// function average(a: number, b: number, c: number): string;
// function average(a: string, b: string): string;
// function average(_a: sn, _b: sn = 0, _c?: number): string {
//     return `Average is ${2}`;
// }
//
// average(1, '1');
// average(1, 1, 2);
// average('1', '2');
//
// function isString(arg: sn): arg is string {
//     return typeof arg === 'string';
// }
//
// // TODO error in reducer
// function sum(...args: sn[]): number {
//     return args.reduce((acc: number, next: sn) => {
//         if (isString(next)) {
//             acc += parseInt(next);
//         } else {
//             acc += next;
//         }
//         return acc;
//     }, 0);
// }
//
// sum(1, 2, 3);
// sum(1, 2, 3, 4, 5);
// sum(1, 2, '3', 4, 5);
// sum(1, 2, '3', true, 5);

// interface IPoint {
//     x: number;
//     y: number;
//
//     sum(): number;
// }
//
// abstract class AbstractPoint {
//     public x: number;
//     private y: number;
//
//     public constructor(x: number, y: number) {
//         this.x = x;
//         this.y = y;
//     }
//
//     public abstract ngOnInit(_x: number, _y: number): void;
//
//     public sum(): number {
//         // this.x += 2;
//         return this.x + this.y;
//     }
// }
// let p1 = new AbstractPoint();
//
// class SuperPoint extends AbstractPoint {
//     public constructor(
//         x: number,
//         y: number,
//         protected _z: number
//     ) {
//         super(x, y);
//         this.x += 1;
//         this.ngOnInit(x, y);
//     }
//
//
//     public ngOnInit(_x: number, _y: number): void {
//
//     }
// }
//
// const p: SuperPoint = new SuperPoint(2, 3, 3);
//
//
// class Point extends SuperPoint {
//     public constructor(
//         x: number,
//         y: number,
//         _z: number
//     ) {
//         super(x, y, _z);
//     }
//
//     public get z(): number {
//         return this._z;
//     }
//
//     public set z(v: number) {
//         this._z = v;
//     }
//
//     public sum(): number {
//         // this.x += 2;
//         this.y += 3;
//         return super.sum();
//     }
// }
//
// class Singleton {
//     private static _instance: Singleton;
//
//     private constructor() {
//     }
//
//     public static getInstance(): Singleton {
//         if (!Singleton._instance) {
//             Singleton._instance = new Singleton();
//         }
//         return Singleton._instance;
//     }
// }
//
// let ins1: Singleton = Singleton.getInstance();
// let ins2: Singleton = Singleton.getInstance();


function logMethod(logMsg: string): MethodDecorator {
    return (_target: Object, _methodName: string | symbol, descriptor: PropertyDescriptor): PropertyDescriptor => {
        const originalValue: Function = descriptor.value;
        return {
            ...descriptor,
            value: (...arg: unknown[]) => {
                const result: unknown = originalValue(...arg);
                // tslint:disable-next-line
                // console.log('Target', _target);
                // tslint:disable-next-line
                console.log(`${logMsg} ${_methodName as string}(${arg.join(',')}) => ${result}`);
                return result;
            }
        };
    }
}

class MathLib {
    @logMethod('We call')
    public areaOfCircle(r: number): number {
        return Math.PI * r ** 2;
    }
}

const lib: MathLib = new MathLib();

let area1: number = lib.areaOfCircle(10);
let area2: number = lib.areaOfCircle(2);
