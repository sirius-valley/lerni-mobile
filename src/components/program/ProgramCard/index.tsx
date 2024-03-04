import React from 'react';
import { useTheme } from 'styled-components/native';
import { StyledBox, StyledColumn, StyledText } from '../../styled/styles';
import * as Progress from 'react-native-progress';
import { Status } from '../../../app/(auth)/(tabs)/explore/utils';
import ProgramImage from '../ProgramImage';
import { Dimensions, Pressable } from 'react-native';

interface ProgramCardProps {
  id: string;
  title?: string;
  imgUrl: string;
  imgSize?: number;
  status: Status;
  transparentOnLocked?: boolean;
  progress?: number;
  statusIconSize?: number;
  onPress?: () => void;
}

const ProgramCard = ({
  id,
  title,
  imgUrl,
  imgSize = 109,
  status,
  transparentOnLocked = true,
  progress,
  statusIconSize,
  onPress,
}: ProgramCardProps) => {
  const theme = useTheme();
  const handleOnPress = () => onPress && onPress();

  const screenWidth = Dimensions.get('screen').width;
  const baseSize = 109;
  const scaleFactor = screenWidth / 400;
  const adjustedSize = baseSize * scaleFactor;

  return (
    <Pressable key={id} onPress={handleOnPress}>
      <StyledColumn
        css={{
          width: adjustedSize,
          minHeight: adjustedSize + (title ? 36 : 0),
          gap: title ? 6 : 3,
          alignItems: 'center',
        }}
      >
        <ProgramImage
          status={status}
          imgUrl={imgUrl}
          size={adjustedSize}
          transparentOnLocked={transparentOnLocked}
          iconSize={statusIconSize}
        />

        {title && (
          <StyledText
            variant="body1"
            css={{
              color: theme.gray100,
              opacity: status === 'locked' ? 0.3 : 1,
              textAlign: 'center',
            }}
            ellipsizeMode="tail"
            numberOfLines={2}
          >
            {title}
          </StyledText>
        )}

        {status === 'in_progress' && (
          <StyledBox css={{ width: '100%', gap: 10 }}>
            <Progress.Bar
              unfilledColor={theme.gray600}
              color={theme.primary400}
              height={title ? 6 : 4.5}
              progress={progress}
              borderWidth={0}
              width={null}
              borderRadius={20}
            />
          </StyledBox>
        )}
      </StyledColumn>
    </Pressable>
  );
};

export default ProgramCard;
