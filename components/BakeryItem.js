import { ListItem } from 'native-base'
import React from 'react'
import { View, Text, Image } from 'react-native'
import { BakeryItemStyled } from '../assets/styles'

const BakeryItem = ({ bakery, navigation }) => {
  return (
    <ListItem
      onPress={() => navigation.navigate('BakeryDetail', { bakery: bakery })}>
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: bakery.image }}
      />
      <BakeryItemStyled>{bakery.name}</BakeryItemStyled>
    </ListItem>
  )
}
export default BakeryItem
