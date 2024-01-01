import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';

import { buildProviderTree } from '../utils/BuildProviderTree';
import { theme } from '../utils/Theme';
import { Slot } from 'expo-router';
import store from '../redux/store';
import React from 'react';

const _layout = () => {
  const ProvidersTree = buildProviderTree([
    [ThemeProvider, { theme }],
    [Provider, { store }],
  ]);

  return (
    <ProvidersTree>
      <Slot />
    </ProvidersTree>
  );
};

export default _layout;
