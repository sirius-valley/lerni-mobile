import { Provider } from 'react-redux';
import { ThemeProvider, useTheme } from 'styled-components/native';
import { buildProviderTree } from '../utils/BuildProviderTree';
import { Slot } from 'expo-router';
import { useFonts } from 'expo-font';
import store from '../redux/store';
import React from 'react';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import { theme } from '../utils/theme';
import ToastManager from 'toastify-react-native';
import { View } from 'react-native';
import { StyledText } from '../components/styled/styles';
import { withToast } from '../hoc/withToast';
import { ToastComponent } from '../hoc/Toast';

const _layout = () => {

  const ProvidersTree = buildProviderTree([
    [ThemeProvider, { theme }],
    [Provider, { store }],
    [ToastComponent, { }],
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
