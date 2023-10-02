import { View } from 'react-native'
import React, { useState } from 'react'
import * as Location from 'expo-location'
import { If, Button } from './index'
import { Text, Icon } from '@rneui/themed'
import SETTINGS from '../constants'

const CurrentLocation = () => {
  const [location, setLocation] = useState()

  // Function to get permission for location
  const handleLocationButton = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync()
    if (status !== 'granted') {
      setLocation({ granted: false })
      return
    }
    let { coords } = await Location.getCurrentPositionAsync({})
    setLocation({ ...coords, granted: true })
  }

  return (
    <>
      <If condition={!location}>
        <View style={{ flexDirection: 'row' }}>
          <Button type='outline' onPress={handleLocationButton}>
            <Text style={{ fontSize: 18, fontWeight: '700' }}>
              Use Current Location
            </Text>
          </Button>
        </View>
      </If>
      <If condition={Boolean(location)}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 18, fontWeight: '700', lineHeight: 45 }}>
            <If condition={location?.granted === true}>
              Longtitude: {location?.longitude}
              {'\n'}
              Latitude: {location?.latitude}
            </If>
            <If condition={location?.granted === false}>
              <Icon
                name='location-off'
                size={30}
                type='material'
                color={SETTINGS.THEME.PRIMARY}
              />
              Access location denied
            </If>
          </Text>
        </View>
      </If>
    </>
  )
}

export default CurrentLocation
