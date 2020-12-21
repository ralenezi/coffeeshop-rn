import React from 'react'
import { Content, List } from 'native-base'
import CookieItem from './CookieItem'
import { SafeAreaView, View } from 'react-native'
const CookieList = ({ cookies }) => {
  const cookieList = cookies.map((cookie) => (
    <CookieItem cookie={cookie} key={cookie.id} />
  ))

  return (
    <Content>
      <List>{cookieList}</List>
    </Content>
  )
}

export default CookieList
