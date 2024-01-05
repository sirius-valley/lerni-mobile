import React from 'react';
import {Tabs} from 'expo-router';
import {bottomTabs} from './bottomTabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useTheme} from "styled-components";
import TabItem from "../../components/tab/TabItem";


const TabsLayout = () => {
    const insets = useSafeAreaInsets();
    const theme = useTheme()

    return (
        <Tabs screenOptions={{
            headerShown: false, tabBarStyle: {
                backgroundColor: theme.primary800,
                paddingHorizontal: 60,
                height: 80 + insets.bottom,
                display:'flex',
                flexDirection:'row',
                alignItems:'center',
                paddingTop:8,
                paddingBottom:insets.bottom,
            }
        }}>
            {bottomTabs.map(({name, screen, iconName: IconName}, index) => (
                <Tabs.Screen
                    key={index}
                    name={screen}
                    options={{
                        tabBarShowLabel: false,
                        tabBarIcon: ({focused}) => (
                            <TabItem name={name} focused={focused} IconName={IconName} />
                        ),
                    }}
                />
            ))}
        </Tabs>
    );
}

export default TabsLayout;
