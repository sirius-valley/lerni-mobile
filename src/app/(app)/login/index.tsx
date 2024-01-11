import React from 'react';
import LerniMainIcon from '../../../../assets/icons/LerniMainIcon';
import MainContainer from '../../../components/register/MainContainer';
import { StyledColumn, StyledText } from '../../../components/styled/styles';
import { TextInput } from '../../../components/styled/TextInput';
import Button from '../../../components/styled/Button';
import { useTheme } from 'styled-components';
import { StyledRow } from '../../../components/styled/styles';
import { useLoginMutation } from '../../../redux/service/auth.service';
import {
  Formik,
} from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'expo-router';

const SigninSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/@[^.]*\./)
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/^(?=.*[A-Z])(?=.*[0-9!@#$%^&*()_+|~=\`{}\[\]:;"'<>,.?/\\-]).+$/, 'Password must contain at least one uppercase letter and one number or symbol')
    .required('Password is required'),
});

const LoginScreen = () => {

  const theme = useTheme();
  const [login, loginRequestData] = useLoginMutation();
  const router = useRouter();

  const goBack = () => router.back();

  return (
    <MainContainer>
      <LerniMainIcon />
      <StyledColumn
        css={{
          marginTop: '20%',
          gap: '16px',
          width: '100%',
          padding: '20px',
        }}
      >
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={values => login(values)}
          validationSchema={SigninSchema}
        >
          {({ handleChange, handleBlur, handleSubmit, values, isValid, errors, touched }) => (
            <>
              <TextInput
                value={values.email}
                onChangeText={handleChange('email')}
                placeholder='Email'
                onBlur={() => handleBlur('email')}
                error={!!errors.email && touched.email}
                disabled={loginRequestData.isLoading}
                css={{
                  width: '100%'
                }}
              />
              <StyledColumn>
                <TextInput
                  value={values.password}
                  onChangeText={handleChange('password')}
                  placeholder='Contraseña'
                  onBlur={() => handleBlur('password')}
                  error={!!errors.password}
                  type="password"
                  disabled={loginRequestData.isLoading}
                  css={{
                    width: '100%'
                  }}
                />
                <StyledText
                  css={{
                    textAlign: 'right',
                    color: theme.white,
                    marginTop: '8px',
                    textDecorationLine: 'underline',
                  }}
                  onPress={() => alert('to be defined')}
                >
                  Olvidaste tu contraseña?
                </StyledText>
              </StyledColumn>
              <Button
                disabled={!isValid || !values.email || !values.password}
                onPress={handleSubmit}
                variant={'dark'}
                loading={loginRequestData.isLoading}
                css={{
                  marginTop: '8px',
                }}
              >
                Iniciar Sesión
              </Button>
              <StyledRow css={{ justifyContent: 'center' }}>
                <StyledText
                  onPress={() => alert('to be defined')}
                >
                  No tenés cuenta?
                </StyledText>
                <StyledText
                  css={{ textDecorationLine: 'underline' }}
                  onPress={goBack}
                >
                  Crear una ahora
                </StyledText>
              </StyledRow>
            </>
          )}
        </Formik>
      </StyledColumn>
    </MainContainer>
  );
};

export default LoginScreen;
