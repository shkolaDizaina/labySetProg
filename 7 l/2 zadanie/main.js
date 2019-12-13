/* 2. Продолжить	работу	с	интернет-магазином,	а	именно,	перенести	функционал	
подсчета	корзины	на	объектно-ориентированную	базу:
• создать	объект	Basket	с	полем	goodList	и	методами	countTotalPrice,
countTotalNumber и	putProduct (методы	должны	считать	общую	стоимость	того,	
что	в	goodList, общее	количество	того,	что	в	goodList и	добавлять	товар	в	
корзину)
• создать	массив	товаров	с	полями	name	и	price
• после	этого	пройтись	по	нему	в	цикле	и	положить	в	корзину	по	одному	
товару	на	четной	позиции	и	по	2	товара	на	нечетной	позиции
• внутри	корзины в	массиве	goodList у каждого	товара	должно	быть	поле	
count – количество	товаров	этого	вида	в	корзине	(например,	5	красных	шаров)
• вывести	общую	стоимость	корзины	и	общее	количество	товаров	в	корзине 

PS: предыдущий вариант находится в папке \6 l\3 pz
я забыл что его сделал раньше :D
*/


console.log('4.2');
let product = [
    {name: "Куртка", price: 1600, size: 38},
    {name: "футболка", price: 1600, size: 38},
    {name: "штаны", price: 1600, size: 38},
    {name: "кроссовки", price: 1600, size: 38},
    {name: "галстук", price: 1600, size: 38}
];
let basket = {
    goodList: [],
    countTotalPrice: function () {
        let sum = 0;
        for (let i in this.goodList) {
            sum += this.goodList[i].price
        }
        return sum;
    },
    countTotalNumber: function () {
        return this.goodList.length
    },
    putProduct: function (product) {
        for (let i in product) {
            if (i % 2 === 0) {
                product[i].count = 2
             
            } else {
                product[i].count = 1;
               
            }
            this.goodList.push(product[i]);
        }
    },
    generation: function () {
        let basketBlock = document.getElementById('basket');
        if (this.goodList.countTotalNumber = 0) {

            console.log("Корзина пуста")
        } else {
            console.log("Корзина не пуста")
        }
    }
};
basket.putProduct(product)

console.log(basket)

console.log("Общая стоимоcть корзины: " + basket.countTotalPrice());
console.log("Товаров в корзине: " + basket.countTotalNumber())
basket.generation()