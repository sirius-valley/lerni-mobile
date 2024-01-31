import { Image } from 'react-native';

interface AvatarProps {
  uri?: string;
  size?: number;
  borderRadius?: number;
}

export const Avatar = ({ uri, size = 28, borderRadius = 50 }: AvatarProps) => {
  const imageSource = uri ? { uri } : require('../../../../assets/default-profile.png');
  return (
    <Image
      source={require('../../../../assets/default-profile.png')}
      style={{ width: size, height: size, borderRadius: borderRadius }}
    />
  );
};
