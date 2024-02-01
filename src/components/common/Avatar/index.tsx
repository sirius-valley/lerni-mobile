import { CSSObject } from 'styled-components';
import { StyledImage } from '../../styled/styles';
import { CSSProperties } from '../../../utils/utils';

interface AvatarProps {
  uri?: string;
  size?: number;
  borderRadius?: number;
  css?: CSSProperties;
}

export const Avatar = ({
  uri = 'https://i.pinimg.com/222x/57/70/f0/5770f01a32c3c53e90ecda61483ccb08.jpg',
  size = 28,
  borderRadius = 50,
  css = {},
}: AvatarProps) => {
  return (
    <StyledImage
      source={{
        uri: uri,
      }}
      css={{ width: size, height: size, borderRadius: borderRadius, ...css }}
    />
  );
};
