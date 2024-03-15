import { useRouter } from 'expo-router';
import { StyledColumn } from '../../../components/styled/styles';
import { LoadingVersus } from '../../../components/trivia/LoadingVersus';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useEffect } from 'react';

const Page = () => {
  const router = useRouter();
  const opacity = useSharedValue(1);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      opacity.value = withTiming(0.3, { duration: 250 });
    }, 2750);
    setTimeout(() => {
      router.push({
        pathname: '/(auth)/triviaScreen/battle',
        params: {
          triviaId: 'triviaId01',
        },
      });
    }, 2850);
  }, []);

  return (
    <StyledColumn style={{ width: '100%', height: '100%', backgroundColor: 'black' }}>
      <Animated.View style={[{ height: '100%', width: '100%' }, reanimatedStyle]}>
        <LoadingVersus />
      </Animated.View>
    </StyledColumn>
  );
};

export default Page;
