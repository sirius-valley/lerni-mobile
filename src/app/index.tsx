import React, { useEffect, useState } from 'react';
import { Redirect } from 'expo-router';
import { setToken } from '../redux/slice/auth.slice';
import * as SecureStore from 'expo-secure-store';
import { useLDispatch } from '../redux/hooks';
import { getTokenFromSecureStore } from '../utils/utils';

const Landing = () => {
  const [appIsReady, setAppIsReady] = useState(false);
  const dispatch = useLDispatch();

  useEffect(() => {
    getTokenFromSecureStore(dispatch, () => setAppIsReady(true));
  }, []);

  if (!appIsReady) {
    return null;
  }

  return <Redirect href={'/(app)/login'} />;
};

export default Landing;
