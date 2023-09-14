import { Button as RneButton } from '@rneui/themed'
import React from 'react'

const If = ({ condition, children }) => {
  return condition === true ? children : null
}

export default If
