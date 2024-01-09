import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from 'styled-components';
import { StyledBox, StyledColumn, StyledRow, StyledText } from '../../styled/styles';
import { StyledTextInput } from '../../styled/TextInput/styles';
import { TextInput } from '../../styled/TextInput';
import Button from '../../styled/Button';
import SendIcon from '../../../../assets/icons/SendIcon';

enum FREE_TEXT_BUBBLE_STATUS {
  WRITE_ONLY,
  READ_ONLY
}

interface FreeTextBubbleInterface {
  value: string;
  onChangeText: (value: string) => void;
  handlePress: () => void;
  status?: FREE_TEXT_BUBBLE_STATUS;
  textLimit?: number;
}

const Index = ({
  value,
  onChangeText,
  handlePress,
  status = FREE_TEXT_BUBBLE_STATUS.WRITE_ONLY,
  textLimit = 150,
}: FreeTextBubbleInterface) => {
  const textLength = value.length;

  const Styles = CreateStyles(textLength > textLimit);

  return (
    <StyledBox css={Styles.mainContainer}>
      <StyledRow>
        <StyledColumn css={Styles.column1}>
          <TextInput
            value={value}
            onChangeText={(text) => (text.length <= textLimit + 1) && onChangeText(text)}
            css={Styles.input}
            multiline
          />
        </StyledColumn>
        <StyledColumn css={Styles.column2}>
          {textLength > 130 && (
            <StyledRow css={Styles.charLengthRow}>
              <StyledText css={Styles.charLength}>
                {textLength}
              </StyledText>
              <StyledText>
                /{textLimit}
              </StyledText>
              <StyledText>
                /{textLimit}
              </StyledText>
            </StyledRow>
          )}
          <Button
            variant={'primary'}
            onPress={handlePress}
            icon={SendIcon}
            css={Styles.button}
          />
        </StyledColumn>
      </StyledRow>
    </StyledBox>
  )
}

export default Index;

const CreateStyles = (charLengthExceeded: boolean) => {
  const theme = useTheme();
  return ({
    mainContainer: {
      borderColor: theme.primary500,
      height: '58px',
      maxHeight: '150px',
      width: '100%',
      borderWidth: '1px',
      borderRadius: 8,
      padding: '8px',
    },
    column1: {
      width: '80%',
      height: '100%',
    },
    column2: {
      width: '20%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
    },
    charLengthRow: {
      alignItems: 'center',
    },
    charLength: {
      color: charLengthExceeded ? theme.red500 : '#F99D32',
    },
    input: {
      width: '100%',
    },
    button: {
      borderRadius: '100%',
      width: '42px',
      height: '42px',
      padding: '8px',
    }
  })
}