import React, { useState } from 'react';
import { TextInput } from '../../styled/TextInput';
import Button from '../../styled/Button';
import SendIcon from '../../../../assets/icons/SendIcon';
import StaticBubble from '../StaticBubble';
import CharAmountDisplay from '../CharAmountDisplay';
import { StyledFreeTextContainer, StyledRightColumn } from './styles';
import { StyledColumn } from '../../styled/styles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { onFocus } from '@reduxjs/toolkit/dist/query/core/setupListeners';

interface FreeTextBubbleInterface {
  value: string;
  onChangeText: (value: string) => void;
  handlePress: () => void;
  textLimit?: number;
  placeholder?: string;
  isSending?: boolean;
}

const FreeTextBubble = ({
  value,
  onChangeText,
  handlePress,
  textLimit = 150,
  placeholder = 'Agrega tu respuesta...',
  isSending,
}: FreeTextBubbleInterface) => {
  const textLength = value.length;
  const [touched, setTouched] = useState(false);
  const [placeholderText, setPlaceholderText] = useState(placeholder);

  const handleOnChangeText = (text: string) => {
    onChangeText(text);
    if (!touched) {
      setTouched(true);
    }
  };
  const clearPlaceholder = () => {
    setPlaceholderText('');
    alert('ejecutado');
  };

  // if (status === 'read-only') return <StaticBubble text={value} />;

  return (
    <StyledFreeTextContainer>
      <StyledColumn
        css={{
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <TouchableWithoutFeedback>
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
            placeholder={isSending ? 'Sending' : placeholder}
            maxLength={textLimit}
            onFocus={clearPlaceholder}
            multiline
          />
        </TouchableWithoutFeedback>
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
