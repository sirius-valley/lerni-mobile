import React, { useState } from 'react';
import LerniMainIcon from '../../../../assets/icons/LerniMainIcon';
import MainContainer from '../../../components/register/MainContainer';
import { StyledColumn, StyledText } from '../../../components/styled/styles';
import { TextInput } from '../../../components/styled/TextInput';
import Button from '../../../components/styled/Button';
import { useTheme } from 'styled-components';
import { StyledRow } from '../../../components/styled/styles';

const LoginScreen = () => {
  const theme = useTheme();
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (key: string, value: string) => {
    setLoginData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };
  const handleSubmit = () => {
    setLoading(true);
  };

  return (
    <MainContainer>
      <LerniMainIcon />
      <StyledColumn
        css={{
          gap: '16px',
          width: '100%',
          padding: '20px',
        }}
      >
        <>
          <TextInput
            value={loginData.email}
            onChangeText={(text) => handleChange('email', text)}
            placeholder="Email"
            disabled={loading}
            css={{
              width: '100%',
            }}
          />
          <StyledColumn>
            <TextInput
              value={loginData.password}
              onChangeText={(text) => handleChange('password', text)}
              placeholder="Contraseña"
              type="password"
              disabled={loading}
              css={{
                width: '100%',
              }}
            />
            {/* chequear boton*/}
            <StyledText
              css={{
                textAlign: 'right',
                color: theme.white,
                marginTop: '8px',
                textDecorationLine: 'underline',
              }}
            >
              Olvidaste tu contraseña?
            </StyledText>
          </StyledColumn>
          <Button
            disabled={!loginData.email || !loginData.password}
            onPress={handleSubmit}
            variant={'dark'}
            loading={loading}
            css={{
              marginTop: '8px',
            }}
          >
            Iniciar Sesión
          </Button>
          <StyledRow css={{ justifyContent: 'center' }}>
            <StyledText>No tenés cuenta? </StyledText>
            <StyledText css={{ textDecorationLine: 'underline' }}>Crear una ahora</StyledText>
          </StyledRow>
        </>
      </StyledColumn>
    </MainContainer>
  );
};

export default LoginScreen;
