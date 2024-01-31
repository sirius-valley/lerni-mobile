import React, { useEffect } from 'react';
import { Redirect, Tabs, useNavigation } from 'expo-router';
import { bottomTabs } from './bottomTabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components';
import TabItem from '../../../components/tab/TabItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { useLDispatch, useLSelector } from '../../../redux/hooks';

const TabsLayout = () => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const hasCompletedIntroduction = useLSelector((state) => state.auth.hasCompletedIntroduction);
  const dispatch = useLDispatch();

  const token = useSelector((state: RootState) => state.auth.token);

  if (!token) {
    return <Redirect href={'/(app)/login'} />;
  }

  const handlePress = () => {
    // dispatch(setModalOpen({modalType: ModalTypeEnum.MODAL_TO_BE_DEFINED}))
    alert('Modal a definir');
  };
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.primary800,
          paddingHorizontal: 60,
          height: 80 + insets.bottom,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          paddingTop: 8,
          paddingBottom: insets.bottom,
        },
      }}
    >
      {bottomTabs.map(({ name, screen, iconName }, index) => (
        <Tabs.Screen
          key={index}
          name={screen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <TabItem
                name={name}
                focused={focused}
                icon={iconName}
                onPress={
                  !hasCompletedIntroduction &&
                  (name == 'Perfil' || name == 'Trivias' ? handlePress : undefined)
                }
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabsLayout;
