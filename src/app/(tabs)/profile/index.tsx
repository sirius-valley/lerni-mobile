import { Text, View } from 'react-native';
import { StyledTextBubble } from '../../../components/styled/TextBubble';

export default function Page() {
  return (
    <View>
      <StyledTextBubble type="text" user="professor" isLast={false} content="Hola cómo te va?" />
      <StyledTextBubble type="text" user="student" isLast={false} content="Muy bien, y a vos?" />
      <StyledTextBubble
        type="text"
        user="professor"
        isLast={false}
        content="Bien bien. Empecemos con la clase de hoy. Leiste los textos de tarea?"
      />
      <StyledTextBubble type="image" user="student" content="https://via.placeholder.com/300" />
    </View>
  );
}
