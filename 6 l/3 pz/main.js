console.log('задание 3.1');
let a = [
    [{name: 'Mary', age: 23}, {name: 'Mike', age: 45}, {name: 'Nick', age: 11}],
    [{name: 'Adam', age: 56}, {name: 'Sara', age: 21}, {name: 'Don', age: 22}],
    [{name: 'Karl', age: 34}, {name: 'Marta', age: 76}, {name: 'John', age: 19}]
   ];

let b = a;

console.log(b[1]);
document.write('<p>Для просмотра решений заданий откройте консоль браузера. </p>')
let priceIn = 0;

let inBasket = [
    {name: 'T-shirt', price: 999}, {name: 'Back', price: 1333}
]
inBasket.push({name: 'soul', price: 3999});

//посчитаем общую стоимост товаров

function countBasketPrice() {
    for(let i = 0; i < inBasket.length; i++){
        priceIn = priceIn + inBasket[i].price;
    }
    return priceIn;
}

document.write('<p>В корзине:  </p>')
for (i=0;i<inBasket.length;i++){
    document.write(inBasket[i].name + ' : ' + inBasket[i].price +' рублей</br>');
}
document.write('</br><strong>Стоимость заказа: '+countBasketPrice(inBasket)+' рублей </strong>');

console.log('задание 3.3');



for (let i = 0; i < 9; i++, console.log(i)) {
    //empty
}

console.log('задание 3.4');

let arr = [];
let end = 0;
while (end < 20){
    end++;
    arr.push('x');
    console.log(arr);
}