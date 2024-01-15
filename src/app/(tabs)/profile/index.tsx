import { Text, View } from 'react-native';
import { Choice } from '../../../components/styled/Choice';
import { useTheme } from 'styled-components/native';
import { SingleAnswer } from '../../../components/SingleAnswer';

export default function Page() {
  const theme = useTheme();
  return (
    <View style={{backgroundColor: theme.primary900, display: 'flex', gap: 12, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Index page of Profile Tab</Text>
      {/* <Choice status='question' text="Choice 1" />
      <Choice status='question' text="Choice 2" />
      <Choice status='not_selected' text="Choice 3" />
      <Choice status='selected' text="Choice 2" /> */}
      <SingleAnswer />
      </View>
  );
}
