import { observer } from 'mobx-react'
import React from 'react'
import { View, Text } from 'react-native'
import bakeryStore from '../stores/bakeryStore'
import BakeryItem from './BakeryItem'
import { List, Content, Spinner } from 'native-base'

const BakeryList = ({ navigation }) => {
  if (bakeryStore.loading) return <Spinner />
  const bakeryList = bakeryStore.bakeries.map((bakery) => (
    <BakeryItem bakery={bakery} key={bakery.id} navigation={navigation} />
  ))
  return (
    <Content>
      <List>{bakeryList}</List>
    </Content>
  )
}

export default observer(BakeryList)
