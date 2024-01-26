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
        <StyledBox
          css={{ paddingHorizontal: 7, paddingVertical: 3, height: 33, background: theme.white }}
        >
          <Skeleton width={24} height={24} />
        </StyledBox>
        <StyledBox
          css={{
            background: theme.gray200,
            gap: 8,
            alignItems: 'center',
            width: '100%',
            justifyContent: 'center',
          }}
        >
          <Skeleton width={50} type="ellipse" height={50} />

          <Skeleton width={166} height={166} />
          <Skeleton css={{ width: '100%' }} height={23} />
          <Skeleton css={{ width: '100%' }} height={19} />
        </StyledBox>
        <StyledColumn css={{ gap: 24, alignItems: 'center' }}>
          <Skeleton css={{ width: '100%' }} height={178} />
          <Skeleton css={{ width: '100%' }} height={48} />
          <StyledColumn css={{ gap: 8 }}>
            {/* <StyledSkeleton css={{ width: '100%' }} type="ellipse" height={100} /> */}
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

export default PillSkeleton;
