import { ToastTypes } from '../../../../utils/constants';
import { DeadEmojiIcon } from '../../../../../assets/icons/DeadEmojiIcon';
import { ClapsEmojiIcon } from '../../../../../assets/icons/ClapsEmojiIcon';
import { InfoEmojiIcon } from '../../../../../assets/icons/InfoEmoIcon';

interface ToastIconProps {
  type?: ToastTypes;
}

const ToastIcon = ({ type }: ToastIconProps) => {
  switch (type) {
    case 'success':
      return <ClapsEmojiIcon size={20} />;
    case 'error':
      return <DeadEmojiIcon size={20} />;
    case 'info':
      return <InfoEmojiIcon size={20} />;
    default:
      return null;
  }
};

export default ToastIcon;
