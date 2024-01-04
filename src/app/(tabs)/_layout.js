import React from 'react';
import { Tabs } from 'expo-router';
import { View, Text } from 'react-native';
import { bottomTabs } from './bottomTabs';
import { theme } from '../../utils/Theme';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      {bottomTabs.map(({ id, name, screen, iconName, active, roles }, index) => (
        <Tabs.Screen
          key={index}
          name={name}
          options={{
            tabBarShowLabel: false,
            tabBarStyle: {
              backgroundColor: theme.primary800,
              height: 60,
              paddingVertical: 20,
              paddingHorizontal: 60,
              gap: 24,
            },
            title: name,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 4,
                  paddingHorizontal: 12,
                }}
              >
                <iconName color={focused ? theme.gray100 : theme.primary600} />
                <Text style={{ color: focused ? theme.gray100 : theme.primary600 }}>{screen}</Text>
              </View>
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
