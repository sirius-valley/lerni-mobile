import { FlatList, Pressable, ScrollView } from "react-native"
import { TriviaHistoryCard } from "../../../../../components/trivia/TriviaHistoryCard"
import { useEffect, useState } from "react";
import { StyledBox } from "../../../../../components/styled/styles";
import { TriviaHistorySkeleton } from "../../../../../components/trivia/TriviaHistoryCard/Skeleton/TriviaHistorySkeleton";
import Spinner from "../../../../../components/common/Spinner";
import { TriviaHistoryMocked } from "./mocked";

export const TriviaHistory = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const handleEndReached = () => { 
        setTimeout(() => {
            setCurrentPage((prevPage) => prevPage + 1);
        }, 2000)
    };

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, [])
  
    return(
    <ScrollView showsVerticalScrollIndicator={false}>
        {isLoading ? (
          <TriviaHistorySkeleton />
        ) : (
          <FlatList
            contentContainerStyle={{ gap: 16 }}
            data={TriviaHistoryMocked}

            onEndReached={handleEndReached}
            ListFooterComponent={() => <StyledBox>{loading && <Spinner/>}</StyledBox>}
            renderItem={(card) => (
              <Pressable onPress={() => alert(`trivia id: ${card.item.triviaId}`)}>
                <TriviaHistoryCard
                  user={card.item.user}
                  opponent={card.item.opponent}
                  date={card.item.date}
                  id={card.item.triviaId}
                />
              </Pressable>
            )}
          />
        )}
      </ScrollView>
      )
}