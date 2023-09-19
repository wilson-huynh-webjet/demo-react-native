import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { Icon, ThemeProvider, useTheme } from '@rneui/themed'
import Main from './src'
import Theme from './src/styles/Theme'

import { Text, View } from 'react-native'
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
      <Text style={{ fontSize: 24 }}>Coming Soon</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator()

function MyTabs () {
  const { theme } = useTheme()

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          backgroundColor: '#D8D8D8'
        },
        tabBarLabelStyle: {
          color: '#999',
          fontWeight: 700,
          fontSize: 14
        },
        tabBarActiveTintColor: theme.colors.primary
      }}
    >
      <Tab.Screen
        name='Home'
        component={Main}
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Icon
                name='home'
                size={30}
                type='font-awesome'
                color={theme.colors.primary}
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
              <Icon
                name='luggage'
                size={30}
                type='material'
                color={theme.colors.grey2}
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
              <Icon
                name='edit'
                size={30}
                type='material'
                color={theme.colors.grey2}
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
              <Icon
                name='bell'
                size={26}
                type='font-awesome'
                color={theme.colors.grey2}
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
        <SafeAreaView
          style={{ flex: 1, backgroundColor: SETTINGS.THEME.PRIMARY }}
        >
          <NavigationContainer>
            <MyTabs />
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
  )
}
