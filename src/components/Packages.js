import { useState } from 'react'
import styled from 'styled-components/native'
import React from 'react'
import If from './If'

import WebView from './Webview'
import Button from './Button'
import { Text } from '@rneui/base'

const Packages = ({ onSearch }) => {
  const [showSearch, setShowSearch] = useState(false)
  const searchUrl =
    'https://services.dev.webjet.com.au/web/packages/search/#/results?areaId=300178312&toSelection=Sydney&from=MEL&fromSelection=Tullamarine,+Melbourne,+Australia&to=SYD&checkInDate=20240806&checkOutDate=20240807&flightFromDate=20240806&flightToDate=20240807&travelClass=Economy&paxRequest=A2C0&childAge=0'

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
        <Text h4>Packages Search</Text>
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
`

const SearchContainer = styled.View`
  flex: 1;
  width: 100%;
`

export default Packages
