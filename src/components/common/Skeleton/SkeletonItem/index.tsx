import { useTheme } from 'styled-components';
import { StyledBox } from '../../../styled/styles';

interface SkeletonItemProps {
  width?: number | string;
  height?: number | string;
  borderRadius?: number | string;
}

const SkeletonItem = ({ width = 18, height = 18, borderRadius = 8 }: SkeletonItemProps) => {
  const theme = useTheme();
  return (
    <StyledBox css={{ width, height, borderRadius, background: theme.primary800 }}></StyledBox>
  );
};

export default SkeletonItem;
