import { useTheme } from 'styled-components/native';
import Skeleton from '..';
import { StyledBox, StyledColumn, StyledRow, StyledText } from '../../../styled/styles';

export const SkeletonProfile = () => {
  const theme = useTheme();

  return (
    <StyledColumn
      css={{
        width: '100%',
        height: '100%',
      }}
    >
      <StyledColumn css={{ gap: 24 }}>
        <StyledRow css={{ gap: 8 }}>
          <StyledBox>
            <Skeleton width={94} height={94} css={{ borderRadius: 60 }} />
          </StyledBox>
          <StyledColumn css={{ gap: 4, justifyContent: 'center' }}>
            <Skeleton height={21} width={160} css={{ borderRadius: 4 }} />
            <Skeleton height={16} width={160} css={{ borderRadius: 4 }} />
            <Skeleton height={16} width={170} css={{ borderRadius: 4 }} />
            <Skeleton height={17} width={187} css={{ borderRadius: 4 }} />
          </StyledColumn>
        </StyledRow>
        <Skeleton height={115} width={345} css={{ borderRadius: 8 }} />
        <StyledColumn style={{ gap: 8 }}>
          <StyledText variant="h3" style={{ color: theme.gray100 }}>
            {'Logros'}
          </StyledText>
          <StyledRow style={{ gap: 8, marginRight: -24 }}>
            <StyledColumn style={{ alignItems: 'center', gap: 6 }}>
              <Skeleton height={100} width={100} css={{ borderRadius: 60 }} />
              <Skeleton height={16} width={56} css={{ borderRadius: 4 }} />
            </StyledColumn>
            <StyledColumn style={{ alignItems: 'center', gap: 6 }}>
              <Skeleton height={100} width={100} css={{ borderRadius: 60 }} />
              <Skeleton height={16} width={56} css={{ borderRadius: 4 }} />
            </StyledColumn>
            <StyledColumn style={{ alignItems: 'center', gap: 6 }}>
              <Skeleton height={100} width={100} css={{ borderRadius: 60 }} />
              <Skeleton height={16} width={56} css={{ borderRadius: 4 }} />
            </StyledColumn>
            <StyledColumn style={{ alignItems: 'center', gap: 6 }}>
              <Skeleton height={100} width={100} css={{ borderRadius: 60 }} />
              <Skeleton height={16} width={56} css={{ borderRadius: 4 }} />
            </StyledColumn>
          </StyledRow>
        </StyledColumn>
        {/* <Skeleton height={21} width={96} /> */}
      </StyledColumn>
    </StyledColumn>
  );
};
