import React, { useEffect, useState } from 'react';
import {
  StyledBox,
  StyledColumn,
  StyledRow,
  StyledText,
} from '../../../../../components/styled/styles';
import SearchBar from '../../../../../components/common/SearchBar';
import { FlatList, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import QuickFilter from '../../../../../components/search/QuickFilter';
import { mockedSearchResultsWithPagination, quickFilters } from '../utils';
import SearchItem, {
  SearchResultStatus,
  SearchResultType,
} from '../../../../../components/search/SearchItem';
import SearchScreenSkeleton from '../../../../../components/search/SearchScreenSkeleton';
import { useSearchQuery } from '../../../../../redux/service/home.service';
import ErrorDisplay from '../../../../../components/common/ErrorDisplay';

interface SearchResult {
  id: string;
  type: SearchResultType;
  title: string;
  description: string;
  imgUrl: string;
  status: SearchResultStatus;
  progress?: number;
}

const SearchScreen = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchedValues, setSearchedValues] = useState<SearchResult[]>([]);
  const [quickFilterSelected, setQuickFilterSelected] = useState(quickFilters[0]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  // const { data, refetch, error, isLoading } = useSearchQuery({
  //   page: currentPage,
  //   filter: filterValue,
  //   search: searchValue,
  // });

  // DEBOUNCE
  // For now, it filters by title.
  useEffect(() => {
    const timeout = setTimeout(() => {
      setFilterValue(searchValue.toLowerCase());
    }, 500);
    return () => clearTimeout(timeout);
  }, [searchValue]);

  useEffect(() => {
    setTimeout(() => {
      // setIsLoading(false);
    }, 1000);
  }, []);

  const handleCancelButton = () => router.back();

  const filteredValues = mockedSearchResultsWithPagination[currentPage]
    ? mockedSearchResultsWithPagination[currentPage]?.data
        .filter((result) => result.title.toLowerCase().includes(filterValue))
        .filter((result) => {
          if (!quickFilterSelected.type) return true;
          return result.type === quickFilterSelected.type;
        })
    : [];
  const handleEndReached = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // when the endpoint is finished, change to refetch function, we'll use that and delete useEffect
  useEffect(() => {
    setSearchedValues((prevResult) => {
      if (filteredValues.length === 0) {
        return prevResult;
      }
      return [...prevResult, ...filteredValues] as SearchResult[];
    });
  }, [currentPage]);

  return (
    <StyledColumn
      css={{
        height: '100%',
        padding: '12px 0px',
        gap: '24px',
      }}
    >
      <StyledRow
        css={{
          width: '100%',
          height: '35px',
          gap: '8px',
        }}
      >
        <SearchBar
          value={searchValue}
          placeholder="Cursos, temáticas, profesionales"
          onChangeText={(value) => setSearchValue(value)}
          onCancelPress={() => setSearchValue('')}
        />
        <Pressable
          style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={handleCancelButton}
        >
          <StyledText color="gray500" variant="body2">
            Cancelar
          </StyledText>
        </Pressable>
      </StyledRow>

      <StyledRow
        css={{
          width: '100%',
        }}
      >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <StyledRow css={{ gap: '8px' }}>
            {quickFilters.map((filter) => (
              <QuickFilter
                key={filter.id}
                onPress={() => setQuickFilterSelected(filter)}
                selected={filter.id === quickFilterSelected.id}
              >
                {filter.label}
              </QuickFilter>
            ))}
          </StyledRow>
        </ScrollView>
      </StyledRow>

      <ScrollView showsVerticalScrollIndicator={false}>
        {isLoading ? (
          <SearchScreenSkeleton />
        ) : (
          <FlatList
            contentContainerStyle={{ gap: 16 }}
            data={searchedValues}
            onEndReached={handleEndReached}
            ListFooterComponent={() => <StyledBox>{loading && <SearchScreenSkeleton />}</StyledBox>}
            renderItem={(data) => (
              <SearchItem
                key={data.item.id}
                type={data.item.type}
                title={data.item.title}
                description={data.item.description}
                status={data?.item.status}
                progress={data?.item.progress}
                imgUrl={data?.item.imgUrl}
              />
            )}
          />
        )}
        {filteredValues.length === 0 && (
          <StyledColumn
            css={{
              paddingTop: '30%',
            }}
          >
            <ErrorDisplay type="no-results" />
          </StyledColumn>
        )}
      </ScrollView>
    </StyledColumn>
  );
};

export default SearchScreen;
