import { View, Text } from 'react-native';
import React from 'react';
import { StyledBox, StyledColumn, StyledRow } from '../../styled/styles';
import Skeleton from '../../common/Skeleton';

const SearchScreenSkeleton = () => {
  return (
    <StyledColumn
      css={{
        gap: 16,
      }}
    >
      <StyledColumn css={{ gap: 16, width: '100%', height: '100%' }}>
        <StyledRow
          css={{
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <StyledBox css={{ padding: 6 }}>
            <Skeleton width={90} height={28} />
          </StyledBox>
          <StyledBox css={{ padding: 6, gap: 3 }}>
            <Skeleton width={24} height={24} />
          </StyledBox>
        </StyledRow>
      </StyledColumn>
    </StyledColumn>
  );
};

export default SearchScreenSkeleton;
