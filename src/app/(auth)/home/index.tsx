import { View, Text } from 'react-native';
import React from 'react';
import PillRow from '../../../components/program/PillRow';
import { useLSelector } from '../../../redux/hooks';
import { useRouter } from 'expo-router';

const Home = () => {
  const router = useRouter();

  const hasCompletedIntroduction = useLSelector((state) => state.auth.hasCompletedIntroduction);
  const handleGoToPill = (id: string) =>
    router.push({ pathname: 'pill/introduction', params: { id } });
  // missing pill logic
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Home</Text>
      <Text>Hola</Text>
    </View>
  );
};

export default Home;
