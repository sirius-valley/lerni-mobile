import { FunctionComponent, useEffect } from 'react';
import { View } from 'react-native';
import { useLDispatch, useLSelector } from '../redux/hooks';
import { resetToast } from '../redux/slice/utils.slice';
import { CustomSuccessToast } from '../components/styled/Toast';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const ToastComponent = (props: any) => {
  const type = useLSelector((state) => state.utils.type);
  const text = useLSelector((state) => state.utils.text);
  const inset = useSafeAreaInsets();
  const dispatch = useLDispatch();
  useEffect(() => {
    if (type) {
      setTimeout(() => {
        dispatch(resetToast());
      }, 3000);
    }
  }, [type]);

  return (
    <View style={{ flex: 1, position: 'relative' }}>
      {props.children}
      <View
        style={{
          position: 'absolute',
          bottom: inset.bottom,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {type && (
          <CustomSuccessToast type={type} text={text} onClose={() => dispatch(resetToast())} />
        )}
      </View>
    </View>
  );
};
