import React from 'react';
import { StyledBox, StyledColumn, StyledRow } from '../../styled/styles';
import Skeleton from '../../common/Skeleton';

const SearchScreenSkeleton = () => {
  return (
    <StyledColumn css={{ gap: 16, width: '100%', height: '10%' }}>
      {[...Array(5)].map((_, index) => (
        <StyledRow
          key={index}
          css={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <Skeleton width={92} height={92} type="rounded" color="primary700" />
          <StyledColumn css={{ gap: '4px', height: '100%', justifyContent: 'center' }}>
            <Skeleton width={240} height={19} type="rounded" color="primary700" />
            <Skeleton width={240} height={48} type="rounded" color="primary700" />
          </StyledColumn>
        </StyledRow>
      ))}
    </StyledColumn>
  );
};

export default SearchScreenSkeleton;
