import { useState } from 'react'
import styled from 'styled-components/native'
import React from 'react'
import { If, Button } from './index'
import WebView from './Webview'
import { Card, ButtonGroup, Text } from '@rneui/themed'
import SETTINGS from '../constants'
import useStore from '../store'
import {StyleSheet, View} from 'react-native';

const Flights = ({ onSearch }) => {
  const showHeader = useStore(state => state.showHeader)
  const setHeader = useStore(state => state.setHeader)

  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleSearchButton = () => {
    setHeader(false)
    onSearch && onSearch()
  }

    // Function to get permission for location
  const handleLocationButton = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Geolocation Permission',
          message: 'Can we access your location?',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      console.log('granted', granted);
      if (granted === 'granted') {
        console.log('You can use Geolocation');
        return true;
      } else {
        console.log('You cannot use Geolocation');
        return false;
      }
    } catch (err) {
      return false;
    }
  };


  return (
    <MainContainer>
      <If condition={showHeader}>
        <Card>
          <Card.Title h4>Find Flights</Card.Title>
          <Card.Divider />
          <View style={{flexDirection: 'row', }}>
            <Button type='outline' onPress={handleLocationButton}>
              <Text style={{ fontSize: 18, fontWeight: '700' }}>Use Current Location</Text>
            </Button>
          </View>
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
