import React, { useEffect, useRef } from 'react';
import LerniMainIcon from '../../../../assets/icons/LerniMainIcon';
import { StyledBox, StyledColumn, StyledText } from '../../../components/styled/styles';
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
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
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

  // const BackIcon = () => {
  //   return (
  //     <Pressable
  //       onPress={goToLoginScreen}
  //       style={{
  //         display: 'flex',
  //         marginLeft: '5%',
  //         width: 22,
  //         alignItems: 'center',
  //         justifyContent: 'center',
  //       }}
  //     >
  //       <ChevronLeftIcon color={theme.primary950} size={20} />
  //     </Pressable>
  //   );
  // };

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
          <StyledColumn css={{ alignItems: 'center', paddingTop: '30%' }}>
            <LerniMainIcon />
            <StyledText variant="h2" css={{ marginTop: '20%' }}>
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
                    <Button
                      onPress={goToLoginScreen}
                      variant={'primary'}
                      loading={isLoading}
                      css={{
                        backgroundColor: 'transparent',
                        alignItems: 'center'
                      }}
                      icon={ChevronLeftIcon}
                      iconColor="primary950"
                    >
                      {<StyledText variant='body2' css={{color: theme.primary950, alignContent: 'center'}}>Ya tengo cuenta</StyledText>}
                    </Button>
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
