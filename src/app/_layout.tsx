import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components/native'

import { buildProviderTree } from '../utils/BuildProviderTree'
import { store } from '../redux/store'
import { theme } from '../constants/Theme'
import { Stack } from 'expo-router'
import React from 'react'

type Props = {}

const _layout = (props: Props) => {
  let Theme = { theme }

  const ProvidersTree = buildProviderTree([
    [ThemeProvider, Theme],
    [Provider, { store }],
  ])

  return (
    <ProvidersTree>
      <Stack>
        <Stack.Screen
          name="/index"
          options={{
            title: 'Home',
          }}
        />
      </Stack>
    </ProvidersTree>
  )
}

export default _layout
