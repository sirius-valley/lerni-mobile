import React, { useEffect, useRef } from 'react';
import LerniMainIcon from '../../../../assets/icons/LerniMainIcon';
import { StyledBox, StyledColumn, StyledRow, StyledText } from '../../../components/styled/styles';
import { TextInput } from '../../../components/styled/TextInput';
import Button from '../../../components/styled/Button';
import { Formik } from 'formik';
import * as Yup from 'yup';
import PasswordValidationDisplay from '../../../components/register/PasswordValidationDisplay';
import { useRouter } from 'expo-router';
import { useRegisterMutation } from '../../../redux/service/auth.service';
import { useLDispatch } from '../../../redux/hooks';
import { showToast } from '../../../redux/slice/utils.slice';
import { CustomError } from '../../../redux/service/api';
import ChevronLeftIcon from '../../../../assets/icons/ChevronLeftIcon';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView } from 'react-native';
import { useTheme } from 'styled-components/native';
import { useKeyboard } from '@react-native-community/hooks';

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
  const [register, { isLoading, error }] = useRegisterMutation();
  const router = useRouter();
  const theme = useTheme();

  const dispatch = useLDispatch();
  const goToLoginScreen = () => router.replace('/(app)/login');

  const virtualRef = useRef<ScrollView | null>(null);
  const { keyboardShown } = useKeyboard();

  const moveToEnd = () => {
    if (!virtualRef?.current) return;

    setTimeout(() => virtualRef?.current?.scrollToEnd(), 150);
  };

  useEffect(() => {
    if (error) {
      const customError = error as CustomError;
      dispatch(showToast({ type: 'error', text: customError.data?.message ?? '' }));
    }
  }, [error]);

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
                      disabled={isLoading}
                      css={{
                        width: '100%',
                      }}
                    />
                    <TextInput
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
                      loading={isLoading}
                      css={{
                        marginTop: '8px',
                      }}
                    >
                      Crear cuenta
                    </Button>
                    <StyledRow
                      css={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}
                    >
                      <Pressable onPress={goToLoginScreen}>
                        <StyledText
                          css={{
                            textDecorationLine: 'underline',
                            color: theme.primary950,
                            alignContent: 'center',
                          }}
                        >
                          Ya tengo cuenta
                        </StyledText>
                      </Pressable>
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

export default RegisterScreen;
