import React, { useEffect, useState } from 'react';
import { Redirect } from 'expo-router';
import { authActions } from '../redux/slice/auth.slice';
import * as SecureStore from 'expo-secure-store';
import { useLDispatch } from '../redux/hooks';

const Landing = () => {
  const [appIsReady, setAppIsReady] = useState(false);
  const dispatch = useLDispatch();

  const getTokenFromSecureStore = async () => {
    const token = await SecureStore.getItemAsync('token');
    if (token) {
      dispatch(authActions.setToken(token));
    }
    setAppIsReady(true);
  };

  useEffect(() => {
    getTokenFromSecureStore();
  }, []);

  if (!appIsReady) {
    return null;
  }

  return <Redirect href={'/(app)/login'} />;
};

export default Landing;