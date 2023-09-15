import { Button as RneButton } from '@rneui/themed'
import React from 'react'

const Button = ({ children, onPress }) => {
  return (
    <RneButton
      size='lg'
      buttonStyle={{
        backgroundColor: '#2DB300',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 4,
        height: 50
      }}
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
