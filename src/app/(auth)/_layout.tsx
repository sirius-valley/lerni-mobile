import { Redirect, Slot } from 'expo-router';
import store from '../../redux/store';
import { withModal } from '../../hoc/withModal';
import { useLDispatch } from '../../redux/hooks';
import { useEffect } from 'react';
import { getTokenFromSecureStore } from '../../utils/utils';

export const Layout = () => {
  const token = store.getState().auth.token;
  const dispatch = useLDispatch();

  useEffect(() => {
    getTokenFromSecureStore(dispatch);
  }, []);

  if (!token) {
    return <Redirect href={'/(app)/login'} />;
  }

  return <Slot />;
};

export default withModal(Layout);
