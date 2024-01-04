import { Slot, useRouter } from 'expo-router';
import store from '../../redux/store';
import { useEffect } from 'react';

export const Layout = () => {
  const token = store.getState().auth.token;
  const navigate = useRouter();
  console.log('hola', token);

  useEffect(() => {
    if (!token) navigate.push('login');
  }, [token]);

  return <Slot />;
};
