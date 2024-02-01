import { Redirect, Slot } from 'expo-router';
import { withModal } from '../../hoc/withModal';
import { useLDispatch, useLSelector } from '../../redux/hooks';
import { useEffect } from 'react';
import { getTokenFromSecureStore } from '../../utils/utils';

export const Layout = () => {
  const token = useLSelector((state) => state.auth.token);
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
