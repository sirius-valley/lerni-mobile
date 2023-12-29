import { View, Text } from 'react-native';
import React from 'react';
import { useGetPokemonQuery } from '../../redux/service/pokemon.service';

const Home = () => {
  console.log('hola');

  const pokemon = useGetPokemonQuery('');
  console.log('hola', pokemon);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Home</Text>
      <Text>Hola</Text>
    </View>
  );
};

export default Home;
