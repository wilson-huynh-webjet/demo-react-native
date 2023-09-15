import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { ThemeProvider } from '@rneui/themed'
import Main from './src'
import Theme from './src/styles/Theme'

export default function App () {
  return (
    <ThemeProvider theme={Theme}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'red' }}>
          <Main />
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
  )
}
