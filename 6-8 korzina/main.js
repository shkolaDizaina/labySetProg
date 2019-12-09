

class Basket {
  constructor() {
      this.goodList = localStorage['basket'] ? JSON.parse(localStorage['basket']) : []
      this.update()
  }

  countTotalNumber() {
      let totalNumber = 0
      for (let item of this.goodList) {
          totalNumber += item.count
      }
      return totalNumber
  }
  
  countTotalPrice() {
      let totalPrice = 0
      for (let item of this.goodList) {
          totalPrice += item.price * item.count
      }
      return totalPrice
  }

  putProduct(product) {
      const productInBasket = this.goodList.find(good => good.name === product.name)
      if (productInBasket) {
          productInBasket.count++
      } else {
          this.goodList.push(product)
      }
      this.update()
  }

  removeFromBasketByName(name) {
      this.goodList = this.goodList.filter(good => good.name !== name)
      this.update()
  }

  clear() {
      this.goodList = []
      this.update()
  }

  update() {
      localStorage['basket'] = JSON.stringify(this.goodList)

      const basketElement = document.querySelector('#basket')

      if (!basketElement) return

      basketElement.innerHTML = `<p>Кол-во товаров в корзине: ${this.countTotalNumber()}</p>
                          <p>Общая цена: ${this.countTotalPrice()}</p>`

      
  }
}

const basket = new Basket()

document.querySelectorAll('.card').forEach(card => {

  card.onclick = e => {
      e.preventDefault()

      const price = Number(card.querySelector('.btn-primary').getAttribute('data-price')) // преобразует цену из дата прайс в число
      const name = card.querySelector('.card-text').innerText
  
      basket.putProduct({ price, name, count: 1 })
  }
  

})