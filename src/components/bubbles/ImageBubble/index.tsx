import { StyledColumn } from '../../styled/styles';
import { StyledImageBubble } from '../ChatBubble/styles';
import { UserTypes } from '../../../utils/constants';
import useZoomImage from '../../../hooks/useZoomImage';
import { memo } from 'react';

interface ImageBubbleProps {
  user: UserTypes;
  url: string;
}

const ImageBubble = ({ user, url }: ImageBubbleProps) => {
  const { ZoomImageComponent, ZoomButtonComponent } = useZoomImage({
    images: [{ url: url }],
  });

  return (
    <StyledColumn>
      <ZoomButtonComponent />
      <StyledImageBubble
        user={user}
        source={{
          uri: url,
        }}
        style={{
          height: 200,
          width: 300,
        }}
        loadingIndicatorSource={require('../../../../assets/backgroundProgramImage.png')}
      />
      <ZoomImageComponent />
    </StyledColumn>
  );
};

export default memo(ImageBubble, (prev, next) => prev.url === next.url);
