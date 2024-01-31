import React, { ReactNode } from 'react';
import { StyledBox, StyledColumn } from '../../../styled/styles';
import { styled } from 'styled-components';

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

export const StyledSkeletonContainer = styled(StyledColumn)`
  padding: 16px;
  border-radius: 12px;
  width: 100%;
  background-color: white;
  border: 1px solid ${(props: any) => props.theme.grayColorLight100};
`;
