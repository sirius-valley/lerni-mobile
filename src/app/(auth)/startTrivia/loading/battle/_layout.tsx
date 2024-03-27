import { Stack } from 'expo-router';
import { useTheme } from 'styled-components/native';
import { withModal } from '../../../../../hoc/withModal';

export const Layout = () => {
  const theme = useTheme();
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          flex: 1,
          backgroundColor: theme.primary900,
        },
      }}
    />
  );
};

export default withModal(Layout);
