import React, { useEffect } from 'react';
import { Redirect, Slot } from 'expo-router';
import { useLDispatch, useLSelector } from '../../redux/hooks';
import { getTokenFromSecureStore } from '../../utils/utils';

export const Layout = () => {
  const token = useLSelector((state) => state.auth.token);
  const dispatch = useLDispatch();

  useEffect(() => {
    getTokenFromSecureStore(dispatch);
  }, []);

  if (token) {
    return <Redirect href={'/(tabs)/explore'} />;
  }

  return <Slot />;
};

export default Layout;
