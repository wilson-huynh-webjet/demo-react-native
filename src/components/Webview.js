import * as React from 'react'
import { Platform } from 'react-native'
import { WebView as RnWebview } from 'react-native-webview'
import If from './If'

const WebView = ({ uri }) => {
  const isWebPlatform = Platform.OS === 'web'

  return (
    <>
      <If condition={isWebPlatform}>
        <iframe src={uri} height={'100%'} width={'100%'} />
      </If>
      <If condition={!isWebPlatform}>
        <RnWebview source={{ uri }} style={{ flex: 1 }} />
      </If>
    </>
  )
}

export default WebView
