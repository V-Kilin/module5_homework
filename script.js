/*Задание 1.

Напишите программу, которая работала бы следующим образом: в prompt вводится значение.С помощью унарного плюса(арифметический оператор) необходимо преобразовать его в число, затем проверить с помощью typeof, принадлежит ли оно к множеству Number.

Если это число, то вывести в консоль чётное оно или нечётное.

Если передано не число, выведите: «Упс, кажется, вы ошиблись».

* NaN, хоть и относится к типу Number, числом не является.Добавьте отдельную проверку для этого значения.*/

let value = +prompt('Please enter number');
if (!isNaN(value)) {
   if (value % 2 == 0) {
      console.log('чётное');
   } else {
      console.log('нечётное');
   }
} else {
   console.log('Упс, кажется, вы ошиблись')
}


/*Задание 2.

Дана переменная Х, которая может принимать любое значение. Написать программу, которая в зависимости от типа данных Х выводит в консоль сообщение вида: «X — число».

Опишите три случая: когда х = числу, строке или логическому типу. В других случаях выводите сообщение: «Тип x не определён».*/

let x = +prompt('Please enter value', '');
if (!isNaN(x)) {
   console.log('X — число');
} else if (isNaN(x)) {
   console.log('X — строка');
} else if (typeof (x) === 'boolean') {
   console.log('X — логический тип');
} else {
   console.log('Тип x не определён')
}


// Задание 3.

// Дана строка.Необходимо вывести в консоль перевёрнутый вариант.Например, "Hello" -> "olleH".

function reverseStr(str) {

   return str.split("").reverse().join("");
}
alert(reverseStr("Hello"));


// Задание 4.

// Записать в переменную случайное целое число в диапазоне[0; 100]. Используйте объект Math.

Math.floor(Math.random() * 100);


// Задание 5.

// Дан произвольный массив.Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.

let arr = [2, 4, 6, 8, 10];
console.log(arr.length);
arr.forEach(console.log);


// Задание 6.

// Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.

let arr = [1, 1, 1];

let check = arr.some(function (elem) {
   if (elem == 1) {
      return true;
   } else {
      return false;
   }
});

console.log(check);


// Задание 7.

// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

const arrNew = [0, 1, 2, 3, '4', 5, 6];
let odd = 0
let even = 0
let zero = 0

for (let i = 0; i < arrNew.length; i++) {
   if (arrNew[i] === 0) {
      zero += 1
   } else if (typeof (arrNew[i]) !== 'number') {
      console.log(`это не число: ${arrNew[i]}`)
   } else if (arrNew[i] % 2 === 0) {
      even += 1
   } else {
      odd += 1
   }
}

console.log(` ${even} - четных чисел`)
console.log(` ${odd} - нечетных чисел`)
console.log(` ${zero} - нулей`)


// Задание 8.

// Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».

let myMap = new Map();
myMap.set('key' , 'string');
myMap.set (2 , 333);
myMap.set(true , 5);
for (let name of myMap.keys()){
console.log('Ключ' + '-' + name);
}
for (let name of myMap.values()){
console.log('Значение' + '-' + name);
}