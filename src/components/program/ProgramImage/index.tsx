import React from 'react';
import { StyledBox, StyledImage, StyledImageAnimated } from '../../styled/styles';
import CheckIcon from '../../../../assets/icons/CheckIcon';
import { Status } from '../../../app/(auth)/(tabs)/explore/utils';
import LockIcon from '../../../../assets/icons/LockIcon';
import { useTheme } from 'styled-components';

interface ProgramImage {
  imgUrl?: string;
  size?: number;
  status: Status;
  transparentOnLocked?: boolean;
  iconSize?: number;
}

const ProgramImage = ({
  imgUrl,
  size = 109,
  status,
  transparentOnLocked = true,
  iconSize,
}: ProgramImage) => {
  const theme = useTheme();
  return (
    <StyledBox css={{ opacity: transparentOnLocked && status === 'locked' ? 0.3 : 1 }}>
      <StyledImage
        css={{ width: size, height: size, borderRadius: 6 }}
        source={{ uri: imgUrl ?? undefined }}
        defaultSource={{ uri: imgUrl ?? undefined }}
      />
      {status === 'completed' && (
        <StyledBox css={{ position: 'absolute', bottom: 2, right: 2 }}>
          <CheckIcon size={iconSize} />
        </StyledBox>
      )}
      {status === 'locked' && (
        <StyledBox css={{ position: 'absolute', bottom: 2, right: 2 }}>
          <LockIcon color={!transparentOnLocked ? theme.white : undefined} size={iconSize} />
        </StyledBox>
      )}
    </StyledBox>
  );
};

export default ProgramImage;
