import React from 'react';
import { StyledColumn, StyledRow, StyledText } from '../../styled/styles';
import * as Progress from 'react-native-progress';
import { useTheme } from 'styled-components';
import { Avatar } from '../../common/Avatar';

interface SearchItemInterface {
  type: 'program' | 'pill';
  title: string;
  description: string;
  status?: 'in_progress' | 'not_started' | 'completed';
  progress?: number;
  imgUrl?: string;
}

const SearchItem = ({
  type,
  title,
  description,
  status,
  progress,
  imgUrl,
}: SearchItemInterface) => {
  const theme = useTheme();

  const renderImage = () =>
    type === 'pill'
      ? (
        <Progress.Circle
          size={92}
          borderWidth={0}
          unfilledColor={theme.gray600}
          color={theme.primary500}
          progress={progress}
          showsText={true}
          formatText={() => 1}
          textStyle={{
            fontSize: 24,
            fontFamily: 'Roboto-Bold',
            color: 'white',
            marginBottom: 6,
          }}
          animated={false}
          thickness={3.6}
        />
      ) : (
        <Avatar uri={imgUrl} size={92} borderRadius={6} />
      )

  return (
    <StyledRow css={{
      width: '100%',
      height: '100px',
      gap: '8px',
      padding: '4px',
    }}>
      {renderImage()}
      <StyledColumn css={{ width: '70%', gap: '4px' }}>
        <StyledText variant='h4' color={'white'}>{title}</StyledText>
        <StyledText variant='body2' color={'gray200'}>{description}</StyledText>
      </StyledColumn>
    </StyledRow>
  )
}

export default SearchItem