import { useRouter } from 'expo-router';
import Button from '../../../components/styled/Button/Button';

const Register = () => {
  const navigate = useRouter();
  const handlePress = () => {
    navigate.push('/');
  };
  return (
    <Button children='Create your account' onPress={handlePress} />
  );
};

export default Register;
