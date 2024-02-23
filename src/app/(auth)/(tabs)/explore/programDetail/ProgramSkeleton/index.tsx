import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { StyledColumn, StyledRow } from '../../../../../../components/styled/styles';
import BackArrow from '../../../../../../../assets/icons/BackArrow';
import { Pressable } from 'react-native';
import { useTheme } from 'styled-components';
import Skeleton from '../../../../../../components/common/Skeleton';

const ProgramSkeleton = () => {
  const router = useRouter();
  const theme = useTheme();

  return (
    <StyledColumn css={{ justifyContent: 'flex-start', height: '100%', paddingBottom: '64px' }}>
      <StyledRow>
        <Pressable onPress={() => router.back()} style={{ padding: 10 }}>
          <BackArrow />
        </Pressable>
      </StyledRow>
      <StyledColumn css={{ width: '100%', alignItems: 'center', gap: '8px' }}>
        <Skeleton width={150} height={150} css={{ borderRadius: 8 }} />
        <Skeleton height={23} width={130} css={{ borderRadius: 8 }} />
        <Skeleton width={120} height={19} css={{ borderRadius: 8 }} />
        <Skeleton width={290} height={7} css={{ borderRadius: 8 }} />

        <StyledRow css={{ justifyContent: 'space-evenly', width: '90%', gap: 32 }}>
          <StyledRow css={{ gap: '4px', alignItems: 'center' }}>
            <Skeleton height={14} width={78} css={{ borderRadius: 8 }} />
          </StyledRow>
          <StyledRow css={{ gap: '4px', alignItems: 'center' }}>
            <Skeleton height={14} width={60} css={{ borderRadius: 8 }} />
          </StyledRow>
          <StyledRow css={{ gap: '4px', alignItems: 'center' }}>
            <Skeleton height={14} width={78} css={{ borderRadius: 8 }} />
          </StyledRow>
        </StyledRow>

        <StyledColumn
          css={{ gap: '8px', marginTop: '16px', justifyContent: 'flex-start', width: '100%' }}
        >
          <Skeleton width={208} height={21} css={{ borderRadius: 8 }} />
          <Skeleton width={342} height={76} css={{ borderRadius: 8 }} />
        </StyledColumn>

        <StyledColumn css={{ gap: '8px', width: '100%', marginTop: '16px' }}>
          <Skeleton width={67} height={21} css={{ borderRadius: 8 }} />
          <Skeleton width={342} height={48} css={{ borderRadius: 23 }} />
          <Skeleton width={342} height={48} css={{ borderRadius: 23 }} />
          <Skeleton width={342} height={48} css={{ borderRadius: 23 }} />
          <Skeleton width={342} height={48} css={{ borderRadius: 23 }} />
        </StyledColumn>

        <StyledColumn css={{ width: '100%', marginVertical: '16px' }}>
          <StyledRow css={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Skeleton width={102} height={21} css={{ borderRadius: 8 }} />
            <Skeleton width={45} height={21} css={{ borderRadius: 8 }} />
          </StyledRow>
          <Skeleton width={342} height={48} css={{ borderRadius: 8 }} />
          <Skeleton width={342} height={48} css={{ borderRadius: 8 }} />
          <Skeleton width={342} height={48} css={{ borderRadius: 8 }} />
        </StyledColumn>

        <StyledColumn
          css={{
            marginTop: '8px',
            marginBottom: '48px',
            gap: '8px',
            alignItems: 'center',
          }}
        >
          <Skeleton width={200} height={46} css={{ borderRadius: 8 }} />
        </StyledColumn>
      </StyledColumn>
    </StyledColumn>
  );
};

export default ProgramSkeleton;
