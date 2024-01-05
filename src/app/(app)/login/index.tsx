import { useRouter } from 'expo-router';
import Button from '../../../components/styled/Button/Button';

 const Login = () => {
  const navigate = useRouter();
  const handlePress = () => {
    navigate.push('/auth/register');
  };
  return <Button onPress={handlePress} children='Register'/>
};

export default Login;
