import React, {useState} from "react";
import {Modal, Pressable} from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";
import {IImageInfo} from "react-native-image-zoom-viewer/src/image-viewer.type";
import {StyledRow} from "../components/styled/styles";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {CancelIcon} from "../../assets/icons/CancelIcon";
import {useTheme} from "styled-components";

interface ZoomImageProps {
    images: IImageInfo[]
}

const useZoomImage = ({images}: ZoomImageProps) => {
    const [openImage, setOpenImage] = useState<number | undefined>(undefined)

    const handleOpenImage = (index: number) => {
        setOpenImage(index)
    }

    const ZoomImageComponent = () => {
        const inset = useSafeAreaInsets()
        const theme = useTheme()
        return (
            <Modal visible={openImage !== undefined} transparent={true} animationType={'fade'}>
                <ImageViewer
                    enableSwipeDown
                    renderHeader={() => <StyledRow css={{
                        marginTop: inset.top,
                        width: '100%',
                        height: 56,
                        position: 'absolute',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        zIndex: 2
                    }}>
                        <Pressable onPress={() => setOpenImage(undefined)}>
                            <CancelIcon size={42} color={theme.white}/>
                        </Pressable>
                    </StyledRow>}
                    renderIndicator={() => <></>}
                    onSwipeDown={() => setOpenImage(undefined)}
                    index={openImage || 0}
                    imageUrls={images}/>
            </Modal>
        )
    }

    return {ZoomImageComponent, handleOpenImage}
}

export default useZoomImage;
