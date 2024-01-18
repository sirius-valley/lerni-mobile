import { Image } from 'react-native';

interface AvatarProps {
  uri?: string;
  size?: number;
  borderRadius?: number;
}

export const Avatar = ({
  uri = 'https://i.pinimg.com/222x/57/70/f0/5770f01a32c3c53e90ecda61483ccb08.jpg',
  size = 28,
  borderRadius = 50,
}: AvatarProps) => {
  return (
    <Image
      source={{
        uri: uri,
      }}
      style={{ width: size, height: size, borderRadius: borderRadius }}
    />
  );
};
