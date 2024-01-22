import React from 'react';
import { StyledBox, StyledColumn, StyledRow } from '../../styled/styles';
import Skeleton from '../../common/Skeleton';
import { SkeletonContainer } from '../../common/Skeleton/SkeletonContainer';
import ProgramCardSkeleton from '../../program/ProgramCardSkeleton';

const SkeletonHome = () => {
  return (
    <StyledColumn
      css={{
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
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
        <StyledBox css={{ alignItems: 'center', width: '100%', justifyContent: 'center' }}>
          <Skeleton width={342} height={50} />
        </StyledBox>
        <StyledColumn css={{ gap: 24 }}>
          <StyledColumn css={{ gap: 8 }}>
            <Skeleton width={71} height={21} />
            <StyledRow css={{ justifyContent: 'space-between' }}>
              <SkeletonContainer
                rowDirection
                css={{
                  justifyContent: 'space-between',
                  width: '100%',
                }}
                amount={3}
                skeletonToRender={<ProgramCardSkeleton hasProgress />}
              />
            </StyledRow>
          </StyledColumn>
        </StyledColumn>
        <StyledColumn css={{ gap: 24 }}>
          <StyledColumn css={{ gap: 8 }}>
            <Skeleton width={71} height={21} />
            <StyledRow css={{ justifyContent: 'space-between' }}>
              <SkeletonContainer
                rowDirection
                css={{
                  justifyContent: 'space-between',
                  width: '100%',
                }}
                amount={3}
                skeletonToRender={<ProgramCardSkeleton hasProgress />}
              />
            </StyledRow>
          </StyledColumn>
        </StyledColumn>
        <StyledColumn css={{ gap: 24 }}>
          <StyledColumn css={{ gap: 8 }}>
            <Skeleton width={71} height={21} />
            <StyledRow css={{ justifyContent: 'space-between' }}>
              <SkeletonContainer
                rowDirection
                css={{
                  justifyContent: 'space-between',
                  width: '100%',
                }}
                amount={3}
                skeletonToRender={<ProgramCardSkeleton hasProgress />}
              />
            </StyledRow>
          </StyledColumn>
        </StyledColumn>
      </StyledColumn>
    </StyledColumn>
  );
};

export default SkeletonHome;
