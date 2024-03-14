import BoltIcon from '../../../../assets/icons/BoltIcon';
import { VSIcon } from '../../../../assets/icons/VSIcon';
import useTrivia from '../../../hooks/useTrivia';
import { StyledBox, StyledRow, StyledText } from '../../styled/styles';
import PlayerStatus from '../PlayerStatus';
const PlayersHeader = () => {
  const { opponent } = useTrivia();
  return (
    <StyledRow css={{ position: 'relative', justifyContent: 'center', width: '100%' }}>
      <PlayerStatus
        points={[
          {
            correct: true,
            id: '1',
          },
          {
            correct: true,
            id: '2',
          },
          {
            correct: true,
            id: '1',
          },
          {
            correct: false,
            id: '2',
          },
          {
            correct: false,
            id: '1',
          },
          {
            correct: undefined,
            id: '1',
          },
          {
            correct: undefined,
            id: '1',
          },
          {
            correct: undefined,
            id: '1',
          },
          {
            correct: undefined,
            id: '1',
          },
          {
            correct: undefined,
            id: '1',
          },
          {
            correct: undefined,
            id: '1',
          },
          {
            correct: undefined,
            id: '1',
          },
        ]}
        firstName={'Mono'}
        lastName={'Ing. Informática'}
        imgUrl={undefined}
        side={'left'}
      />
      <StyledBox
        style={{
          position: 'absolute',
          width: '100%',
          alignItems: 'center',
          top: 16,
          justifyContent: 'center',
          zIndex: 2,
        }}
      >
        <StyledBox>
          <BoltIcon size={47} />
          <StyledBox
            css={{
              width: 24,
              height: 24,
              zIndex: 3,
              left: '3.5%',
              bottom: '50%',
            }}
          >
            <VSIcon size={24} />
          </StyledBox>
        </StyledBox>
      </StyledBox>
      <PlayerStatus
        points={[
          {
            correct: undefined,
            id: '1',
          },
          {
            correct: undefined,
            id: '1',
          },
          {
            correct: undefined,
            id: '1',
          },
          {
            correct: undefined,
            id: '1',
          },
          {
            correct: undefined,
            id: '1',
          },
          {
            correct: undefined,
            id: '1',
          },
          {
            correct: undefined,
            id: '1',
          },
          {
            correct: undefined,
            id: '1',
          },
          {
            correct: undefined,
            id: '1',
          },
          {
            correct: undefined,
            id: '1',
          },
          {
            correct: undefined,
            id: '1',
          },
          {
            correct: undefined,
            id: '1',
          },
        ]}
        firstName={opponent?.firstName}
        lastName={opponent?.lastName}
        imgUrl={opponent?.imgUrl}
        side={'right'}
      />
    </StyledRow>
  );
};
export default PlayersHeader;
