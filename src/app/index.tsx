import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';
import { TextInput } from '../components/styled/text-input/TextInput';
import { theme } from '../utils/Theme';

const Landing = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.primary200,
      }}
    >
      <Text>Landing</Text>
      <Link asChild href={'home'}>
        <Button title="Home"></Button>
      </Link>
    </View>
  );
};

export default Landing;
