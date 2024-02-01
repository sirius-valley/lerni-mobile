import { CSSObject } from 'styled-components';
import { StyledImage } from '../../styled/styles';
import { CSSProperties } from '../../../utils/utils';
import { DefaultProfile } from '../../../../assets/DefaultProfile';

interface AvatarProps {
  uri?: string;
  size?: number;
  borderRadius?: number;
  css?: CSSProperties;
}

export const Avatar = ({ uri, size = 28, borderRadius = 50, css = {} }: AvatarProps) => {
  if (!uri) {
    return <DefaultProfile size={size} />;
  }

  return (
    <StyledImage
      source={{
        uri: uri,
      }}
      css={{ width: size, height: size, borderRadius: borderRadius, ...css }}
    />
  );
};
