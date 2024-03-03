import { StyledImage } from '../../styled/styles';
import { CSSProperties } from '../../../utils/utils';
import { DefaultProfile } from '../../../../assets/DefaultProfile';
import { memo } from 'react';

interface AvatarProps {
  uri?: string;
  size?: number;
  borderRadius?: number;
  css?: CSSProperties;
}

const Avatar = ({ uri, size = 28, borderRadius = 50, css = {} }: AvatarProps) => {
  if (!uri) {
    return <DefaultProfile size={size} css={css} />;
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

export default memo(Avatar, (prev, next) => prev.uri === next.uri);
