import { Image } from 'react-native';
import React from 'react';
import { StyledBox } from '../../styled/styles';
import CheckIcon from '../../../../assets/icons/CheckIcon';
import { Status } from '../../../app/(auth)/(tabs)/explore/utils';
import LockIcon from '../../../../assets/icons/LockIcon';

interface ProgramImage {
  imgUrl: string;
  size?: number;
  status: Status;
}

const ProgramImage = ({ imgUrl, size = 109, status }: ProgramImage) => {
  return (
    <StyledBox css={{ opacity: status === 'locked' ? 0.3 : 1 }}>
      <Image style={{ width: 109, height: 109, borderRadius: 6 }} source={{ uri: imgUrl }} />
      {status === 'completed' && (
        <StyledBox css={{ position: 'absolute', bottom: 2, right: 2 }}>
          <CheckIcon />
        </StyledBox>
      )}
      {status === 'locked' && (
        <StyledBox css={{ position: 'absolute', bottom: 2, right: 2 }}>
          <LockIcon />
        </StyledBox>
      )}
    </StyledBox>
  );
};

export default ProgramImage;
