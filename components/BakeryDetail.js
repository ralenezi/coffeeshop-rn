import { observer } from 'mobx-react'
import { Spinner } from 'native-base'
import React from 'react'
import bakeryStore from '../stores/bakeryStore'
import cookieStore from '../stores/cookieStore'
import {
  BakeryDetailTitle,
  BakeryDetailImage,
  BakeryDetailWrapper,
} from '../assets/styles'
import CookieList from './CookieList'
import { View } from 'react-native'

const BakeryDetail = ({ navigation, route }) => {
  const { bakery } = route.params
  if (bakeryStore.loading) return <Spinner />

  const cookiesFromCookieStore = bakery.cookies.map((cookie) =>
    cookieStore.getCookieById(cookie.id)
  )

  return (
    <>
      <BakeryDetailWrapper>
        <BakeryDetailImage source={{ uri: bakery.image }} />
        <BakeryDetailTitle>{bakery.name}</BakeryDetailTitle>
      </BakeryDetailWrapper>
      <CookieList cookies={cookiesFromCookieStore} />
    </>
  )
}

export default observer(BakeryDetail)
