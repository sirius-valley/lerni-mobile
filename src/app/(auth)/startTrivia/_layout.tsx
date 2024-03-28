import { Stack } from 'expo-router';
import { useTheme } from 'styled-components/native';

export default function TriviaLayout() {
  const theme = useTheme();
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          flex: 1,
          backgroundColor: theme.primary700,
        },
      }}
    />
  );
}
