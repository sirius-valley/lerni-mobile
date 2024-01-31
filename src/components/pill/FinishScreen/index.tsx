import { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';
import usePrevious from '../../../hook/usePrevious';
import { PillResponse } from '../../../redux/service/types/pill.response';
import { useGetIntroductionPillQuery } from '../../../redux/service/pills.service';
import { StyledColumn, StyledText } from '../../styled/styles';
import { useTheme } from 'styled-components';

const FinishScreen = () => {
  const pulseAnim = useRef(new Animated.Value(0)).current;
  const { data } = useGetIntroductionPillQuery();
  const prevData = usePrevious<PillResponse | undefined>(data);
  const [animation] = useState<any>(new Animated.Value(0)); // Initial height value
  const theme = useTheme();

  useEffect(
    () => {
      // if(data?.pill.completed && prevData?.pill.completed !== data?.pill.completed){
      setTimeout(() => {
        toggleHeight();
      }, 2500);
      // }
    },
    [
      // data,prevData
    ],
  );

  const toggleHeight = () => {
    const newHeight = 1; // Toggle between two heights
    Animated.timing(animation, {
      toValue: newHeight,
      duration: 500, // Animation duration in milliseconds
      useNativeDriver: false, // Add this line to prevent 'useNativeDriver' warning
    }).start();
  };

  return (
    <StyledColumn
      css={{
        width: '100%',
        flexGrow: animation._value,
        borderRadius: 20,
        backgroundColor: theme.primary500,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <StyledText variant="h1" css={{ color: theme.gray100 }}>
        Finish
      </StyledText>
    </StyledColumn>
  );
};

export default FinishScreen;
