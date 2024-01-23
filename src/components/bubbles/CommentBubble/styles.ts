import styled from 'styled-components/native';

export const StyledCommentBubble = styled.Pressable`
  display: flex;
  flex-direction: column;
  padding: 9.529px 14.293px;
  align-items: flex-start;
  gap: 2.382px;
  border-radius: 12.705px 12.705px 12.705px 1.588px;
  background: ${props => props.theme.primary800}
`;