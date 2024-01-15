import { Image } from 'react-native';

interface AvatarProps {
  uri?: string;
  size?: number;
}

export const Avatar = ({ uri, size }: AvatarProps) => {
  return (
    <Image
      source={{
        uri: uri ? uri : 'https://i.pinimg.com/222x/57/70/f0/5770f01a32c3c53e90ecda61483ccb08.jpg',
      }}
      style={{ width: size ? size : 28, height: size ? size : 28, borderRadius: 50 }}
    />
  );
};
