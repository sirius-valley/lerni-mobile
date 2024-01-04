import { View, Text, Button } from 'react-native';
import React, { useEffect } from 'react';
import { Link, Redirect, router, useNavigation, useRouter } from 'expo-router';
import { TextInput } from '../../components/styled/text-input/TextInput';
import { theme } from '../../utils/Theme';
import store from '../../redux/store';

const Landing = () => {
  const navigate = useRouter();

  useEffect(() => {
    const token = store.getState().auth.token;
    if (!token) navigate.push('login');
  }, []);

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
    </View>
  );
};

export default Landing;
