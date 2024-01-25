import Skeleton from '../../common/Skeleton';
import { StyledColumn } from '../../styled/styles';

interface ProgramCardSkeletonProps {
  hasProgress?: boolean;
}

const ProgramCardSkeleton = ({ hasProgress = false }: ProgramCardSkeletonProps) => {
  return (
    <StyledColumn css={{ gap: 6 }}>
      <Skeleton width={109} height={109} />
      <Skeleton width={109} height={19} />
      {hasProgress && <Skeleton width={109} height={5} />}
    </StyledColumn>
  );
};

export default ProgramCardSkeleton;
