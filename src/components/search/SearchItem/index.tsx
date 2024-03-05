import React from 'react';
import { StyledColumn, StyledRow, StyledText } from '../../styled/styles';
import * as Progress from 'react-native-progress';
import { useTheme } from 'styled-components';
import ProgramCard from '../../program/ProgramCard';
import { Pressable } from 'react-native';

export type SearchResultType = 'program' | 'pill' | 'professionals';
export type SearchResultStatus = 'in_progress' | 'not_started' | 'completed' | 'locked';

interface SearchItemInterface {
  type: SearchResultType;
  title: string;
  description: string;
  status?: SearchResultStatus;
  progress?: number;
  imgUrl?: string;
}

const SearchItem = ({
  type,
  title,
  description,
  status = 'not_started',
  progress,
  imgUrl,
}: SearchItemInterface) => {
  const theme = useTheme();

  const renderImage = () =>
    type === 'pill' ? (
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
      <ProgramCard
        id="asd"
        imgUrl={imgUrl ?? ''}
        imgSize={92}
        status={status}
        progress={progress}
        transparentOnLocked={false}
        statusIconSize={status === 'completed' ? 15 : 13}
      />
    );

  return (
    <Pressable onPress={() => alert('pressed')}>
      <StyledRow
        css={{
          width: '100%',
          height: '100px',
          gap: '8px',
          padding: '4px',
          alignItems: 'center',
        }}
      >
        {renderImage()}
        <StyledColumn css={{ width: '70%', height: '87px', gap: '4px' }}>
          <StyledText variant="h4" color={'white'}>
            {title}
          </StyledText>
          <StyledText variant="body2" color={'gray200'}>
            {description}
          </StyledText>
        </StyledColumn>
      </StyledRow>
    </Pressable>
  );
};

export default SearchItem;
