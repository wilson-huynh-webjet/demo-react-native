import { useState } from 'react'
import styled from 'styled-components/native'
import React from 'react'
import If from './If'

import WebView from './Webview'
import Button from './Button'
import { Text } from '@rneui/base'

const Flights = ({ onSearch }) => {
  const [showSearch, setShowSearch] = useState(false)
  const searchUrl =
    'https://services.dev.webjet.com.au/web/flights/redirect?size=mobile&Adults=1&Children=0&Infants=0&countryfrom=australia&countryto=australia&triptype=oneway&steps=MEL-SYD-20240621-economy-Melbourne-Sydney'

  const handleSearchButton = () => {
    setShowSearch(!showSearch)
    onSearch && onSearch()
  }

  return (
    <MainContainer>
      <If condition={showSearch}>
        <SearchContainer>
          <WebView uri={searchUrl}></WebView>
        </SearchContainer>
      </If>
      <If condition={!showSearch}>
        <Text h4>Flights Search</Text>
        <Button onPress={handleSearchButton}>Search</Button>
      </If>
    </MainContainer>
  )
}

const MainContainer = styled.View`
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const SearchContainer = styled.View`
  flex: 1;
  width: 100%;
`

export default Flights
