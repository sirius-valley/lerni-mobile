import { Animated, Easing, StyleProp, ViewStyle } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { StyledColumn } from '../../styled/styles';
import { styled, useTheme } from 'styled-components';

const Skeleton = (props: {
  width?: number;
  height: number;
  css?: Record<string, string | number | boolean>;
}) => {
  const theme = useTheme();
  const pulseAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const sharedAnimationConfig = {
      duration: 1000,
      useNativeDriver: true,
    };
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          ...sharedAnimationConfig,
          toValue: 1,
          easing: Easing.out(Easing.ease),
        }),
        Animated.timing(pulseAnim, {
          ...sharedAnimationConfig,
          toValue: 0,
          easing: Easing.in(Easing.ease),
        }),
      ]),
    ).start();

    return () => {
      // cleanup
      pulseAnim.stopAnimation();
    };
  }, []);

  const opacityAnim = pulseAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.05, 0.15],
  });

  return (
    <Animated.View
      style={[
        { backgroundColor: theme.primary600, borderRadius: 8 },
        { width: props?.width, height: props.height },
        { opacity: opacityAnim },
        props.css,
      ]}
    />
  );
};

export const StyledSkeletonContainer = styled(StyledColumn)`
  padding: 16px;
  border-radius: 12px;
  width: 100%;
  background-color: white;
  border: 1px solid ${(props: any) => props.theme.grayColorLight100};
`;

export default Skeleton;
