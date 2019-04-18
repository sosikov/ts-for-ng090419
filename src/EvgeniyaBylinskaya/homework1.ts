
/* Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
 Возвращает true, если все аргументы, кроме первого входят в первый.
 Первым всегда должен быть массив.*/

function isInArray (array:any[], ...args):boolean{
    let inArray: boolean = true;
    for (let arg of args){
        if (!array.includes(arg)) {
            inArray = false;
            break;
        }
    }
    return inArray;
}

/*Написать функцию summator(), которая суммирует переданые ей аргументы.
 Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено*/

function isString(arg: sn): arg is string{
return true;
}

type sn = string|number;
function summator(...args:sn[]){


}
