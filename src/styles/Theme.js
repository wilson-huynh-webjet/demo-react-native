import { createTheme } from "@rneui/themed";

const Theme = createTheme({
    lightColors: {
      primary: 'red'
    },
    mode: 'light',
    components: {
      Button: {
        raised: true
      },
      ButtonGroup: {
        selectedButtonStyle: {
          color: 'green',
          backgroundColor: '#999',
          fontSize: 20
        },
        containerStyle: {
          height: 50,
          marginHorizontal: 0,
          marginBottom: 50
        },
        buttonStyle: {}
      },
      Card: {
        containerStyle: {
            flex: 1,
            marginBottom: 16
        }

      },
      Tab: {
        dense: true
      },
      TabItem: {
        titleStyle: {
          fontSize: 13,
          color: 'white'
        }
      }
    }
  })

  export default Theme
  