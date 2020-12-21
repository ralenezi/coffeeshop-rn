import { observer } from 'mobx-react'
import { List, Spinner } from 'native-base'
import React from 'react'
import { View, Text } from 'react-native'
import cartStore from '../stores/cartStore'
import cookieStore from '../stores/cookieStore'
import CartItem from './CartItem'
import { CheckoutButton, CheckoutButtonText } from '../assets/styles'

const CartList = () => {
  if (cookieStore.loading) return <Spinner />
  const cartList = cartStore.items
    .map((item) => ({
      ...cookieStore.getCookieById(item.cookieId),
      quantity: item.quantity,
    }))
    .map((item) => <CartItem item={item} key={item.name} />)
  return (
    <View>
      <List>{cartList}</List>
      <CheckoutButton onPress={cartStore.checkout}>
        <CheckoutButtonText>Checkout</CheckoutButtonText>
      </CheckoutButton>
    </View>
  )
}

export default observer(CartList)
