import React, { useState } from 'react'
import styled from 'styled-components/native'
import { If, Button } from './index'

import WebView from './Webview'
import { Text } from '@rneui/base'
import SETTINGS from '../constants'

const Packages = ({ onSearch }) => {
  const [showSearch, setShowSearch] = useState(false)

  const handleSearchButton = () => {
    setShowSearch(!showSearch)
    onSearch && onSearch()
  }

  return (
    <MainContainer>
      <If condition={showSearch}>
        <SearchContainer>
          <WebView uri={SETTINGS.PACKAGES_SEARCH_URL}></WebView>
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
