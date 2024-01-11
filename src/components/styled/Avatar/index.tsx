import { Image } from 'react-native';
import { MessageProps } from '../../../utils/constants';
import { AvatarContainer } from './AvatarContainer/styles';

export const Avatar = ({ user = 'student' }: MessageProps, uri?: string) => {
  uri = 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250';
  return (
    <AvatarContainer user={user}>
      {uri ? (
        <Image
          source={{
            uri: uri,
          }}
          style={{ width: 28, height: 28, borderRadius: 50 }}
        />
      ) : null}
    </AvatarContainer>
  );
};
