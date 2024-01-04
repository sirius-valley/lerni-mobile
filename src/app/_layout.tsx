import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';
import { buildProviderTree } from '../utils/BuildProviderTree';
import { theme } from '../utils/Theme';
import { Slot } from 'expo-router';
import { useFonts } from 'expo-font';
import store from '../redux/store';
import React from 'react';

const _layout = () => {
  const ProvidersTree = buildProviderTree([
    [ThemeProvider, { theme }],
    [Provider, { store }],
  ]);

  const [fontsLoaded] = useFonts({
    'Roboto-Thin': require('../../assets/fonts/Roboto-Thin.ttf'),
    'Roboto-Light': require('../../assets/fonts/Roboto-Light.ttf'),
    'Roboto-Regular': require('../../assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('../../assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('../../assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Black': require('../../assets/fonts/Roboto-Black.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }


  return (
    <ProvidersTree>
      <Slot />
    </ProvidersTree>
  );
};

export default _layout;
