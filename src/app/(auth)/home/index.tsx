import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { useLazyAboutMeQuery } from '../../../redux/service/home.service';

const Home = () => {
  const router = useRouter();

  const [refetch, { data: aboutMe }] = useLazyAboutMeQuery();
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
      {/* {aboutMe?.hasCompletedIntroduction && <Pressable onPress={handleGoToPill(id)}><IntroductionPill /></Pressable>} */}
      <Text>Home</Text>
      <Text>Hola</Text>
    </View>
  );
};

export default Home;
