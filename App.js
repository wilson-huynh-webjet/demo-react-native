import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import { useState } from 'react'
import If from './src/components/If'
import { Tab, TabView } from '@rneui/themed'
import Flights from './src/components/Flights'
import Packages from './src/components/Packages'
import Hotels from './src/components/Hotels'

export default function App () {
  const [index, setIndex] = useState(0)
  const [showMenu, setShowMenu] = useState(true)

  const handleOnSearch = () => {
    setShowMenu(false)
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'red' }}>
        <Header>
          <StyleText>webjet.com.au</StyleText>
        </Header>
        <If condition={showMenu}>
          <Tab
            value={index}
            onChange={e => setIndex(e)}
            indicatorStyle={{
              backgroundColor: 'white',
              height: 3
            }}
          >
            <Tab.Item
              title='FLIGHTS'
              titleStyle={{ fontSize: 12, color: 'white' }}
              icon={{ name: 'timer', type: 'ionicon', color: 'white' }}
            />
            <Tab.Item
              title='PACKAGES'
              titleStyle={{ fontSize: 12, color: 'white' }}
              icon={{ name: 'heart', type: 'ionicon', color: 'white' }}
            />
            <Tab.Item
              title='HOTELS'
              titleStyle={{ fontSize: 12, color: 'white' }}
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
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const Header = styled.View`
  display: flex;
  line-height: 130%;
  background: red;
  justify-content: center;
  padding: 12px;
`

const StyleText = styled.Text`
  color: white;
  font-weight: 700;
  font-size: 22px;
`
