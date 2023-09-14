import { useState } from 'react'
import styled from 'styled-components/native'
import React from 'react'
import If from './If'

import WebView from './Webview'
import Button from './Button'
import { Text } from '@rneui/base'

const Hotels = ({ onSearch }) => {
  const [showSearch, setShowSearch] = useState(false)
  const searchUrl =
    'https://services.dev.webjet.com.au/web/hotels/search/#/results?areaId=300178283&area=Melbourne&checkInDate=20250124&checkOutDate=20250125&paxRequest=A2C0&childAge=0'

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
        <Text h4>Hotels Search</Text>
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

export default Hotels
