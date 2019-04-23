/* Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
 Возвращает true, если все аргументы, кроме первого входят в первый.
 Первым всегда должен быть массив.*/
function isInArray(array, ...args) {
    let inArray = true;
    for (let arg of args) {
        if (!array.includes(arg)) {
            inArray = false;
            break;
        }
    }
    return inArray;
}
/*Написать функцию summator(), которая суммирует переданые ей аргументы.
 Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено*/
function isString(arg) {
    return true;
}
function summator(...args) {
}
//# sourceMappingURL=homework1.js.map