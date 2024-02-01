import React, { useEffect, useState } from 'react';
import { StyledColumn, StyledRow, StyledText } from '../../../../../components/styled/styles';
import SearchBar from '../../../../../components/common/SearchBar';
import { Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import QuickFilter from '../../../../../components/search/QuickFilter';
import { mockedSearchResults, quickFilters } from '../utils';
import SearchItem from '../../../../../components/search/SearchItem';
import SearchScreenSkeleton from '../../../../../components/search/SearchScreenSkeleton';
import ErrorDisplay from '../../../../../components/common/ErrorDisplay';

const SearchScreen = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [quickFilterSelected, setQuickFilterSelected] = useState(quickFilters[0]);

  const router = useRouter();

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
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleCancelButton = () => router.back();

  const filteredValues = mockedSearchResults
    .filter((result) => result.title.toLowerCase().includes(filterValue))
    .filter((result) => {
      if (!quickFilterSelected.type) return true;
      return result.type === quickFilterSelected.type;
    });

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
        {isLoading ? (
          <SearchScreenSkeleton />
        ) : (
          <StyledColumn
            css={{
              gap: '16px',
            }}
          >
            {filteredValues.map((result) => (
              <SearchItem
                key={result.id}
                type={result.type}
                title={result.title}
                description={result.description}
                status={result?.status}
                progress={result?.progress}
                imgUrl={result?.imgUrl}
              />
            ))}
          </StyledColumn>
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
