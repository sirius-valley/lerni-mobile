import React, { useEffect, useState } from 'react';
import { StyledColumn, StyledRow } from '../../styled/styles';
import SearchIcon from '../../../../assets/icons/SearchIcon';
import { TextInput } from '../../styled/TextInput';
import MultiplyIcon from '../../../../assets/icons/MultiplyIcon';
import { useTheme } from 'styled-components';
import { CancelIcon } from '../../../../assets/icons/CancelIcon';
import { StyledSearchBarBox } from './styles';
import { Pressable } from 'react-native';

interface SearchBarInterface {
  value: string;
  placeholder?: string;
  onChangeText: (value: string) => void;
  onCancelPress: () => void;
}

const SearchBar = ({
  value,
  placeholder = '',
  onChangeText,
  onCancelPress,
}: SearchBarInterface) => {
  const theme = useTheme();

  return (
    <StyledSearchBarBox>
      <StyledColumn
        css={{
          height: '100%',
          justifyContent: 'center',
        }}
      >
        <SearchIcon size={24} color={theme.gray500} />
      </StyledColumn>
      <TextInput
        value={value}
        onChangeText={(value) => onChangeText(value)}
        css={{
          backgroundColor: 'transparent',
          height: '100%',
          color: theme.white,
          width: '75%',
          padding: '6px 0px',
          fontSize: '14px',
        }}
        placeholder={placeholder}
        placeholderColor={'gray500'}
      />
      <StyledColumn
        css={{
          height: '100%',
          justifyContent: 'center',
        }}
      >
        <Pressable onPress={onCancelPress}>
          <CancelIcon size={20} color={theme.gray500} />
        </Pressable>
      </StyledColumn>
    </StyledSearchBarBox>
  );
};

export default SearchBar;
