import { Text, View } from 'react-native';
import Button from '../../../components/styled/Button/Button';
import Toast from 'react-native-toast-message';

export default function Page() {
  const showToast = () => {
    Toast.show({
      type: "success",
      text1: "Toast Shown",
      autoHide: true,
      visibilityTime: 2000,
      position: 'top',
      bottomOffset: 0,
      topOffset: 0,
      onShow: () => {console.log('showing')},
      onHide: () => {console.log('hidding')},
      onPress: () => {console.log('pressing')},
    })
  }
  console.log('profile');
  
  return (
    <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Text>Index page of Profile Tab</Text>
      <Button onPress={showToast} children='show toast' />
      <Toast autoHide={true} visibilityTime={2500} /> 
    </View>
  );
}
