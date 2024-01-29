import { Animated, Easing } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { useTheme } from 'styled-components';

interface SkeletonProps {
  width?: number;
  height: number;
  type?: 'chatBubble' | 'ellipse' | 'default';
  css?: Record<string, string | number | boolean>;
}

const Skeleton = ({ width, height, type = 'default', css }: SkeletonProps) => {
  const theme = useTheme();
  const pulseAnim = useRef(new Animated.Value(0)).current;
  const borderRadius: Record<
    'chatBubble' | 'ellipse' | 'default',
    {
      borderTopRightRadius?: number;
      borderBottomRightRadius?: number;
      borderTopLeftRadius?: number;
      borderBottomLeftRadius?: number;
      borderRadius?: number;
    }
  > = {
    chatBubble: {
      borderTopRightRadius: 16,
      borderBottomRightRadius: 16,
      borderTopLeftRadius: 16,
      borderBottomLeftRadius: 2,
    },
    ellipse: {
      borderRadius: 50,
    },
    default: {
      borderRadius: 2,
    },
  };

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
        {
          backgroundColor: theme.primary600,
          borderRadius: borderRadius[type].borderRadius,
          borderBottomLeftRadius: borderRadius[type].borderBottomLeftRadius,
          borderBottomRightRadius: borderRadius[type].borderBottomRightRadius,
          borderTopLeftRadius: borderRadius[type].borderTopLeftRadius,
          borderTopRightRadius: borderRadius[type].borderTopRightRadius,
        },
        { width: width, height: height },
        { opacity: opacityAnim },
        css,
      ]}
    />
  );
};

export default Skeleton;
