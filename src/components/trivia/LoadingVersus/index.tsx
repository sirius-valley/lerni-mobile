import { rgba } from 'polished';
import { useTheme } from 'styled-components/native';
import { TriviaLoaderIcon } from '../../../../assets/icons/TriviaLoaderIcon';
import { StyledBox, StyledColumn, StyledRow } from '../../styled/styles';
import { Participant } from './Participant';
import TriviaTriangleBackground from '../TriviaTriangleBackground';

export const LoadingVersus = () => {
  const theme = useTheme();
  const participants = mockedUsers;

  return (
    <TriviaTriangleBackground>
      <StyledColumn
        css={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <StyledRow
          css={{
            position: 'absolute',
            left: '10%',
            top: '20%',
          }}
        >
          <Participant
            image={participants[0].image}
            name={participants[0].name}
            lastname={participants[0].lastname}
          />
        </StyledRow>
        <StyledBox css={{}}>
          <TriviaLoaderIcon color={rgba(theme.gray100, 0.2)} />
        </StyledBox>
        <StyledRow
          css={{
            position: 'absolute',
            right: '10%',
            bottom: '20%',
          }}
        >
          <Participant
            image={participants[1].image}
            name={participants[1].name}
            lastname={participants[1].lastname}
          />
        </StyledRow>
      </StyledColumn>
    </TriviaTriangleBackground>
  );
};

const mockedUsers = [
  {
    image: '',
    name: 'Participant',
    lastname: '1',
  },
  {
    image: '',
    name: 'Participant',
    lastname: '2',
  },
];
