import { StyledColumn } from '../../../../components/styled/styles';
import SingleAnswer from '../../../../components/bubbles/SingleAnswer';
import { useState } from 'react';
import Button from '../../../../components/styled/Button';

type OptionType = {
  id: string;
  text: string;
  selected?: boolean | string;
};

const TestComponent = () => {
  const [options, setOptions] = useState<OptionType[]>([
    {
      id: '1',
      text: 'Option 1',
      selected: undefined,
    },
    {
      id: '2',
      text: 'Option 2',
      selected: undefined,
    },
    {
      id: '3',
      text: 'Option 3',
      selected: undefined,
    },
  ]);
  const handleAnswer = (id: string) => {
    setOptions(
      options.map((option) => {
        if (option.id === id) {
          return {
            ...option,
            selected: true,
          };
        }
        return {
          ...option,
          selected: false,
        };
      }),
    );
  };

  const resetOptions = () => {
    setOptions(
      options.map((option) => {
        return {
          ...option,
          selected: undefined,
        };
      }),
    );
  };
  return (
    <StyledColumn css={{ padding: 24, background: 'black', marginTop: 64 }}>
      <SingleAnswer options={options} onPress={handleAnswer} sealed={false} />
      <Button onPress={resetOptions}>Submit</Button>
    </StyledColumn>
  );
};

export default TestComponent;
