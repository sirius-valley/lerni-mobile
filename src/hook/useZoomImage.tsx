import React, { useState } from 'react';
import { Modal, Pressable } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import { IImageInfo } from 'react-native-image-zoom-viewer/src/image-viewer.type';
import { StyledBox, StyledRow } from '../components/styled/styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CancelIcon } from '../../assets/icons/CancelIcon';
import { useTheme } from 'styled-components';
import { ZoomIcon } from '../../assets/icons/ZoomIcon';
import { ThemeColors } from '../utils/theme';

interface ZoomImageProps {
  images: IImageInfo[];
}

const useZoomImage = ({ images }: ZoomImageProps) => {
  const [openImage, setOpenImage] = useState<number | undefined>(undefined);

  const handleOpenImage = (index: number) => {
    setOpenImage(index);
  };

  const ZoomButtonComponent = () => {
    const theme = useTheme();

    return (
      <Pressable
        onPress={() => handleOpenImage(0)}
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
    );
  };

  const ZoomImageComponent = () => {
    const inset = useSafeAreaInsets();
    const theme = useTheme();
    return (
      <Modal visible={openImage !== undefined} transparent={true} animationType={'fade'}>
        <ImageViewer
          enableSwipeDown
          renderHeader={() => (
            <StyledRow
              css={{
                marginTop: inset.top,
                width: '100%',
                height: 56,
                position: 'absolute',
                justifyContent: 'flex-end',
                alignItems: 'center',
                zIndex: 2,
              }}
            >
              <Pressable onPress={() => setOpenImage(undefined)}>
                <CancelIcon size={42} color={theme.white} />
              </Pressable>
            </StyledRow>
          )}
          renderIndicator={() => <></>}
          onSwipeDown={() => setOpenImage(undefined)}
          index={openImage || 0}
          imageUrls={images}
        />
      </Modal>
    );
  };

  return { ZoomImageComponent, handleOpenImage, ZoomButtonComponent };
};

export default useZoomImage;
