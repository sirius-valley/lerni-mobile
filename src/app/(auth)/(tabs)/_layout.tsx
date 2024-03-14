import { Redirect, Tabs } from 'expo-router';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components';
import TabItem from '../../../components/tab/TabItem';
import { useLDispatch, useLSelector } from '../../../redux/hooks';
import { useMeQuery } from '../../../redux/service/student.service';
import { setModalOpen } from '../../../redux/slice/utils.slice';
import { ModalTypeEnum } from '../../../utils/utils';
import { bottomTabs } from './bottomTabs';

const TabsLayout = () => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const { data: aboutMe } = useMeQuery();
  const dispatch = useLDispatch();

  const token = useLSelector((state) => state.auth.token);

  if (!token) {
    return <Redirect href={'/(app)/login'} />;
  }

  const handlePress = () => {
    dispatch(setModalOpen({ modalType: ModalTypeEnum.INTRO_MODAL }));
  };
  return (
    <Tabs
      sceneContainerStyle={{ backgroundColor: theme.primary900 }}
      screenOptions={{
        tabBarHideOnKeyboard: true,
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
          borderTopWidth: 0,
          position: 'absolute',
        },
      }}
    >
      {bottomTabs.map(({ name, screen, iconName, needsIntroduction }, index) => (
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
                  needsIntroduction && needsIntroduction === !aboutMe?.hasCompletedIntroduction
                    ? handlePress
                    : undefined
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
