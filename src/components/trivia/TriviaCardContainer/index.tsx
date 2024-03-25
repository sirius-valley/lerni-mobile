import { useRouter } from 'expo-router';
import { FlatList, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { StyledBox, StyledColumn } from '../../styled/styles';
import { TriviaStatus } from './TriviaCard/types';
import { TriviaCard } from './TriviaCard';

export const TriviaCardContainer = () => {
  const mockedCards = [
    {
      programName: 'Test challenged card',
      user: {
        name: 'Juan',
        lastname: 'Schcolnik',
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Foto_Perfil_.jpg',
        id: '1',
      },
      opponent: {
        name: 'Nico',
        lastname: 'Dipi',
        image:
          'https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg',
        id: '2',
      },
      status: TriviaStatus.CHALLENGED,
    },
    {
      programName: 'Test pending card',
      user: {
        name: 'Juan',
        lastname: 'Schcolnik',
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Foto_Perfil_.jpg',
        id: '1',
      },
      status: TriviaStatus.PENDING,
    },
    {
      programName: 'Test waiting card',
      user: {
        name: 'Juan',
        lastname: 'Schcolnik',
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Foto_Perfil_.jpg',
        id: '1',
      },
      opponent: {
        name: 'Nico',
        lastname: 'Dipi',
        image:
          'https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg',
        id: '2',
      },
      status: TriviaStatus.WAITING,
    },
    {
      programName: 'Test incomplete card',
      user: {
        name: 'Juan',
        lastname: 'Schcolnik',
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Foto_Perfil_.jpg',
        id: '1',
      },
      opponent: {
        name: 'Nico',
        lastname: 'Dipi',
        image:
          'https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg',
        id: '2',
      },
      status: TriviaStatus.INCOMPLETE,
    },
  ];
  const router = useRouter();
  const [showTrivias, setShowTrivias] = useState<number[]>();
  const trivias = [1, 2, 3];
  const [currentPage, setCurrentPage] = useState(1);

  const handleEndReached = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    if (!showTrivias) {
      setShowTrivias([trivias[0]]);
    } else {
      setShowTrivias([...showTrivias, trivias[currentPage]]);
    }
  }, [currentPage]);

  return (
    <StyledColumn
      style={{ justifyContent: 'center', alignItems: 'center', gap: 32, maxHeight: 450 }}
    >
      <ScrollView>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 16 }}
          data={mockedCards}
          onEndReached={handleEndReached}
          ListFooterComponent={() => <StyledBox></StyledBox>}
          renderItem={(mockedCard) => (
            <TriviaCard
              programName={mockedCard.item.programName}
              user={mockedCard.item.user}
              opponent={mockedCard.item.opponent}
              status={mockedCard.item.status}
            />
          )}
        />
      </ScrollView>
    </StyledColumn>
  );
};
