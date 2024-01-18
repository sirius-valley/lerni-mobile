import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';
import SendIcon from '../../assets/icons/SendIcon';
import Carousel from '../components/pill-blocks/Carousel';

const Landing = () => {
  const [items, setItems] = useState<{id: string, title: string, description: string, image: string, selected?: boolean}[]>([
    {
      id: '1',
      title: 'string',
      description: 'string',
      image:
        'https://media.discordapp.net/attachments/411201278031560708/1030913090562293770/unknown.png?ex=65ac13a2&is=65999ea2&hm=617e464574737290490c4b5e764bb628db6ea8b1b558579788aab1e6ab46cf9d&=&format=webp&quality=lossless&width=2022&height=224',
      selected: undefined,
    },
    {
      id: '2',
      title: 'string',
      description: 'string',
      image:
        'https://media.discordapp.net/attachments/411201278031560708/844324029062184960/unknown.png?ex=65a6f387&is=65947e87&hm=f8b74ccec519a84a990187a3cee0d7417bce7ed796053a6d6340c91318b807ae&=&format=webp&quality=lossless&width=2022&height=1138',
      selected: undefined,
    },
    {
      id: '3',
      title: 'string',
      description: 'string',
      image:
        'https://media.discordapp.net/attachments/411201278031560708/1124484301401116773/peron20color.png?ex=65ab081d&is=6598931d&hm=45ea867c31cb08b5d6bf413e764261bb88c6d4e34d7f1063924fd34391c8d50d&=&format=webp&quality=lossless&width=904&height=922',
      selected: undefined,
    },
  ])

  const multiple: boolean = true;
  const [sealed, setSealed] = useState(false)

  const handleSelect = (id: string) => {
    multiple ? 
    setItems(
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
    :
    setItems(
      items.map(item => {
        if (item.id === id) {
          return ({
            ...item,
            selected: item.selected ? undefined : true
          })
        } else {
          return ({
            ...item,
            selected: false
          })
        }
      })
    )
  };

  const handlePress = () => {
    setSealed(true)
  }
  

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
      }}
    >
      <Carousel
        items={items}
        onSelect={handleSelect}
        sealed={sealed}
        onPress={handlePress}
      />
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
