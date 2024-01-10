import { View, Text, Button as RNButton } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import Button from '../components/styled/Button/Button';
import SendIcon from '../../assets/icons/SendIcon';
import PillHeader from '../components/PillHeader';

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
        backgroundColor: 'transparent',
      }}
    >
      <PillHeader />
      <Text>Landing</Text>
      <Link asChild href={'/(tabs)/profile'}>
        <RNButton title="Home" />
      </Link>
      <Button
        onPress={handleButtonPress}
        variant={'red'}
        loading={false}
        disabled={false}
        icon={SendIcon}
      >
        Press me
      </Button>
    </View>
  );
};

export default Landing;
