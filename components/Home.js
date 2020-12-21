import React from 'react'
import { View, Image } from 'react-native'
import {
  Title,
  TopStyling,
  ButtonStyled,
  BottomStyling,
} from '../assets/styles'

const Home = ({ navigation }) => {
  return (
    <View>
      <TopStyling>
        <Title>Coffee Shop</Title>
      </TopStyling>
      <Image
        source={{
          uri: 'https://webstockreview.net/images/clipart-coffee-pdf-14.png',
        }}
        style={{
          width: 200,
          height: 200,
          alignSelf: 'center',
        }}
      />
      <BottomStyling>
        <ButtonStyled onPress={() => navigation.navigate('BakeryList')}>
          Click for bakeries
        </ButtonStyled>
      </BottomStyling>
    </View>
  )
}

export default Home
