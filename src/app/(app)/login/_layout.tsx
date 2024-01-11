import React from 'react';
import { Redirect, Slot } from 'expo-router';
import { RootState } from '../../../redux/store';
import { useSelector } from 'react-redux';


const _layout = () => {

  const token = useSelector((state: RootState) => state.auth.token);

  if (token) {
    return <Redirect href={'/(tabs)/profile'} />
  }

  return (
    <Slot />
  )
}

export default _layout;