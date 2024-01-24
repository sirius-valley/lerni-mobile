import React, { ReactNode } from 'react';
import { StyledBox, StyledColumn } from '../../../styled/styles';

interface SkeletonContainerProps {
  skeletonToRender: ReactNode;
  amount: number;
  rowDirection?: boolean;
  css?: Record<string, string | number | boolean>;
}
export const SkeletonContainer = ({
  skeletonToRender,
  amount,
  css,
  rowDirection = false,
}: SkeletonContainerProps) => {
  return (
    <StyledBox style={{ ...css, flexDirection: rowDirection ? 'row' : 'column' }}>
      {[...Array(amount)].map((_, index) => (
        <StyledColumn key={index}>{skeletonToRender}</StyledColumn>
      ))}
    </StyledBox>
  );
};
