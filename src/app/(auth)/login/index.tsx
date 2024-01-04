import { useRouter } from 'expo-router';
import Button from '../../../components/styled/Button/Button';

 const Login = () => {
  const navigate = useRouter();
  const handlePress = () => {
    navigate.push('/auth/login');
  };
  return <Button onPress={handlePress}>Register</Button>;
};

export default Login;
