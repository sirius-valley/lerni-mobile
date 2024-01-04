import React from 'react';
import { Tabs } from 'expo-router';
import { View, Text } from 'react-native';
import { bottomTabs } from './bottomTabs';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      {bottomTabs.map((tab, index) => (
        <Tabs.Screen
          key={index}
          name={tab.name}
          options={{
            tabBarShowLabel: false,
            tabBarStyle: {
              backgroundColor: '#072C37',
              height: 60,
              paddingVertical: 20,
              paddingHorizontal: 60,
              gap: 24,
              display: 'inline-flex',
              alignItems: 'flex-start',
            },
            title: tab.name,
            tabBarIcon: ({ focused, size }) => (
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 4,
                  padding: 0,
                  paddingHorizontal: 12,
                }}
              >
                {React.cloneElement(tab.iconName, {
                  color: focused ? '#F1F5F9' : '#307F90',
                })}
                <Text style={{ color: focused ? '#F1F5F9' : '#307F90' }}>{tab.screen} </Text>
              </View>
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
