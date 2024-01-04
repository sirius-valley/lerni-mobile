import {Redirect, Slot, useRouter} from 'expo-router';
import store from '../../redux/store';
import {useEffect, useState} from 'react';
import {Text} from "react-native";

export const Layout = () => {
  // const token = store.getState().auth.token;
  const navigate = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const token = store.getState().auth.token;


  if(!token) {
    return <Redirect href={'/(auth)/login'}/>
  }

  return <Slot />;
};

export default Layout;

