import { useRouter } from 'expo-router';
import { StyledColumn } from '../../../../components/styled/styles';
import { LoadingVersus } from '../../../../components/trivia/LoadingVersus';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useEffect } from 'react';
import { Swipeable } from 'react-native-gesture-handler';

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
    // triviaMatchId 0 hardcoded until we have real ids.
    setTimeout(() => {
      router.replace({
        pathname: '/(auth)/startTrivia/loading/battle',
        params: {
          triviaId: 'triviaMatchId 0',
        },
      });
    }, 2800);
    return () => {
      opacity.value = 1;
    };
  }, []);

  return (
    <Swipeable
      onSwipeableOpen={() => {
        // Redefine this function to do nothing to prevent the
        // user to swipe back.
      }}
    >
      <StyledColumn style={{ width: '100%', height: '100%', backgroundColor: 'black' }}>
        <Animated.View style={[{ height: '100%', width: '100%' }, reanimatedStyle]}>
          <LoadingVersus />
        </Animated.View>
      </StyledColumn>
    </Swipeable>
  );
};

export default Page;
