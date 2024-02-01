import {
  StyledBox,
  StyledColumn,
  StyledRow,
  StyledText,
} from '../../../../components/styled/styles';
import { useDispatch } from 'react-redux';
import { logout } from '../../../../redux/slice/auth.slice';
import { Avatar } from '../../../../components/common/Avatar';
import { useTheme } from 'styled-components';
import { LogoutIcon } from '../../../../../assets/icons/LogoutIcon';
import { Pressable } from 'react-native';
import { useProfileQuery } from '../../../../redux/service/profile.service';
import FreeTextAnswer from '../../../../components/bubbles/FreeTextAnswer';
import FreeTextBubble from '../../../../components/common/FreeTextBubble';
import { useEffect, useState } from 'react';

const profileMocked = {
  name: 'Valentin',
  lastname: 'Morali',
  occupation: 'Student',
  job: 'SW developer',
  city: 'Campana/Argentina',
};

export default function Page() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { data: profileData, error, isLoading } = useProfileQuery({});
  const [loading, setisloading] = useState(false);

  const [texto, setTexto] = useState('');
  const handleChange = (cadena: string) => {
    setTexto(cadena);
  };
  const handlePress = () => {
    alert(texto ?? 'hola');
    setTexto('');
    setisloading(true);
  };
  useEffect(() => {
    if (loading === true) {
      setTimeout(() => setisloading(false), 4000);
    }
  }, [loading]);

  const handleLogout = () => dispatch(logout());

  return (
    <StyledColumn
      css={{
        width: '100%',
        height: '100%',
        paddingTop: 20,
      }}
    >
      <StyledColumn css={{ gap: 24 }}>
        <StyledRow
          css={{
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <StyledText css={{ color: theme.gray100 }} variant="h1">
            Perfil
          </StyledText>
          <Pressable onPress={handleLogout}>
            <LogoutIcon color={theme.primary600} size={32} />
          </Pressable>
        </StyledRow>
        <StyledRow css={{ gap: 8 }}>
          <StyledBox>
            <Avatar size={94} borderRadius={97} />
          </StyledBox>
          <StyledColumn css={{ gap: 4, justifyContent: 'center' }}>
            <StyledText css={{ color: theme.gray100 }} variant="h3">
              {profileMocked.name} {profileMocked.lastname}
            </StyledText>
            <StyledText css={{ color: theme.gray100 }} variant="body2">
              {profileMocked.occupation}
            </StyledText>
            <StyledText css={{ color: theme.gray100 }} variant="body2">
              {profileMocked.job}
            </StyledText>
            <StyledText css={{ color: theme.gray100 }} variant="body2">
              {profileMocked.city}
            </StyledText>
          </StyledColumn>
        </StyledRow>
        <StyledText css={{ backgroundColor: 'white' }}>answer</StyledText>
        <FreeTextAnswer />
        <StyledText css={{ backgroundColor: 'white' }}>bubble</StyledText>

        <FreeTextBubble
          value={texto}
          onChangeText={(e) => handleChange(e)}
          handlePress={handlePress}
          isSending={loading}
        />
      </StyledColumn>
    </StyledColumn>
  );
}
