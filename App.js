import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export default function App () {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'red' }}>
        <StyledView>
          <StyledHeader>
            <StyleText>webjet.com.au</StyleText>
          </StyledHeader>
          <StatusBar style='auto' />
        </StyledView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const StyledView = styled.View`
  flex: 1;
  background-color: white;
`

const StyledHeader = styled.View`
  display: flex;
  line-height: 130%;
  background: red;
  justify-content: center;
  padding: 12px;
`

const StyleText = styled.Text`
  color: white;
  font-weight: 700;
  font-size: 24px;
`
