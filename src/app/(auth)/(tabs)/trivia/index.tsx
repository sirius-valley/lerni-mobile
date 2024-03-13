import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import ErrorDisplay from '../../../../components/common/ErrorDisplay';

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    router.push('/(auth)/triviaScreen');
  }, []);

  return <ErrorDisplay type="in-progress" />
}
