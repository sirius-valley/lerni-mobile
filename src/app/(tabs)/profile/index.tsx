import { Text, View } from 'react-native';
import Button from '../../../components/styled/Button/Button';
import { CustomSuccessToast } from '../../../components/styled/Toast';
import { useState } from 'react';
import { StyledText } from '../../../components/styled/styles';
import Toast, { BaseToast } from 'react-native-toast-message';
import { useLDispatch } from '../../../redux/hooks';
import { showToast } from '../../../redux/slice/utils.slice';
import { theme } from '../../../utils/theme';

export default function Page() {
  const toastConfig = {
    success: (props: any) => (
      <BaseToast
        {...props}
        style = {{
          borderRadius: 8,
          backgroundColor: theme.success,
          paddingVertical: 12,
          paddingHorizontal: 18,
          gap: 16,
          alignItems: 'center',
          width: 189,
        }}
        contentContainerStyle = {{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
        text1Style={{
          fontFamily: theme.body2.fontFamily,
          fontSize: 14,
          fontWeight: 400,
          color: theme.white,
        }}
      />
    ),
    okay: (props: any) => (
      <View><StyledText variant='body1'>hola</StyledText></View>
    )
  };

  const dispatch = useLDispatch();
  const onShowToast = () => {
    console.log('pressed')
    Toast.show({
      type: 'success',
      text1: "okaaaaaay",
  })

  }


  return (
    <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12}}>
      <Text>Index page of Profile Tab</Text>
      <Button onPress={onShowToast} children='show successful toast' />
      <Toast config={toastConfig} />
    </View>
  );
}
