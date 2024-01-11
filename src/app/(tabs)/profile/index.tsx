import { Text } from 'react-native';
import { StyledColumn, StyledText } from '../../../components/styled/styles';
import Button from '../../../components/styled/Button';
import { useDispatch } from 'react-redux';
import { authActions } from '../../../redux/slice/auth.slice';

export default function Page() {

  const dispatch = useDispatch();

  const handleOnPress = () => dispatch(authActions.logout())

  return (
    <StyledColumn css={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
      <StyledText variant='h2'>
        Index page of Profile Tab
      </StyledText>
      <Button variant='red' onPress={handleOnPress}>
        LOGOUT
      </Button>
    </StyledColumn>
  )
}
