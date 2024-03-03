import React from 'react';
import { StyledBox, StyledColumn, StyledRow, StyledText } from '../../styled/styles';
import Skeleton from '../../common/Skeleton';
import { SkeletonContainer } from '../../common/Skeleton/SkeletonContainer';
import ProgramCardSkeleton from '../../program/ProgramCardSkeleton';
import { useTheme } from 'styled-components';

const SkeletonHome = () => {
  const theme = useTheme();
  return (
    <StyledColumn
      css={{
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <StyledColumn css={{ gap: 24, width: '100%', height: '100%', paddingTop: 20 }}>
        <StyledRow
          css={{
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <StyledText variant="h1" css={{ color: theme.gray100 }}>
            Explorar
          </StyledText>
          <StyledBox>
            <Skeleton width={24} height={24} />
          </StyledBox>
        </StyledRow>

        <StyledColumn css={{ gap: 24 }}>
          <StyledColumn css={{ gap: 8 }}>
            <StyledText variant="h3" css={{ color: theme.gray100 }}>
              Por empezar
            </StyledText>
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
