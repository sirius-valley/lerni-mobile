import { Stack } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components/native';
import { withModal } from '../../../../hoc/withModal';

export const Layout = () => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          flex: 1,
          backgroundColor: theme.primary900,
          paddingTop: insets.top + 60,
          paddingBottom: 80,
          paddingHorizontal: 24,
        },
      }}
    />
  );
};

export default withModal(Layout);
