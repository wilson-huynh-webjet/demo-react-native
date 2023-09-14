import { Button as RneButton } from '@rneui/base'
import React from 'react'

const Button = ({ children, onPress }) => {
  return (
    <RneButton
      size='lg'
      buttonStyle={{
        backgroundColor: '#2DB300',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 30
      }}
      containerStyle={{
        width: 200,
        marginHorizontal: 50,
        marginVertical: 10
      }}
      titleStyle={{ fontWeight: 'bold' }}
      onPress={onPress}
    >
      {children}
    </RneButton>
  )
}

export default Button
