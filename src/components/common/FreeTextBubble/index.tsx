import React, { useRef } from 'react';
import { TextInput as TextInputCustom } from '../../styled/TextInput';
import Button from '../../styled/Button';
import SendIcon from '../../../../assets/icons/SendIcon';
import StaticBubble from '../StaticBubble';
import CharAmountDisplay from '../CharAmountDisplay';
import { StyledFreeTextContainer, StyledRightColumn } from './styles';
import { StyledColumn } from '../../styled/styles';
import { Pressable, TextInput } from 'react-native';

interface FreeTextBubbleInterface {
  value: string;
  onChangeText: (value: string) => void;
  handlePress: () => void;
  textLimit?: number;
  placeholder?: string;
}

const FreeTextBubble = ({
  value,
  onChangeText,
  handlePress,
  textLimit = 150,
  placeholder = 'Agrega tu respuesta...',
}: FreeTextBubbleInterface) => {
  const textLength = value.length;

  const handleOnChangeText = (text: string) => {
    onChangeText(text);
  };

  const ref = useRef<TextInput>(null);

  const handleFocusTextInput = () => {
    ref.current?.focus();
  };

  // if (status === 'read-only') return <StaticBubble text={value} />;

  return (
    <StyledFreeTextContainer>
      <Pressable
        onPress={handleFocusTextInput}
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          justifyContent: 'center',
          paddingVertical: 8,
          paddingHorizontal: 0,
        }}
      >
        <StyledColumn css={{}}>
          <TextInputCustom
            ref={ref}
            value={value}
            onChangeText={handleOnChangeText}
            placeholder={placeholder}
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
      </Pressable>

      <StyledRightColumn
        css={{
          padding: '8px 0px',
        }}
      >
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
