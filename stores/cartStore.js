import { makeAutoObservable } from 'mobx'
import instance from './instance'
import AsyncStorage from '@react-native-community/async-storage'
class CartStore {
  items = [
    {
      cookieId: 1,
      quantity: 5,
    },
    {
      cookieId: 2,
      quantity: 3,
    },
  ]

  constructor() {
    makeAutoObservable(this)
  }
  addItemToCart = async (newItem) => {
    const foundItem = this.items.find(
      (item) => item.cookieId === newItem.cookieId
    )
    if (foundItem) foundItem.quantity += newItem.quantity
    else this.items.push(newItem)
    await AsyncStorage.setItem('myCart', JSON.stringify(this.items))
  }
  fetchCart = async () => {
    const items = await AsyncStorage.getItem('myCart')
    this.items = items ? JSON.parse(items) : []
  }
  get totalQuantity() {
    let total = 0
    this.items.forEach((item) => (total += item.quantity))
    return total
  }
  checkout = async () => {
    try {
      const res = await instance.post('/checkout', this.items)
      console.log('CartStore -> checkout -> res', res.data)
      this.items = []
      alert("I'm a cute message")
      await AsyncStorage.removeItem('myCart')
    } catch (error) {
      console.log('CartStore -> checkout -> error', error)
    }
  }
  removeItemFromCart = async (itemId) => {
    this.items = this.items.filter((item) => item.cookieId !== itemId)
    await AsyncStorage.setItem('myCart', JSON.stringify(this.items))
  }
}
const cartStore = new CartStore()
cartStore.fetchCart()
export default cartStore
