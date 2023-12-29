import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

type Props = {}

const Landing = (props: Props) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Landing</Text>
      <Link asChild href={'home'}>
        <Button title='Home'></Button>
      </Link>
    </View>
  )
}

export default Landing
