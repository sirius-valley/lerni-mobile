import React from 'react';
import { Redirect, Tabs } from 'expo-router';
import { bottomTabs } from './bottomTabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from "styled-components";
import TabItem from "../../components/tab/TabItem";
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';


const TabsLayout = () => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  const token = useSelector((state: RootState) => state.auth.token);

  if (!token) {
    return <Redirect href={'/(app)/login'} />
  }

  return (
    <Tabs screenOptions={{
      headerShown: false, tabBarStyle: {
        backgroundColor: theme.primary800,
        paddingHorizontal: 60,
        height: 80 + insets.bottom,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 8,
        paddingBottom: insets.bottom,
      }
    }}>
      {bottomTabs.map(({ name, screen, iconName }, index) => (
        <Tabs.Screen
          key={index}
          name={screen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <TabItem name={name} focused={focused} icon={iconName} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}

export default TabsLayout;
