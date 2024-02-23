import React from 'react';
import { StyledRow, StyledText } from '../../styled/styles';
import RhombusIcon from '../../../../assets/icons/RhombusIcon';

interface PointsDisplayInterface {
  points: number;
}

const PointsDisplay = ({ points }: PointsDisplayInterface) => {
  return (
    <StyledRow css={{ alignItems: 'center', gap: '4px' }}>
      <RhombusIcon />
      <StyledText color="white" variant="body3">
        {points} {points !== 1 ? 'puntos' : 'punto'}
      </StyledText>
    </StyledRow>
  );
};

export default PointsDisplay;
