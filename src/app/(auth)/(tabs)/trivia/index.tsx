import { useRouter } from 'expo-router';
import { useEffect } from 'react';

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    router.push('/(auth)/triviaScreen');
  }, []);

  return <></>;
}
