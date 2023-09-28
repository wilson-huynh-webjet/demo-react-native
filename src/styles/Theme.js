import { createTheme } from "@rneui/themed";
import SETTINGS from "../constants";

const Theme = createTheme({
    lightColors: {
      primary: SETTINGS.THEME.PRIMARY,
      grey0: '#333',
      grey1: '#666',
      grey2: '#999'
    },
    mode: 'light',
    components: {
      Button: {
        raised: true,
        buttonStyle: {
          borderWidth: 2,
          borderColor: SETTINGS.THEME.SECONDARY,
          borderRadius: 4,
          height: 50
        }
      },
      ButtonGroup: {
        selectedButtonStyle: {
          color: SETTINGS.THEME.PRIMARY,
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
      View: {
        style: {
          flex: 1
        }
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
  