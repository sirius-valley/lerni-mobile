import { FlatList, Pressable, ScrollView } from 'react-native';
import { TriviaHistoryCard } from '../../../../../components/trivia/TriviaHistoryCard';
import { useEffect, useState } from 'react';
import { StyledBox, StyledText } from '../../../../../components/styled/styles';
import { TriviaHistorySkeleton } from '../../../../../components/trivia/TriviaHistoryCard/Skeleton/TriviaHistorySkeleton';
import Spinner from '../../../../../components/common/Spinner';
import { TriviaHistoryMocked } from './mocked';
import { useTriviaHistoryQuery } from '../../../../../redux/service/trivia.service';
import { TriviaHistoryCardProps } from '../../../../../redux/service/types/trivia.response';
import { TriviaQueryParams } from '../../../../../redux/service/types/trivia.response';

export const TriviaHistory = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [history, setHistory] = useState<TriviaHistoryCardProps[]>();

  const [params, setParams] = useState<TriviaQueryParams>({});
  const {
    data: newCards,
    refetch,
    isLoading: triviaLoading,
    isError,
  } = useTriviaHistoryQuery(params);

  useEffect(() => {
    setParams({ page: `${currentPage}` });
    refetch();
  }, [currentPage]);

  const handleEndReached = () => {
    if (!triviaLoading) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    if (!params?.page) setHistory(newCards);
    else
      setHistory((prevResult) => {
        if (newCards) {
          if (prevResult === undefined) return [...newCards];
          else return [...prevResult, ...newCards] as TriviaHistoryCardProps[];
        } else {
          return prevResult;
        }
      });
  }, [newCards]);

  if (!history || !history.length) {
    return (
      <StyledBox>
        <StyledText variant="body2" color="primary600">
          {'Aún no posees historial de trivias'}
        </StyledText>
      </StyledBox>
    );
  }

  if (triviaLoading) {
    return <TriviaHistorySkeleton />;
  }

  return (
    <StyledBox>
      <FlatList
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 16 }}
        data={history}
        onEndReached={handleEndReached}
        ListFooterComponent={() => (
          <StyledBox>{triviaLoading && <Spinner size="small" />}</StyledBox>
        )}
        renderItem={(card) => (
          <Pressable onPress={() => alert(`trivia id: ${card.item.triviaId}`)}>
            <TriviaHistoryCard
              user={card.item.user}
              opponent={card.item.opponent}
              date={card.item.date}
              triviaId={card.item.triviaId}
            />
          </Pressable>
        )}
      />
    </StyledBox>
  );
};
