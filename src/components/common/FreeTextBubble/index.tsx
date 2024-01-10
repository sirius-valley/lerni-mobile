import React from 'react';
import { TextInput } from '../../styled/TextInput';
import Button from '../../styled/Button';
import SendIcon from '../../../../assets/icons/SendIcon';
import StaticBubble from '../StaticBubble';
import CharAmountDisplay from '../CharAmountDisplay';
import { StyledFreeTextContainer, StyledRightColumn } from './styles';

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

  const handleOnChangeText = (text: string) => {
    if (!onChangeText)
      return null;

    return (text.length <= textLimit) && onChangeText(text);
  }

  if (status === 'read-only')
    return <StaticBubble text={value} />

  return (
    <StyledFreeTextContainer>
      <TextInput
        value={value}
        onChangeText={handleOnChangeText}
        css={{
          width: '80%',
          height: '100%',
        }}
        scrollEnabled={false}
        multiline
      />
      <StyledRightColumn>
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
          css={{
            borderRadius: '100px',
            width: '42px',
            height: '42px',
            padding: '8px',
          }}
          disabled={value.length === 0}
        />
      </StyledRightColumn>
    </StyledFreeTextContainer>
  )
}

export default FreeTextBubble;
