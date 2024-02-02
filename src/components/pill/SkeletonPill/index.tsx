import React from 'react';
import PillMainContainer from '../PillMainContainer';
import { StyledColumn, StyledRow } from '../../styled/styles';
import Skeleton from '../../common/Skeleton';
import { useTheme } from 'styled-components';

const SkeletonPill = () => {
  const theme = useTheme();
  return (
    <PillMainContainer backgroundColor="primary900">
      <StyledColumn
        css={{
          gap: 16,
          paddingHorizontal: 24,
        }}
      >
        <StyledRow
          css={{
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomStyle: 'solid',
            borderBottomColor: theme.gray500,
            paddingBottom: 8,
          }}
        >
          <StyledRow css={{ gap: 8, alignItems: 'center' }}>
            <Skeleton height={30} width={30} type={'circle'} />
            <Skeleton height={21} width={110} />
          </StyledRow>
          <Skeleton height={16} width={16} />
        </StyledRow>
        <StyledColumn css={{ width: '100%', gap: 16 }}>
          <StyledColumn css={{ gap: 8, width: '100%' }}>
            <Skeleton height={40} width={100} type={'chat'} />
            <Skeleton height={230} width={'80'} type={'chat'} />
            <Skeleton height={40} width={120} type={'chat'} />
            <Skeleton height={28} width={28} type={'circle'} />
          </StyledColumn>
          <StyledColumn css={{ gap: 8, width: '100%', alignItems: 'flex-end' }}>
            <Skeleton height={42} width={200} css={{ borderRadius: 10 }} />
            <Skeleton height={42} width={200} css={{ borderRadius: 10 }} />
            <Skeleton height={42} width={200} css={{ borderRadius: 10 }} />
          </StyledColumn>
          <StyledColumn css={{ gap: 8, width: '100%' }}>
            <Skeleton height={40} width={240} type={'chat'} />
            <Skeleton height={40} width={'85'} type={'chat'} />
            <Skeleton height={28} width={28} type={'circle'} />
          </StyledColumn>
        </StyledColumn>
      </StyledColumn>
    </PillMainContainer>
  );
};

export default SkeletonPill;
