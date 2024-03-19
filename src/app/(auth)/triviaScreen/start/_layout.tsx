import { Stack } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components/native';

export default function TriviaLayout() {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          flex: 1,
          backgroundColor: theme.primary700,
          paddingTop: insets.top + 60,
          paddingBottom: insets.bottom + 120,
          paddingHorizontal: 24,
        },
      }}
    />
  );
}
