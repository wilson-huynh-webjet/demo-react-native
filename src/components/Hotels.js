import { useState } from 'react'
import styled from 'styled-components/native'
import React from 'react'
import { If, Button } from './index'
import WebView from './Webview'
import { Text } from '@rneui/base'
import SETTINGS from '../constants'
import useStore from '../store'

const Hotels = ({ onSearch }) => {
  const showHeader = useStore(state => state.showHeader)
  const setHeader = useStore(state => state.setHeader)

  const handleSearchButton = () => {
    setHeader(false)
    onSearch && onSearch()
  }

  return (
    <MainContainer>
      <If condition={showHeader}>
        <Text h4>Hotels Search</Text>
        <Button onPress={handleSearchButton}>Search</Button>
      </If>
      <If condition={!showHeader}>
        <SearchContainer>
          <WebView uri={SETTINGS.HOTELS_SEARCH_URL}></WebView>
        </SearchContainer>
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
