import { StatusBar } from 'expo-status-bar'
import styled from 'styled-components/native'
import { useEffect, useRef, useState } from 'react'
import { If } from './components'
import Flights from './components/Flights'
import Packages from './components/Packages'
import Hotels from './components/Hotels'
import { Tab, TabView } from '@rneui/themed'
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated
} from 'react-native'
import useStore from './store'
import SETTINGS from './constants'

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

  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start()
  }

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true
    }).start()
  }

  useEffect(() => {
    if (showHeader) {
      fadeOut()
    } else {
      fadeIn()
    }
  }, [showHeader])

  return (
    <>
      <Header>
        <Logo>
          <Image style={styles.image} source={SETTINGS.LOGO_URL} />
        </Logo>
        <If condition={!showHeader}>
          <Animated.View
            style={{
              opacity: fadeAnim
            }}
          >
            <TouchableOpacity onPress={handleOnHeaderPress}>
              <BackButton>
                <BackIcon>‹</BackIcon>
              </BackButton>
            </TouchableOpacity>
          </Animated.View>
        </If>
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
  position: relative;
  display: flex;
  line-height: 130%;
  background: red;
  flex: 1;
  max-height: 65px;
  flex-direction: row-reverse;
  margin-right: 40px;
`

const Logo = styled.Text`
  height: 80px;
  text-align: center;
  width: 110%;
  margin-top: -15px;
`

const BackButton = styled.View`
  height: 68px;
  width: 60px;
  padding: 5px 10px 0 20px;
  margin-right: -50px;
`

const BackIcon = styled.Text`
  color: white;
  font-size: 40px;
  font-weight: 700;
`

const styles = StyleSheet.create({
  imgContainer: {
    flexDirection: 'row'
  },
  image: {
    width: 145,
    height: 53
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: 'powderblue'
  },
  fadingText: {
    fontSize: 28
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16
  }
})
