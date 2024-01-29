import { Text, View } from 'react-native';
import SearchItem from '../../../../components/search/SearchItem';
import { useTheme } from 'styled-components';
import { StyledColumn } from '../../../../components/styled/styles';

export default function Page() {
  const theme = useTheme();
  return (
    <View style={{
      backgroundColor: theme.primary900,
      height: '100%',
      padding: 16,
    }}>
      <Text>Index page of Trivia Tab</Text>
      <StyledColumn
        css={{
          gap: '16px',
        }}
      >
        <SearchItem
          type={'program'}
          title={'Titulo'}
          description={'Descripción lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis ullamcorper mauris, commodo.'}
          imgUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/240px-React_Logo_SVG.svg.png'
          status='not_started'
        />
        <SearchItem
          type={'pill'}
          title={'Titulo'}
          description={'Descripción lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis ullamcorper mauris, commodo.'}
          progress={0.32}
        />
        <SearchItem
          type={'program'}
          title={'Titulo'}
          description={'Descripción lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis ullamcorper mauris, commodo.'}
          imgUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/240px-React_Logo_SVG.svg.png'
          status={'completed'}
        />
      </StyledColumn>
    </View>
  );
}
