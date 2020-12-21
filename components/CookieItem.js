import React from 'react'
import cartStore from '../stores/cartStore'
import { BakeryItemStyled } from '../assets/styles'
import { Button, Left, ListItem, Right } from 'native-base'
import { Image, Text } from 'react-native'
import NumericInput from 'react-native-numeric-input'
import { useState } from 'react'

const CookieItem = ({ cookie }) => {
  const [quantity, setQuantity] = useState(1)
  const handleAdd = () => {
    const newItem = { quantity, cookieId: cookie.id }
    console.log('handleAdd -> newItem', newItem)
    cartStore.addItemToCart(newItem)
  }
  return (
    <ListItem>
      <Left>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: cookie.image }}
        />
        <BakeryItemStyled>
          {cookie.name}
          {'\n'}
          <Text style={{ fontSize: 16, color: '#444' }}>{cookie.price} KD</Text>
        </BakeryItemStyled>
      </Left>
      <Right>
        <NumericInput
          rounded
          value={quantity}
          onChange={setQuantity}
          totalHeight={30}
          totalWidth={60}
          initValue={quantity}
        />
        <Button transparent onPress={handleAdd}>
          <Text
            style={{ fontSize: 16, color: '#444', backgroundColor: '#eee' }}>
            Add
          </Text>
        </Button>
      </Right>
    </ListItem>
  )
}

export default CookieItem
