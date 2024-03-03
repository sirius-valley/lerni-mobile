import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { StyledBox, StyledColumn, StyledRow } from '../../../../../../components/styled/styles';
import BackArrow from '../../../../../../../assets/icons/BackArrow';
import { Pressable } from 'react-native';
import { useTheme } from 'styled-components';
import Skeleton from '../../../../../../components/common/Skeleton';

const ProgramSkeleton = () => {
  const router = useRouter();
  const theme = useTheme();

  return (
    <StyledColumn css={{ justifyContent: 'flex-start', height: '100%', paddingBottom: '64px' }}>
      <StyledBox css={{ position: 'relative', width: '100%' }}>
        <StyledRow css={{ position: 'absolute', top: 16, left: 8, zIndex: 2 }}>
          <Pressable onPress={() => router.back()} style={{ padding: 10 }}>
            <BackArrow />
          </Pressable>
        </StyledRow>

        <Skeleton width={'100%'} height={190} css={{ borderRadius: 0 }} />
      </StyledBox>

      <StyledColumn
        css={{ width: '100%', alignItems: 'center', gap: '8px', paddingHorizontal: 24 }}
      >
        <StyledColumn css={{ marginTop: 40, width: '100%', gap: 8 }}>
          <Skeleton height={46} width={'100%'} css={{ borderRadius: 8 }} />
          <StyledRow css={{ gap: 6 }}>
            <Skeleton type={'circle'} height={20} width={20} css={{ borderRadius: 8 }} />
            <Skeleton width={120} height={16} css={{ borderRadius: 8 }} />
          </StyledRow>
        </StyledColumn>

        <StyledColumn
          css={{ gap: '16px', marginTop: '16px', justifyContent: 'flex-start', width: '100%' }}
        >
          <StyledRow css={{ width: '100%', gap: 32 }}>
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
          <Skeleton width={'100'} height={76} css={{ borderRadius: 8 }} />
        </StyledColumn>

        <StyledColumn css={{ gap: '8px', width: '100%', marginTop: '16px' }}>
          <Skeleton width={67} height={21} css={{ borderRadius: 8 }} />
          <Skeleton width={'100'} height={48} css={{ borderRadius: 23 }} />
          <Skeleton width={'100'} height={48} css={{ borderRadius: 23 }} />
          <Skeleton width={'100'} height={48} css={{ borderRadius: 23 }} />
          <Skeleton width={'100'} height={48} css={{ borderRadius: 23 }} />
        </StyledColumn>

        <StyledColumn css={{ width: '100%', marginVertical: '16px', gap: 8 }}>
          <StyledRow css={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Skeleton width={102} height={21} css={{ borderRadius: 8 }} />
            <Skeleton width={45} height={21} css={{ borderRadius: 8 }} />
          </StyledRow>
          <Skeleton width={'100'} height={48} css={{ borderRadius: 8 }} />
          <Skeleton width={'100'} height={48} css={{ borderRadius: 8 }} />
          <Skeleton width={'100'} height={48} css={{ borderRadius: 8 }} />
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
