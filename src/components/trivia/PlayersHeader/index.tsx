import { StyledBox, StyledRow, StyledText } from '../../styled/styles';
import PlayerStatus from '../PlayerStatus';

const PlayersHeader = () => {
  return (
    <StyledRow css={{ position: 'relative', justifyContent: 'center' }}>
      <PlayerStatus
        points={[
          {
            correct: true,
            id: '1',
          },
          {
            correct: false,
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
            correct: true,
            id: '1',
          },
          {
            correct: false,
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
            correct: true,
            id: '1',
          },
          {
            correct: false,
            id: '2',
          },
        ]}
        firstName={'test'}
        lastName={'test'}
        imgUrl={
          'https://media.discordapp.net/attachments/411201278031560708/1124484301401116773/peron20color.png?ex=65b4429d&is=65a1cd9d&hm=48acf6cfeb3d75dd6a313bb64a5d921b33eaff8de3873406372ad6f9257fd95c&=&format=webp&quality=lossless&width=904&height=922'
        }
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
        <StyledText
          variant={'h2'}
          css={{
            color: 'white',
            fontStyle: 'italic',
          }}
        >
          VS
        </StyledText>
      </StyledBox>
      <PlayerStatus
        points={[
          {
            correct: true,
            id: '1',
          },
          {
            correct: false,
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
            correct: true,
            id: '1',
          },
          {
            correct: false,
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
            correct: true,
            id: '1',
          },
          {
            correct: false,
            id: '2',
          },
        ]}
        firstName={'test'}
        lastName={'test'}
        imgUrl={
          'https://media.discordapp.net/attachments/411201278031560708/1124484301401116773/peron20color.png?ex=65b4429d&is=65a1cd9d&hm=48acf6cfeb3d75dd6a313bb64a5d921b33eaff8de3873406372ad6f9257fd95c&=&format=webp&quality=lossless&width=904&height=922'
        }
        side={'right'}
      />
    </StyledRow>
  );
};

export default PlayersHeader;
