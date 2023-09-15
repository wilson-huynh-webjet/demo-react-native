import { StatusBar } from 'expo-status-bar'
import styled from 'styled-components/native'
import { useState } from 'react'
import { If } from './components'
import Flights from './components/Flights'
import Packages from './components/Packages'
import Hotels from './components/Hotels'
import { Tab, TabView } from '@rneui/themed'
import { Image, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import useStore from './store'

export default function Main () {
  const showHeader = useStore(state => state.showHeader)
  const setHeader = useStore(store => store.setHeader)

  const [index, setIndex] = useState(0)

  const handleOnSearch = () => {
    setHeader(false)
  }

  const handleOnHeaderPress = () => {
    setHeader(true)
  }

  return (
    <>
      <Header>
        <TouchableWithoutFeedback onPress={handleOnHeaderPress}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://services.webjet.com.au/web/ui/uipatternlibrary/patterns/webjet/images/webjet-logo.png'
            }}
          />
        </TouchableWithoutFeedback>
      </Header>
      <If condition={showHeader}>
        <Tab
          value={index}
          scrollable={true}
          onChange={e => setIndex(e)}
          indicatorStyle={{
            backgroundColor: 'white',
            height: 3
          }}
        >
          <Tab.Item
            title='FLIGHTS'
            icon={{ name: 'timer', type: 'ionicon', color: 'white' }}
          />
          <Tab.Item
            title='PACKAGES'
            icon={{ name: 'heart', type: 'ionicon', color: 'white' }}
          />
          <Tab.Item
            title='HOTELS'
            icon={{ name: 'cart', type: 'ionicon', color: 'white' }}
          />
          <Tab.Item
            title='CARS'
            icon={{ name: 'cart', type: 'ionicon', color: 'white' }}
          />
          <Tab.Item
            title='INSURANCE'
            icon={{ name: 'cart', type: 'ionicon', color: 'white' }}
          />
          <Tab.Item
            title='THINGS TO DO'
            icon={{ name: 'cart', type: 'ionicon', color: 'white' }}
          />
        </Tab>
      </If>
      <TabView
        value={index}
        onChange={setIndex}
        style={{ flex: 1, backgroundColor: 'green' }}
      >
        <TabView.Item style={{ flex: 1 }}>
          <Flights onSearch={handleOnSearch} />
        </TabView.Item>
        <TabView.Item style={{ flex: 1 }}>
          <Packages onSearch={handleOnSearch} />
        </TabView.Item>
        <TabView.Item style={{ flex: 1 }}>
          <Hotels onSearch={handleOnSearch} />
        </TabView.Item>
      </TabView>
      <StatusBar style='auto' />
    </>
  )
}

const Header = styled.View`
  display: flex;
  line-height: 130%;
  background: red;
  justify-content: center;
  align-items: center;
  padding: 12px;
`

const styles = StyleSheet.create({
  imgContainer: {
    flexDirection: 'row'
  },
  image: {
    width: 145,
    height: 53
  }
})
