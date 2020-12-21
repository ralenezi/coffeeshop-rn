import { Body, Icon, Left, ListItem, Right } from 'native-base'
import React from 'react'
import { View, Text } from 'react-native'
import { TotalPrice } from '../assets/styles'
import cartStore from '../stores/cartStore'

const CartItem = ({ item }) => {
  return (
    <ListItem>
      <Body>
        <Text>{item.name}</Text>
        <Text note>
          {item.price} KD x {item.quantity}
        </Text>
        <TotalPrice>{item.price * item.quantity} KD</TotalPrice>
      </Body>
      <Right>
        <Icon
          name='trash'
          type='Ionicons'
          style={{ color: '#000' }}
          onPress={() => cartStore.removeItemFromCart(item.id)}
        />
      </Right>
    </ListItem>
  )
}

export default CartItem
