import React, { useEffect, useRef } from 'react';
import LerniMainIcon from '../../../../assets/icons/LerniMainIcon';
import { StyledBox, StyledColumn, StyledRow, StyledText } from '../../../components/styled/styles';
import { TextInput } from '../../../components/styled/TextInput';
import Button from '../../../components/styled/Button';
import { useTheme } from 'styled-components';
import { useLoginMutation } from '../../../redux/service/auth.service';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'expo-router';
import { useLDispatch } from '../../../redux/hooks';
import { CustomError } from '../../../redux/service/api';
import { showToast } from '../../../redux/slice/utils.slice';
import { useLazyMeQuery } from '../../../redux/service/student.service';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useKeyboard } from '@react-native-community/hooks';

const SigninSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/@[^.]*\./)
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[A-Z])(?=.*[0-9!@#$%^&*()_+|~=\`{}\[\]:;"'<>,.?/\\-]).+$/,
      'Password must contain at least one uppercase letter and one number or symbol',
    )
    .required('Password is required'),
});

const LoginScreen = () => {
  const theme = useTheme();
  const [login, { isLoading, error }] = useLoginMutation();
  const router = useRouter();
  const [fetch, { data }] = useLazyMeQuery();

  const dispatch = useLDispatch();
  const virtualRef = useRef<ScrollView | null>(null);
  const { keyboardShown } = useKeyboard();

  const moveToEnd = () => {
    if (!virtualRef?.current) return;

    setTimeout(() => virtualRef?.current?.scrollToEnd(), 150);
  };
  const goToRegisterScreen = () => router.replace('/(app)/register');
  useEffect(() => {
    if (error) {
      const customError = error as CustomError;
      dispatch(showToast({ type: 'error', text: customError.data?.message ?? '' }));
    }
  }, [error]);
  const handleLogin = (values: any) => {
    login(values).then(() => fetch());
  };

  useEffect(() => {
    if (keyboardShown) {
      moveToEnd();
    }
  }, [keyboardShown]);

  return (
    <StyledBox
      css={{
        background: theme.primary500,
        width: '100%',
        height: '100%',
      }}
    >
      <KeyboardAvoidingView
        enabled
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={10}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          ref={(ref) => {
            virtualRef.current = ref;
          }}
        >
          <StyledColumn css={{ alignItems: 'center', paddingTop: '50%' }}>
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
                onSubmit={(values) => handleLogin(values)}
                validationSchema={SigninSchema}
              >
                {({ handleChange, handleBlur, handleSubmit, values, isValid, errors, touched }) => (
                  <>
                    <TextInput
                      testID={'email-input'}
                      value={values.email}
                      onChangeText={handleChange('email')}
                      placeholder="Email"
                      onBlur={() => handleBlur('email')}
                      error={false}
                      disabled={isLoading}
                      css={{
                        width: '100%',
                      }}
                    />
                    <StyledColumn>
                      <TextInput
                        testID={'password-input'}
                        value={values.password}
                        onChangeText={handleChange('password')}
                        placeholder="Contraseña"
                        onBlur={() => handleBlur('password')}
                        error={false}
                        type="password"
                        disabled={isLoading}
                        css={{
                          width: '100%',
                        }}
                      />
                      {/* <StyledText
                        css={{
                          textAlign: 'right',
                          color: theme.white,
                          marginTop: '8px',
                          textDecorationLine: 'underline',
                        }}
                        onPress={() => alert('to be defined')}
                      >
                        Olvidaste tu contraseña?
                      </StyledText> */}
                    </StyledColumn>
                    <Button
                      testID={'login-btn'}
                      disabled={!isValid || !values.email || !values.password}
                      onPress={handleSubmit}
                      variant={'dark'}
                      loading={isLoading}
                      css={{
                        marginTop: '8px',
                      }}
                    >
                      Iniciar Sesión
                    </Button>
                    <StyledRow css={{ justifyContent: 'center' }}>
                      <StyledText onPress={() => alert('to be defined')}>
                        No tenés cuenta?{' '}
                      </StyledText>
                      <StyledText
                        css={{ textDecorationLine: 'underline' }}
                        onPress={goToRegisterScreen}
                      >
                        Crear una ahora
                      </StyledText>
                    </StyledRow>
                  </>
                )}
              </Formik>
            </StyledColumn>
          </StyledColumn>
        </ScrollView>
      </KeyboardAvoidingView>
    </StyledBox>
  );
};

export default LoginScreen;
