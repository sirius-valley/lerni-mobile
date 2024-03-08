import React from 'react';
import { StyledColumn, StyledPressable, StyledRow, StyledText } from '../../styled/styles';
import * as Progress from 'react-native-progress';
import { useTheme } from 'styled-components';
import ProgramCard from '../../program/ProgramCard';
import { Pressable } from 'react-native';
import ProgramImage from '../../program/ProgramImage';

export type SearchResultType = 'program' | 'pill' | 'professionals';
export type SearchResultStatus = 'in_progress' | 'not_started' | 'completed' | 'locked';

interface SearchItemInterface {
  type: SearchResultType;
  title: string;
  description: string;
  status?: SearchResultStatus;
  progress?: number;
  imgUrl?: string;
  id: string;
}

const SearchItem = ({
  id,
  type,
  title,
  description,
  status = 'not_started',
  progress,
  imgUrl,
}: SearchItemInterface) => {
  const theme = useTheme();

  if (type === 'pill') return null;

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
          fontSize: 28,
          fontFamily: 'Roboto-Bold',
          color: 'white',
          marginBottom: 6,
        }}
        animated={false}
        thickness={3.6}
      />
    ) : (
      <ProgramImage imgUrl={imgUrl} size={92} status={'not_started'} />
    );

  return (
    <StyledPressable onPress={() => alert('pressed')} css={{ backgroundColor: 'red' }}>
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
        <StyledColumn css={{ flex: 1, gap: '4px', height: '100%' }}>
          <StyledText variant="h4" color={'white'} css={{ maxHeight: 19 }} numberOfLines={1}>
            {title}
          </StyledText>
          <StyledText numberOfLines={4} variant="body2" color={'gray200'}>
            {description}
          </StyledText>
        </StyledColumn>
      </StyledRow>
    </StyledPressable>
  );
};

export default SearchItem;
