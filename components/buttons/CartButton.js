import React from 'react'
import { Button, Icon } from 'native-base'
import { CartButtonStyled, CartTextStyled } from '../../assets/styles'
import { useNavigation } from '@react-navigation/native'
import cartStore from '../../stores/cartStore'
import { observer } from 'mobx-react'

const CartButton = () => {
  const navigation = useNavigation()
  return (
    <Button transparent light onPress={() => navigation.navigate('Cart')}>
      <CartTextStyled>{cartStore.totalQuantity}</CartTextStyled>
      <CartButtonStyled
        type='MaterialCommunityIcons'
        name='cart'
        onPress={() => navigation.navigate('Cart')}
      />
    </Button>
  )
}

export default observer(CartButton)
