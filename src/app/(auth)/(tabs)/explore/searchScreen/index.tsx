import React, { useEffect, useState } from 'react';
import { StyledColumn, StyledRow, StyledText } from '../../../../../components/styled/styles';
import SearchBar from '../../../../../components/common/SearchBar';
import { Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import QuickFilter from '../../../../../components/search/QuickFilter';
import { mockedSearchResults, quickFilters } from '../utils';
import SearchItem from '../../../../../components/search/SearchItem';
import SearchScreenSkeleton from '../../../../../components/search/SearchScreenSkeleton';

const SearchScreen = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [quickFilterSelected, setQuickFilterSelected] = useState(quickFilters[0]);

  const router = useRouter();

  // DEBOUNCE
  useEffect(() => {
    const timeout = setTimeout(() => {
      setFilterValue(searchValue.toLowerCase());
    }, 1000);
    return () => clearTimeout(timeout);
  }, [searchValue]);

  const handleCancelButton = () => router.back();

  return (
    <StyledColumn
      css={{
        height: '100%',
        padding: '12px',
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
        <ScrollView horizontal scrollIndicatorInsets={{ bottom: -20 }}>
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

      <ScrollView scrollIndicatorInsets={{ right: -30 }}>
        <StyledColumn
          css={{
            gap: '16px',
          }}
        >
          {isLoading ? (
            <SearchScreenSkeleton />
          ) : (
            mockedSearchResults
              .filter((result) => result.title.toLowerCase().includes(filterValue))
              .map((result) => (
                <SearchItem
                  key={result.id}
                  type={result.type}
                  title={result.title}
                  description={result.description}
                  status={result?.status}
                  progress={result?.progress}
                  imgUrl={result?.imgUrl}
                />
              ))
          )}
        </StyledColumn>
      </ScrollView>
    </StyledColumn>
  );
};

export default SearchScreen;
