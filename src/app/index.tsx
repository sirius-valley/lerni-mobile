import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import FreeTextBubble from '../components/common/FreeTextBubble';

const Landing = () => {
  const [inputValue, setInputValue] = React.useState('');
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
      <FreeTextBubble
        value={inputValue}
        onChangeText={(value) => setInputValue(value)}
        handlePress={handlePress}
        textLimit={30}
      />
    </View >
  );
};

export default Landing;
