import { Stack } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components';

const ProfileLayout = () => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          flex: 1,
          backgroundColor: theme.primary900,
          paddingTop: insets.top,
          paddingHorizontal: 24,
        },
      }}
    />
  );
};

export default ProfileLayout;
