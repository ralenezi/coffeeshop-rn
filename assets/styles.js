import styled from 'styled-components/native'
import { Icon, Text, Button } from 'native-base'
export const HomeBackground = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
`

export const TopStyling = styled.View`
  height: 40%;
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  color: #900;
  font-size: 38;
  text-align: center;
  font-weight: bold;
`
export const BottomStyling = styled.View`
  height: 40%;
  align-items: center;
  justify-content: center;
`

export const ButtonStyled = styled.Text`
  font-size: 20;
  color: #800;
`
export const BakeryItemStyled = styled.Text`
  /* color: ${(props) => props.theme.mainColor}; */
  font-size: 18;
  margin-top: 10;
  margin-bottom: 10;
  margin-left: 16;
  width: 100%;
`
export const BakeryDetailWrapper = styled.View`
  margin-top: 50;
  margin-left: 16;
`

export const BakeryDetailImage = styled.Image`
  width: 150;
  height: 150;
  border-radius: 10;
`

export const BakeryDetailTitle = styled.Text`
  font-weight: bold;
  font-size: 40;
`
export const TotalPrice = styled.Text`
  font-size: 15px;
  font-weight: bold;
  margin-left: 10px;
`
export const CartButtonStyled = styled(Icon)`
  color: white;
  margin-right: 10px;
`
export const CartTextStyled = styled.Text`
  font-size: 20px;
`
export const CheckoutButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: #900;
  margin-top: 30px;
`

export const CheckoutButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
`
