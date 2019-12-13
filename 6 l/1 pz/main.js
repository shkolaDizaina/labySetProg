console.log('1.1 задание');

let celc = 8;

let forengeit = (9 / 5 )  * celc + 32;

console.log(forengeit);

console.log('1.2 задание');

let name = 'Valdis';
let admin = name;

console.log(admin);

console.log('1.3 задание');

console.log(10	+	10	+	"10")	// к интовому результату прибавляем строку
console.log(10	+	"10"	+	10)	// к инту добавляем строку а потом полученное значение прибавляем к инту
console.log(10	+	10	+	+"10")	// сложение двух чисел, после добавляется строка
console.log(10	/	-"")	// из числа вычитается пустая строка
console.log(10	/	+"2,5") // число делим на строку

console.log("задание 2.2");

let a = 2;
let x = 1 + (a*=2);

console.log(x);

console.log("задание 2.3");

let val1 = prompt('a: ');
let val2 = prompt('b: ');

if (val1 > 0 || val2 > 0) {
    console.log(val1 - val2);

} else if (val1 < 0 || val2 < 0){
    console.log(val1 * val2)
} else if(val1 > 0 || val2 < 0) {
    console.log (val1a + val2);

}

console.log("задание 2.4");

function sum() {
    
    return  val1- -val2;
}
function mul() {
    return val1 * val2;
}
function del() {
    return val1 / val2;
}
function unsum() {
    return val1 - val2;
}
console.log(
    'summa' +' '+ sum(),
   'multiplicate' + ' '+  mul(),
   'delenit' +' '+ del(),
    'vichitanie' +' '+ unsum()
    );

console.log("задание 2.5");

function mathOperation(val1, val2, operation) {
    switch(operation) {
        case 'summ':
            return val1- -val2
        break;
        case 'unsumm' :
            return val1 - val2
        break;
        case 'mult' :
            return val1 * val2
        break;
        case 'del' :
            return val1 / val2;
        break;

    }
}
mathOperation()


/*
console.log("задание 2.6")

let val = prompt('inp val');
let pow = prompt('input pow');
function power( val, pow ) {
   
    if ( pow === 0 ) {
        return 1;
    }
    else {
        return val * power( val, pow - 1);
    }
}
alert(power())

*/