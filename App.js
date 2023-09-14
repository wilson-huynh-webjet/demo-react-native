import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import Button from './src/components/Button'
import { useState } from 'react'
import If from './src/components/If'
import { WebView } from 'react-native-webview';

export default function App () {
  const [showSearch, setShowSearch] = useState(false)
  const searchUrl = 'https://services.dev.webjet.com.au/web/flights/redirect?size=mobile&Adults=1&Children=0&Infants=0&countryfrom=australia&countryto=australia&triptype=oneway&steps=MEL-SYD-20230921-economy-Melbourne-Sydney'

  const handleSearchButton = () => {
    setShowSearch(!showSearch)
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'red' }}>
        <Header>
          <StyleText>webjet.com.au</StyleText>
        </Header>
        <MainContainer>
          <If condition={showSearch}>
            <SearchContainer>
              <WebView source={{ uri: searchUrl }} style={{ flex: 1 }} />
            </SearchContainer>
          </If>
          <If condition={!showSearch}>
            <Button onPress={handleSearchButton}>Search</Button>
          </If>
          <StatusBar style='auto' />
        </MainContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const MainContainer = styled.View`
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
`

const SearchContainer = styled.View`
  flex: 1;
  width: 100%;
`

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
