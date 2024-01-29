import Skeleton from '..';
import { StyledBox, StyledColumn, StyledRow } from '../../../styled/styles';

export const SkeletonProfile = () => {
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
            {/* <Skeleton height={17} width={187} css={{ borderRadius: 4 }} /> */}  
          </StyledColumn>
        </StyledRow>
        <Skeleton height={21} width={96} />
      </StyledColumn>
    </StyledColumn>
  );
};
