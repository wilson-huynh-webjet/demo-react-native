import { Button as RneButton } from '@rneui/themed'
import React from 'react'

const Button = ({ children, type, buttonStyle, onPress }) => {
  return (
    <RneButton
      size='lg'
      type={type}
      buttonStyle={{...buttonStyle}}
      containerStyle={{
        flex: 1,
        width: '100%',
        marginHorizontal: 'auto',
        marginVertical: 10,
      }}
      titleStyle={{ fontWeight: 'bold' }}
      onPress={onPress}
    >
      {children}
    </RneButton>
  )
}

export default Button
