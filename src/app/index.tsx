import { View, Text } from 'react-native'
import React from 'react'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Home Page</Text>
    </View>
  )
}

export default HomePage
