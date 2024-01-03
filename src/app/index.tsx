import { View, Text, Button as RNButton } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import Button from '../components/styled/Button/Button';
import { theme } from '../utils/Theme';
import SendIcon from '../../assets/icons/SendIcon';

const Landing = () => {
  const handleButtonPress = () => {
    alert('asd');
  };

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
        <RNButton title="Home" />
      </Link>
      <Button onPress={handleButtonPress} variant={'red'} loading={false} Icon={SendIcon}>
        Press me
      </Button>
    </View>
  );
};

export default Landing;
