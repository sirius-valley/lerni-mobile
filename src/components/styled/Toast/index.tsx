import { Pressable, View } from 'react-native';
import { ToastContainer, ToastText } from './styles';
import { IconInterface } from '../../../../assets/icons/types';
import { CancelIcon } from '../../../../assets/icons/CancelIcon';
import ToastIcon from './ToastIcon';
import { ToastTypes } from '../../../utils/constants';

interface ToastProps {
  type?: ToastTypes;
  text?: string;
  onClose: () => void;
  icon?: React.FC<IconInterface>;
}

export const CustomSuccessToast = ({ type, text, onClose, icon }: ToastProps) => {
  return (
    <ToastContainer type={type ? type : 'success'}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 16,
        }}
      >
        <ToastIcon type={type} />
        <ToastText style={{ flex: 1 }}>{text ? text : 'toast'}</ToastText>
        <Pressable onPress={onClose}>
          <CancelIcon color="white" />
        </Pressable>
      </View>
    </ToastContainer>
  );
};
