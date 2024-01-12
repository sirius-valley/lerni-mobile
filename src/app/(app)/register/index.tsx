import React, { useEffect, useState } from 'react';
import LerniMainIcon from '../../../../assets/icons/LerniMainIcon';
import MainContainer from '../../../components/register/MainContainer';
import { StyledColumn, StyledText } from '../../../components/styled/styles';
import { TextInput } from '../../../components/styled/TextInput';
import Button from '../../../components/styled/Button';
import { Formik } from 'formik';
import * as Yup from 'yup';
import PasswordValidationDisplay from '../../../components/register/PasswordValidationDisplay';
import { useRouter } from 'expo-router';
import { useRegisterMutation } from '../../../redux/service/auth.service';
import { useLDispatch, useLSelector } from '../../../redux/hooks';
import { resetToast, showToast } from '../../../redux/slice/utils.slice';
import { authActions } from '../../../redux/slice/auth.slice';

const SignupSchema = Yup.object().shape({
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

const RegisterScreen = () => {
  const [register, registerRequestData] = useRegisterMutation();
  const router = useRouter();

  const errorMessage = useLSelector((state) => state.auth.registerErrorMessage);
  const dispatch = useLDispatch();
  const goToLoginScreen = () => router.replace('/(app)/login');

  useEffect(() => {
    errorMessage.length > 0 && dispatch(showToast({ type: 'error', text: errorMessage }));
  }, [errorMessage]);

  useEffect(() => {
    return () => {
      dispatch(authActions.resetErrorMessage());
    };
  }, []);

  return (
    <MainContainer>
      <LerniMainIcon />
      <StyledText variant="h2" css={{ marginTop: '14%' }}>
        Crear cuenta
      </StyledText>
      <StyledColumn
        css={{
          gap: '16px',
          width: '100%',
          padding: '20px',
        }}
      >
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => register(values)}
          validationSchema={SignupSchema}
        >
          {({ handleChange, handleBlur, handleSubmit, values, isValid, errors, touched }) => (
            <>
              <TextInput
                value={values.email}
                onChangeText={handleChange('email')}
                placeholder="Email"
                onBlur={() => handleBlur('email')}
                error={!!errors.email && touched.email}
                disabled={registerRequestData.isLoading}
                css={{
                  width: '100%',
                }}
              />
              <TextInput
                value={values.password}
                onChangeText={handleChange('password')}
                placeholder="Contraseña"
                onBlur={() => handleBlur('password')}
                error={!!errors.password}
                type="password"
                disabled={registerRequestData.isLoading}
                css={{
                  width: '100%',
                }}
              />
              {errors.password && touched.password && (
                <StyledColumn>
                  <StyledText>{errors.password}</StyledText>
                </StyledColumn>
              )}
              {values.password.length > 0 && (
                <PasswordValidationDisplay password={values.password} />
              )}
              <Button
                disabled={!isValid || !values.email || !values.password}
                onPress={handleSubmit}
                variant={'dark'}
                loading={registerRequestData.isLoading}
                css={{
                  marginTop: '8px',
                }}
              >
                Crear cuenta
              </Button>
            </>
          )}
        </Formik>
        <StyledText css={{ textDecorationLine: 'underline' }} onPress={goToLoginScreen}>
          volver
        </StyledText>
      </StyledColumn>
    </MainContainer>
  );
};

export default RegisterScreen;
