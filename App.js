import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components/native'

export default function App () {
  return (
    <StyledView>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style='auto' />
    </StyledView>
  )
}

const StyledView = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;  
`
