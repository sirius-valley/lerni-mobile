import React from 'react';
import { useTheme } from 'styled-components/native';
import { StyledBox, StyledColumn, StyledText } from '../../styled/styles';
import { Image } from 'react-native';
import * as Progress from 'react-native-progress';
import CheckIcon from '../../../../assets/icons/CheckIcon';

interface ProgramCardProps {
  id: string;
  title: string;
  imgUrl: string;
  status: 'in_progress' | 'completed' | 'not_started';
  progress?: number;
}

const ProgramCard = ({ id, title, imgUrl, status, progress }: ProgramCardProps) => {
  const theme = useTheme();
  return (
    <StyledColumn
      key={id}
      css={{
        width: 109,
        height: 145,
        gap: 6,
        alignItems: 'center',
      }}
    >
      <StyledBox>
        <Image style={{ width: 109, height: 109 }} source={{ uri: imgUrl }} />
        {status === 'completed' && (
          <StyledBox css={{ position: 'absolute', bottom: 2, right: 2 }}>
            <CheckIcon />
          </StyledBox>
        )}
      </StyledBox>

      <StyledText variant="body1" css={{ color: theme.gray100 }}>
        {title}
      </StyledText>

      {status === 'in_progress' && (
        <StyledBox css={{ width: '100%', gap: 10 }}>
          <Progress.Bar
            unfilledColor={theme.gray600}
            color={theme.primary400}
            height={6}
            progress={progress}
            borderWidth={0}
            width={null}
            borderRadius={20}
          />
        </StyledBox>
      )}
    </StyledColumn>
  );
};

export default ProgramCard;
