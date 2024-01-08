import { Redirect, Slot } from 'expo-router';
import store from '../../redux/store';

export const Layout = () => {
  // const token = store.getState().auth.token;

  // if (!token) {
  //   return <Redirect href={'/(app)/login'} />
  // }

  return <Slot />;
};

export default Layout;

