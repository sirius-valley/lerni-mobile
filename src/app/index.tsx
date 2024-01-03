import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { TextInput } from '../components/styled/text-input/TextInput';
import { TextInputStatus } from '../utils/constants';
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
      <TextInput placeholder="Enter your name..." status={TextInputStatus.DISABLED} />
      <Link asChild href={'home'}>
        <Button title="Home"></Button>
      </Link>
    </View>
  );
};

export default Landing;
