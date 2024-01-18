import React from 'react';
import { Redirect, Slot } from 'expo-router';
import { useLSelector } from '../../redux/hooks';

export const Layout = () => {
  const token = useLSelector((state) => state.auth.token);

  if (!token) {
    return <Redirect href={'/(auth)/(tabs)/explore'} />;
  }

  return <Slot />;
};

export default Layout;
