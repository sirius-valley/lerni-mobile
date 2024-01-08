import { Provider } from 'react-redux';
import { ThemeProvider, useTheme } from 'styled-components/native';
import { buildProviderTree } from '../utils/BuildProviderTree';
import { Slot } from 'expo-router';
import { useFonts } from 'expo-font';
import store from '../redux/store';
import React from 'react';
import Toast, { BaseToast } from 'react-native-toast-message';
import { theme } from '../utils/theme';

const _layout = () => {

  const toastConfig = {
    success: (props: any) => (
      <BaseToast
        {...props}
        leadingIcon={'😵'}
        trailingIcon={'X'}
        style = {{
          borderRadius: '8px',
          backgroundColor: theme.success,
          padding: '12px 18px',
          gap: '16px',
          alignItems: 'center',
        }}
        contentContainerStyle = {{

        }}
        text1Style={{
          fontFamily: theme.body2.fontFamily,
          fontSize: theme.body2.fontSize,
          fontWeight: theme.body2.fontWeight,
          color: theme.white,
          width: '189px'
        }}
      />
    ),
  };

  const ProvidersTree = buildProviderTree([
    [ThemeProvider, { theme }],
    [Provider, { store }],
    // [Toast, { toastConfig } ],
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
    <ProvidersTree children={<Slot />} />
    //   <Slot />
    // </ProvidersTree>
  );
};

export default _layout;
