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
//let admin: typeof user = 1;
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
interface IAccount<IdType> {
    id: IdType;
    firstName: string;
}

let user: IAccount<number>;
let admin: IAccount<string>;

let arr: Array<string>
let arr1: string[]

[1,2,3].map((a)=>a.)
