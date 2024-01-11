import { View, Text, Button } from 'react-native';
import React, { useEffect } from 'react';
import { Link } from 'expo-router';
import { authActions } from '../redux/slice/auth.slice';
import * as SecureStore from 'expo-secure-store';
import { useDispatch } from 'react-redux';

const Landing = () => {
  
  const dispatch = useDispatch();

  const getTokenFromSecureStore = async () => {
    const token = await SecureStore.getItemAsync("token");
    if (token) {
      dispatch(authActions.setToken(token))
    }
  }

  useEffect(() => {
    getTokenFromSecureStore();
  }, [])

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
    </View>
  );
};

export default Landing;
