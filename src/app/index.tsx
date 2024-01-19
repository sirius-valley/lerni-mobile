import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';
import SendIcon from '../../assets/icons/SendIcon';
import Carousel from '../components/pill-blocks/Carousel';
import { useTheme } from 'styled-components/native';
import Item from '../components/pill-blocks/Carousel/Item';
import { ChatBubble } from '../components/styled/ChatBubble';
import useZoomImage from '../hook/useZoomImage';
import { StyledColumn } from '../components/styled/styles';

const Landing = () => {
  const [items, setItems] = useState<
    { id: string; title: string; description: string; image: string; selected?: boolean }[]
  >([
    {
      id: '1',
      title: 'string',
      description: 'string',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTidUHnLgrt4hfhnK168gU28iG72LKtUQ06rzq2IIUoSw&s',
      selected: undefined,
    },
    {
      id: '2',
      title: 'string',
      description: 'string',
      image:
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cb6d69a3-bb86-4d39-b566-cc73bd020ffc/d78prrx-142f0e0d-bd35-4121-a04e-48a7b27858cc.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NiNmQ2OWEzLWJiODYtNGQzOS1iNTY2LWNjNzNiZDAyMGZmY1wvZDc4cHJyeC0xNDJmMGUwZC1iZDM1LTQxMjEtYTA0ZS00OGE3YjI3ODU4Y2MuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.NNwfmhWC6casIen2NT24EkSlo-5zGpQDP4_G7oTL-eU',
      selected: undefined,
    },
    {
      id: '3',
      title: 'string',
      description: 'string',
      image: 'https://rickshawtravels.com/assets/images/demo/600x400/2-min.jpg',
      selected: undefined,
    },
  ]);

  const multiple: boolean = true;
  const [sealed, setSealed] = useState(false);

  const { ZoomImageComponent, handleOpenImage } = useZoomImage({
    images:
      items?.map((item) => ({
        url: item.image,
      })) ?? [],
  });

  const handleSelect = (id: string) => {
    multiple
      ? setItems(
          items.map((item) => {
            if (item.id === id) {
              return {
                ...item,
                selected: item.selected ? false : true,
              };
            } else {
              return item;
            }
          }),
        )
      : setItems(
          items.map((item) => {
            if (item.id === id) {
              return {
                ...item,
                selected: item.selected ? undefined : true,
              };
            } else {
              return {
                ...item,
                selected: false,
              };
            }
          }),
        );
  };

  const handlePress = () => {
    setSealed(true);
  };

  const theme = useTheme();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: sealed ? 'flex-end' : 'center',
        backgroundColor: theme.primary900,
        gap: 6,
      }}
    >
      {!sealed ? (
        <Carousel items={items} onSelect={handleSelect} sealed={sealed} onPress={handlePress} />
      ) : (
        items.map((item, index) => {
          return (
            <StyledColumn
              key={item.id}
              style={{
                alignItems: 'flex-end',
                gap: 12,
                marginRight: 6,
              }}
            >
              {item.selected === true && (
                <Item
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  handleOpenImage={() => handleOpenImage(index)}
                  handleSelect={() => null}
                  id={item.id}
                  disabled
                  sealed
                />
              )}
              <ZoomImageComponent />
            </StyledColumn>
          );
        })
      )}
      <Text>Landing</Text>
      <Link asChild href={'/(tabs)/profile'}>
        <Button title="Home" />
      </Link>
      <Link asChild href={'/(app)/register'}>
        <Button title="Register" />
      </Link>
      <Link asChild href={'/(app)/login'}>
        <Button title="Login" />
      </Link>
    </View>
  );
};

export default Landing;
