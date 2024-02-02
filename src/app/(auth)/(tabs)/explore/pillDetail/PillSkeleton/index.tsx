import React from 'react';
import { StyledBox, StyledColumn, StyledRow } from '../../../../../../components/styled/styles';
import Skeleton from '../../../../../../components/common/Skeleton';
import { SkeletonContainer } from '../../../../../../components/common/Skeleton/SkeletonContainer';
import ProgramCardSkeleton from '../../../../../../components/program/ProgramCardSkeleton';
import { useTheme } from 'styled-components';

const PillSkeleton = () => {
  const theme = useTheme();
  return (
    <StyledColumn
      css={{
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 12,
      }}
    >
      <StyledColumn css={{ gap: 16, width: '100%', height: '100%' }}>
        <StyledBox css={{ paddingHorizontal: 7, paddingVertical: 3, height: 33 }}>
          <Skeleton width={24} height={24} />
        </StyledBox>
        <StyledBox
          css={{
            gap: 8,
            alignItems: 'center',
            width: '100%',
            justifyContent: 'center',
          }}
        >
          <Skeleton width={166} height={166} />
          <Skeleton css={{ width: '100%' }} height={23} />
          <Skeleton css={{ width: '100%' }} height={19} />
        </StyledBox>
        <StyledColumn css={{ gap: 24, alignItems: 'center' }}>
          <Skeleton css={{ width: '100%' }} height={178} />
          <Skeleton css={{ width: '100%' }} height={48} />
        </StyledColumn>
        <StyledColumn css={{ gap: 24 }}>
          <StyledColumn css={{ gap: 8 }}>
            <Skeleton type="chat" width={342} height={100} />
            <Skeleton width={32} type="circle" height={32} />
          </StyledColumn>
        </StyledColumn>
      </StyledColumn>
    </StyledColumn>
  );
};

export default PillSkeleton;
