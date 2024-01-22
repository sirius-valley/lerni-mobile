import SkeletonItem from '../../../../components/common/Skeleton/SkeletonItem';
import { StyledBox, StyledColumn, StyledRow } from '../../../../components/styled/styles';

const Skeleton = () => {
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
            <SkeletonItem width={90} height={28} borderRadius={8} />
          </StyledBox>
          <StyledBox css={{ padding: 6, gap: 3 }}>
            <SkeletonItem width={24} height={24} borderRadius={8} />
          </StyledBox>
        </StyledRow>
        <StyledBox css={{ alignItems: 'center', width: '100%', justifyContent: 'center' }}>
          <SkeletonItem width="100%" height={50} borderRadius={8} />
        </StyledBox>
        <StyledColumn css={{ gap: 24 }}>
          <StyledColumn css={{ gap: 8 }}>
            <SkeletonItem width={71} height={21} />
            <StyledRow css={{ justifyContent: 'space-between' }}>
              <StyledColumn css={{ gap: 6, alignItems: 'center' }}>
                <SkeletonItem width={109} height={109} />

                <SkeletonItem width={109} height={19} />
                <SkeletonItem width="100%" height={5} />
              </StyledColumn>
              <StyledColumn css={{ gap: 6, alignItems: 'center' }}>
                <SkeletonItem width={109} height={109} />

                <SkeletonItem width={109} height={19} />
                <SkeletonItem width="100%" height={5} />
              </StyledColumn>
              <StyledColumn css={{ gap: 6, alignItems: 'center' }}>
                <SkeletonItem width={109} height={109} />

                <SkeletonItem width={109} height={19} />
                <SkeletonItem width="100%" height={5} />
              </StyledColumn>
            </StyledRow>
          </StyledColumn>
          <StyledColumn css={{ gap: 8 }}>
            <StyledRow css={{ justifyContent: 'space-between', width: '100%' }}>
              <StyledBox css={{ gap: 6, alignItems: 'center' }}>
                <SkeletonItem width={103} height={21} />
              </StyledBox>
              <StyledBox css={{ gap: 6, alignItems: 'center' }}>
                <SkeletonItem width={45} height={14} />
              </StyledBox>
            </StyledRow>
            <StyledRow css={{ justifyContent: 'space-between' }}>
              <StyledColumn css={{ gap: 6, alignItems: 'center' }}>
                <SkeletonItem width={109} height={109} />

                <SkeletonItem width={109} height={19} />
              </StyledColumn>
              <StyledColumn css={{ gap: 6, alignItems: 'center' }}>
                <SkeletonItem width={109} height={109} />

                <SkeletonItem width={109} height={19} />
              </StyledColumn>
              <StyledColumn css={{ gap: 6, alignItems: 'center' }}>
                <SkeletonItem width={109} height={109} />

                <SkeletonItem width={109} height={19} />
              </StyledColumn>
            </StyledRow>
          </StyledColumn>

          <StyledColumn css={{ gap: 8 }}>
            <StyledRow css={{ justifyContent: 'space-between', width: '100%' }}>
              <StyledBox css={{ gap: 6, alignItems: 'center' }}>
                <SkeletonItem width={93} height={21} />
              </StyledBox>
              <StyledBox css={{ gap: 6, alignItems: 'center' }}>
                <SkeletonItem width={45} height={14} />
              </StyledBox>
            </StyledRow>
            <StyledRow css={{ justifyContent: 'space-between' }}>
              <StyledColumn css={{ gap: 6, alignItems: 'center' }}>
                <SkeletonItem width={109} height={109} />

                <SkeletonItem width={109} height={19} />
              </StyledColumn>
              <StyledColumn css={{ gap: 6, alignItems: 'center' }}>
                <SkeletonItem width={109} height={109} />

                <SkeletonItem width={109} height={19} />
              </StyledColumn>
              <StyledColumn css={{ gap: 6, alignItems: 'center' }}>
                <SkeletonItem width={109} height={109} />

                <SkeletonItem width={109} height={19} />
              </StyledColumn>
            </StyledRow>
          </StyledColumn>
        </StyledColumn>
      </StyledColumn>
    </StyledColumn>
  );
};

export default Skeleton;
