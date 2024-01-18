import { Stack } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components';

export default function TriviaLayout() {
  const inset = useSafeAreaInsets();
  const theme = useTheme();
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          flex: 1,
          backgroundColor: theme.primary900,
          paddingTop: inset.top,
          paddingHorizontal: 24,
        },
      }}
    />
  );
}
