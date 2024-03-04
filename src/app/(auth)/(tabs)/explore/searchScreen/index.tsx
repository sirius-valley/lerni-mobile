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
import { quickFilters } from '../utils';
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

export interface SearchbarQueryParams {
  page?: string;
  filter?: string;
  search?: string;
}
const SearchScreen = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [quickFilterSelected, setQuickFilterSelected] = useState(quickFilters[0]);
  const [currentPage, setCurrentPage] = useState('1');
  const [loading, setLoading] = useState(false);
  const [params, setParams] = useState<SearchbarQueryParams>({});

  const router = useRouter();

  const { data, refetch, error, isLoading: loadingQuery, isSuccess } = useSearchQuery(params);
  const [resultsToShow, setResultsToShow] = useState<any[]>();

  useEffect(() => {
    if (!params?.page) setResultsToShow(data?.results);
    else
      setResultsToShow((prevResult) => {
        if (data?.results) {
          if (prevResult === undefined) return [...data.results];
          else return [...prevResult, ...data.results] as SearchResult[];
        } else {
          return prevResult;
        }
      });
  }, [data]);

  useEffect(() => {
    if (!searchValue) {
      setParams(() => {
        const newParams = {};

        return newParams;
      });
    } else {
      setParams(() => {
        const newParams = { search: searchValue };
        return newParams;
      });
    }

    const timeout = setTimeout(() => {
      if (!searchValue) {
        setParams(() => {
          const newParams = {};

          return newParams;
        });
      } else {
        setParams(() => {
          const newParams = { search: searchValue };
          return newParams;
        });
      }
      refetch();
    }, 500);
    return () => clearTimeout(timeout);
  }, [searchValue]);

  useEffect(() => {
    setTimeout(() => {
      // setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    setParams((prevParams) => {
      const newParams = { ...prevParams, page: currentPage };
      return newParams;
    });

    refetch();
  }, [currentPage]);

  const handleCancelButton = () => router.back();

  const handleEndReached = () => {
    setCurrentPage((prevPage) => String(Number(prevPage) + 1));
  };

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

      {isLoading ? (
        <SearchScreenSkeleton />
      ) : resultsToShow && resultsToShow?.length > 0 ? (
        <FlatList
          contentContainerStyle={{ gap: 16 }}
          data={resultsToShow}
          onEndReached={handleEndReached}
          ListFooterComponent={() => <StyledBox>{loading && <SearchScreenSkeleton />}</StyledBox>}
          renderItem={(data) => (
            <SearchItem
              key={data.item.id}
              type={data.item.searchType}
              title={data.item.name}
              description={data.item.description}
              status={data?.item.status}
              progress={data?.item.progress}
              imgUrl={data?.item.imgUrl}
            />
          )}
        />
      ) : (
        <ErrorDisplay type="no-results" />
      )}
    </StyledColumn>
  );
};

export default SearchScreen;
