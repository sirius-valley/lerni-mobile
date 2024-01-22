import { Pressable } from 'react-native';
import { StyledBox, StyledColumn } from '../../styled/styles';
import { ZoomIcon } from '../../../../assets/icons/ZoomIcon';
import { StyledImageBubble } from '../ChatBubble/styles';
import { MessageProps } from '../../../utils/constants';
import { useTheme } from 'styled-components/native';
import useZoomImage from '../../../hook/useZoomImage';

export const ImageBubble = ({ user, type, content, isLast }: MessageProps) => {
  const theme = useTheme();
  const { handleOpenImage, ZoomImageComponent, ZoomButtonComponent } = useZoomImage({
    images: [{ url: content }],
  });

  return (
    <StyledColumn>
      <ZoomButtonComponent />
      <StyledImageBubble
        user={user}
        source={{
          uri: content,
        }}
        style={{
          height: 200,
          width: 300,
        }}
      />
      <ZoomImageComponent />
    </StyledColumn>
  );
};
