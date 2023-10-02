import { useState } from 'react'
import styled from 'styled-components/native'
import React from 'react'
import { If, Button, Location } from './index'
import WebView from './Webview'
import { Card, ButtonGroup } from '@rneui/themed'
import SETTINGS from '../constants'
import useStore from '../store'

const Flights = ({ onSearch }) => {
  const showHeader = useStore(state => state.showHeader)
  const setHeader = useStore(state => state.setHeader)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleSearchButton = () => {
    setHeader(false)
    onSearch && onSearch()
  }

  return (
    <MainContainer>
      <If condition={showHeader}>
        <Card>
          <Card.Title h4>Find Flights</Card.Title>
          <Card.Divider />
          <Location />
          <ButtonGroup
            buttons={['Return', 'One Way', 'Multi-City']}
            selectedIndex={selectedIndex}
            onPress={value => {
              setSelectedIndex(value)
            }}
          />

          <Button
            onPress={handleSearchButton}
            buttonStyle={{
              backgroundColor: '#2DB300',
              borderColor: 'white'
            }}
          >
            Search
          </Button>
        </Card>
      </If>
      <If condition={!showHeader}>
        <SearchContainer>
          <WebView uri={SETTINGS.FLIGHTS_SEARCH_URL}></WebView>
        </SearchContainer>
      </If>
    </MainContainer>
  )
}

const MainContainer = styled.View`
  flex: 1;
  background-color: white;
  width: 100%;
`

const SearchContainer = styled.View`
  flex: 1;
  width: 100%;
`

export default Flights
