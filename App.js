import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { ThemeProvider } from '@rneui/themed'
import Main from './src'
import Theme from './src/styles/Theme'

import { Text, View, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SETTINGS from './src/constants'

function ComingSoonScreen () {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Text style={{ fontSize: 24}}>Coming Soon</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator()

function MyTabs () {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          backgroundColor: '#D8D8D8'
        },
        tabBarLabelStyle: {
          color: '#666',
          fontWeight: 700
        },
        tabBarActiveTintColor: 'red'        
      }}
    >
      <Tab.Screen
        name='Home'
        component={Main}
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={SETTINGS.HOME_ICON}
              />
            )
          }
        }}
      />
      <Tab.Screen
        name='My Trips'
        component={ComingSoonScreen}
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={SETTINGS.MY_TRIPS_ICON}
              />
            )
          }
        }}
      />
      <Tab.Screen
        name='Edit Trips'
        component={ComingSoonScreen}
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={SETTINGS.EDIT_TRIPS_ICON}
              />
            )
          }
        }}
      />
      <Tab.Screen
        name='Price Alerts'
        component={ComingSoonScreen}
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={SETTINGS.PRICE_ALERTS_ICON}
              />
            )
          }
        }}
      />
    </Tab.Navigator>
  )
}

export default function App () {
  return (
    <ThemeProvider theme={Theme}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'red' }}>
          <NavigationContainer >
            <MyTabs />
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
  )
}
