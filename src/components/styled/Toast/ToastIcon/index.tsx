import { Text } from 'react-native';
import { ToastTypes } from '../../../../utils/constants';

interface ToastIconProps {
  type?: ToastTypes;
}

const ToastIcon = ({ type }: ToastIconProps) => {
  switch (type) {
    case 'success':
      return <Text style={{ fontSize: 20 }}>👏</Text>;
    case 'error':
      return <Text style={{ fontSize: 20 }}>😵</Text>;
    case 'info':
      return <Text style={{ fontSize: 20 }}>ℹ️</Text>;
    default:
      return null;
  }
};

export default ToastIcon;
