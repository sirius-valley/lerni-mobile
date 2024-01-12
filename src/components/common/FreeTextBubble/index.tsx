import React from 'react';
import { TextInput } from '../../styled/TextInput';
import Button from '../../styled/Button';
import SendIcon from '../../../../assets/icons/SendIcon';
import StaticBubble from '../StaticBubble';
import CharAmountDisplay from '../CharAmountDisplay';
import { StyledFreeTextContainer, StyledRightColumn } from './styles';
import { StyledColumn } from '../../styled/styles';

interface FreeTextBubbleInterface {
  value: string;
  onChangeText?: (value: string) => void;
  handlePress?: () => void;
  status?: 'write-only' | 'read-only';
  textLimit?: number;
}

const FreeTextBubble = ({
  value,
  onChangeText,
  handlePress,
  status = 'write-only',
  textLimit = 150,
}: FreeTextBubbleInterface) => {
  const textLength = value.length;

  const handleOnChangeText = (text: string) => {
    if (!onChangeText) return null;
    return onChangeText(text);
  };

  if (status === 'read-only') return <StaticBubble text={value} />;

  return (
    <StyledFreeTextContainer>
      <StyledColumn
        css={{
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <TextInput
          value={value}
          onChangeText={handleOnChangeText}
          css={{
            width: '100%',
            height: 'min-content',
            padding: '0px',
            fontSize: '14px',
          }}
          scrollEnabled={false}
          maxLength={textLimit}
          multiline
        />
      </StyledColumn>
      <StyledRightColumn>
        {textLength >= 130 && <CharAmountDisplay text={value} topLength={textLimit} />}
        <Button
          variant={'primary'}
          onPress={() => (handlePress ? handlePress() : null)}
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
  );
};

export default FreeTextBubble;
