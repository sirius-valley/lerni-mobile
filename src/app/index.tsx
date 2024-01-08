import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Landing = () => {

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
      }}
    >
      <Text>Landing</Text>
      <Link asChild href={'/(tabs)/profile'}>
        <Button title="Home" />
      </Link>
      <Link asChild href={'/(app)/register'}>
        <Button title="Register" />
      </Link>
    </View >
  );
};

export default Landing;
