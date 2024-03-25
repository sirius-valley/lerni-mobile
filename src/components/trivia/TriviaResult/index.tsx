import { View, Text } from 'react-native';
import React from 'react';
import TriviaTriangleBackground from '../TriviaTriangleBackground';
import { TriviaResultContainer } from './styles';
import { StyledText } from '../../styled/styles';
import { TriviaResultFailedIcon } from '../../../../assets/icons/TriviaResultFailedIcon';
import { TriviaResultFinishedIcon } from '../../../../assets/icons/TriviaResultFinishedIcon';
import { TriviaResultSuccessIcon } from '../../../../assets/icons/TriviaResultSuccessIcon';
import { BlurView } from 'expo-blur';
import Button from '../../styled/Button';
import { useRouter } from 'expo-router';

type TriviaResultType = 'completed' | 'success' | 'failed';

interface TriviaResultProps {
  type: TriviaResultType;
  onPress: () => void;
}

interface AvailableScreensInterface
  extends Record<
    TriviaResultType,
    {
      title: string;
      Icon: React.FunctionComponent;
    }
  > {}

const availableScreens: AvailableScreensInterface = {
  completed: {
    title: '¡Felicitaciones!',
    Icon: TriviaResultFinishedIcon,
  },
  success: {
    title: '¡Triunfo Total!',
    Icon: TriviaResultSuccessIcon,
  },
  failed: {
    title: 'La próxima vez será mejor',
    Icon: TriviaResultFailedIcon,
  },
};

const TriviaResult = ({ type, onPress }: TriviaResultProps) => {
  const { title, Icon } = availableScreens[type];

  return (
    <TriviaTriangleBackground>
      <TriviaResultContainer>
        <BlurView
          intensity={10}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 24,
            paddingHorizontal: 24,
            borderRadius: 20,
          }}
        >
          <StyledText variant="h1" color="white">
            {title}
          </StyledText>
          <Icon />
          <Button variant="primary" onPress={onPress} css={{ width: '100%' }}>
            Finalizar
          </Button>
        </BlurView>
      </TriviaResultContainer>
    </TriviaTriangleBackground>
  );
};

export default TriviaResult;
