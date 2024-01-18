import { Image } from 'react-native';
import React from 'react';
import { StyledBox } from '../../styled/styles';
import CheckIcon from '../../../../assets/icons/CheckIcon';

export type ProgramStatus = 'in_progress' | 'completed' | 'not_started';

interface ProgramImage {
  imgUrl: string;
  size?: number;
  status: ProgramStatus;
}

const ProgramImage = ({ imgUrl, size = 109, status }: ProgramImage) => {
  return (
    <StyledBox>
      <Image style={{ width: size, height: size, borderRadius: 6 }} source={{ uri: imgUrl }} />
      {status === 'completed' && (
        <StyledBox css={{ position: 'absolute', bottom: 2, right: 2 }}>
          <CheckIcon />
        </StyledBox>
      )}
    </StyledBox>
  );
};

export default ProgramImage;
