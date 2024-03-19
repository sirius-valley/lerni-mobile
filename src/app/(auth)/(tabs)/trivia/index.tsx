import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { StyledColumn, StyledRow } from '../../../../components/styled/styles';
import Button from '../../../../components/styled/Button';
import React from 'react';
import { TriviaHistoryCard } from '../../../../components/trivia/TriviaHistoryCard';
import { Pressable } from 'react-native';
export default function Page() {
  const router = useRouter();

  const user = {
    firstName: 'Juan',
    lastName: 'Schcolnik',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Foto_Perfil_.jpg',
    score: 8,
  };

  const opponent = {
    firstName: 'Oli',
    lastName: 'Sanguinetti',
    image:
      'https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg',
    score: 7,
  };
  const triviahistory = [
    {
      user: user,
      opponent: opponent,
      triviaId: '1',
      date: new Date(),
    },
    {
      user: {
        firstName: 'Juan',
        lastName: 'Schcolnik',
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Foto_Perfil_.jpg',
        score: 5,
      },
      opponent: opponent,
      triviaId: '2',
      date: new Date(),
    },
    {
      user: {
        firstName: 'Juan',
        lastName: 'Schcolnik',
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Foto_Perfil_.jpg',
        score: 7,
      },
      opponent: opponent,
      triviaId: '3',
      date: new Date(),
    },
  ];

  return (
    <StyledColumn
      css={{
        justifyContent: 'center',
        alignItems: 'center',
        gap: 32,
        width: '100%',
        height: '100%',
      }}
    >
      {triviahistory.map((card, idx) => (
        <Pressable
          onPress={() => alert(`trivia modal ${idx} trivia id: ${card.triviaId}`)}
          key={idx}
        >
          <TriviaHistoryCard
            user={card.user}
            opponent={card.opponent}
            date={card.date}
            id={card.triviaId}
          />
        </Pressable>
      ))}
      <Button onPress={() => router.push('/(auth)/triviaScreen')}>Trivia</Button>
    </StyledColumn>
  );
}
