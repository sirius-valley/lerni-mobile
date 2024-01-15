import { Image } from 'react-native';
import { MessageProps } from '../../../utils/constants';
import { AvatarContainer } from './styles';

interface AvatarProps {
  uri?: string;
  size?: number;
}

export const Avatar = ({uri, size}: AvatarProps) => {
  // uri = 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250';
  return (
      <Image
        source={{
          uri: uri ? uri : 'https://i.pinimg.com/222x/57/70/f0/5770f01a32c3c53e90ecda61483ccb08.jpg',
        }}
        style={{ width: size ? size : 28, height: size ? size : 28, borderRadius: 50 }}
      />
  );
};
