import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';
import FreeTextBubble from '../components/common/FreeTextBubble';
import { StyledColumn } from '../components/styled/styles';

const Landing = () => {
  const [inputValue, setInputValue] = useState('');

  const handlePress = () => {
    alert(inputValue);
  }

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
      <Link asChild href={'/(app)/login'}>
        <Button title="Login" />
      </Link>
      <StyledColumn css={{ padding: 16, gap: 16, alignItems: 'flex-end', height: '500px', width: '100%' }}>
        <FreeTextBubble
          value={inputValue}
          onChangeText={(value) => setInputValue(value)}
          handlePress={handlePress}
          textLimit={150}
        />
      </StyledColumn>
    </View>
  );
};

export default Landing;
