import { Text, View } from 'react-native';
import { ChatBubble } from '../../../components/styled/ChatBubble';

export default function Page() {
  return (
    <View>
      <ChatBubble type="text" user="professor" isLast={false} content="Hola cómo te va?" />
      <ChatBubble type="text" user="student" isLast={false} content="Muy bien, y a vos?" />
      <ChatBubble
        type="text"
        user="professor"
        isLast={false}
        content="Bien bien. Empecemos con la clase de hoy. Leiste los textos de tarea?"
      />
      <ChatBubble
        type="image"
        user="professor"
        content="https://images.unsplash.com/photo-1564754943164-e83c08469116?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dmVydGljYWx8ZW58MHx8MHx8fDA%3D"
      />
    </View>
  );
}
