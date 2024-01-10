import React from 'react';
import { useTheme } from 'styled-components';
import {  StyledColumn, StyledRow } from '../../styled/styles';
import { TextInput } from '../../styled/TextInput';
import Button from '../../styled/Button';
import SendIcon from '../../../../assets/icons/SendIcon';
import StaticBubble from '../StaticBubble';
import CharAmountDisplay from '../CharAmountDisplay';

interface FreeTextBubbleInterface {
  value: string;
  onChangeText?: (value: string) => void;
  handlePress?: () => void;
  status?: "write-only" | "read-only";
  textLimit?: number;
}

const FreeTextBubble = ({
  value,
  onChangeText,
  handlePress,
  status = "write-only",
  textLimit = 150,
}: FreeTextBubbleInterface) => {
  const textLength = value.length;

  const Styles = CreateStyles();

  const handleOnChangeText = (text: string) => {
    if (!onChangeText)
      return null;

    return (text.length <= textLimit) && onChangeText(text);
  }

  if (status === 'read-only')
    return <StaticBubble text={value} />

  return (
    <StyledRow css={Styles.mainContainer}>
      <TextInput
        value={value}
        onChangeText={handleOnChangeText}
        css={Styles.input}
        scrollEnabled={false}
        multiline
      />
      <StyledColumn css={Styles.rightColumn}>
        {textLength > 130 && (
          <CharAmountDisplay 
            text={value}
            topLength={textLimit}
          />
        )}
        <Button
          variant={'primary'}
          onPress={() => handlePress ? handlePress() : null}
          icon={SendIcon}
          iconColor={'white'}
          css={Styles.button}
          disabled={value.length === 0}
        />
      </StyledColumn>
    </StyledRow>
  )
}

export default FreeTextBubble;

const CreateStyles = () => {
  const theme = useTheme();
  return ({
    mainContainer: {
      borderColor: theme.primary500,
      height: 'fit-content',
      width: '100%',
      borderWidth: '1px',
      borderRadius: 8,
      padding: '12px 8px 8px 4px',
    },
    rightColumn: {
      width: '20%',
      height: 'fit-content',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
    },
    input: {
      width: '80%',
      height: '100%',
    },
    button: {
      borderRadius: '100px',
      width: '42px',
      height: '42px',
      padding: '8px',
    }
  })
}