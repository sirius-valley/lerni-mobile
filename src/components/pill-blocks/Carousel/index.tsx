import {StyledCarouselContainer} from "./styles";
import Item from "./Item";
import {View} from "react-native";
import {StyledText} from "../../styled/styles";

type CarouselItem = {
    id: string;
    title: string;
    description: string;
    image: string;
    check: boolean;
}

interface CarouselProps {
    items: CarouselItem[];
    selected: string[];
    onSelect: (id: string) => void;
    multiple?: boolean;

}

const Carousel = ({items, selected, onSelect, multiple}: CarouselProps) => {

    const textToRender = multiple ? selected.length > 0 ? "Enviar imagenes" : "Al menos 1" : selected.length > 0 ? "Enviar imagen" : "Elige 1"

    return (
        <View style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: 12,
            borderWidth:1,
            borderStyle:'solid',
            borderColor: 'red',
        }}>
            <StyledCarouselContainer horizontal contentContainerStyle={{
                paddingHorizontal: 4,
                gap: 24,
                alignItems: 'flex-end'
            }}
            >
                {
                    items.map((item, index) => (
                        <Item key={index} image={item.image} selected={index === 0}/>
                    ))
                }
            </StyledCarouselContainer>
            <View style={{display:'flex',flexDirection:'row', alignItems:'center', gap:8}}>
                <StyledText variant={'body1'}>{textToRender}</StyledText>
                <View style={{
                    width:42,
                    height:42,
                    borderRadius:100,
                    backgroundColor: 'blue'
                }}/>
            </View>
        </View>

    )
}

export default Carousel;
