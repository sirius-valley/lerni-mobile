import { Pressable } from "react-native"
import { StyledBox, StyledColumn } from "../../styled/styles"
import { ZoomIcon } from "../../../../assets/icons/ZoomIcon"
import { StyledImageBubble } from "../ChatBubble/styles"
import { MessageProps } from "../../../utils/constants"
import { useTheme } from "styled-components/native"

export const ImageBubble = ({user, type, content, isLast, handleOpenImage, ZoomImageComponent }: MessageProps) => {
  const theme = useTheme();

  return (
    <StyledColumn>
      <Pressable
        onPress={handleOpenImage}
        style={{
          position: 'absolute',
          top: 8,
          right: 8,
          zIndex: 2,
        }}
      >         
        <StyledBox
          css={{
            width: 42,
            height: 42,
            borderRadius: 12,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
        >
          <ZoomIcon size={24} color={theme.white} />
        </StyledBox>
      </Pressable>
      <StyledImageBubble
        user={user}
        source={{
          uri: content,
        }}
        style={{
          height: 200,
          width: 300,
        }}
        handleOpenImage={handleOpenImage}
      />
      {ZoomImageComponent && (<ZoomImageComponent />)}
    </StyledColumn>
  );
}