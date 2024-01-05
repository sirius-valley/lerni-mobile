import { Text } from 'react-native'
import React, { useState } from 'react'
import LerniMainIcon from '../../../../assets/icons/LerniMainIcon'
import MainContainer from '../../../components/register/MainContainer'
import { StyledColumn, StyledRow, StyledText } from '../../../components/common/styles'
import { TextInput } from '../../../components/common/TextInput/TextInput'
import Button from '../../../components/common/Button/Button';
import {
  Formik,
} from 'formik';
import * as Yup from 'yup';
import PasswordValidationDisplay from '../../../components/register/PasswordValidationDisplay'

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/@[^.]*\./)
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/^(?=.*[A-Z])(?=.*[0-9!@#$%^&*()_+|~=\`{}\[\]:;"'<>,.?/\\-]).+$/, 'Password must contain at least one uppercase letter and one number or symbol')
    .required('Password is required'),
});

const index = () => {

  return (
    <MainContainer>
      <LerniMainIcon />
      <StyledText variant='h2' css={{ marginTop: '10%' }}>
        Crear cuenta
      </StyledText>
      <StyledColumn css={{
        gap: '16px',
        width: '100%',
        padding: '16px',
      }}>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={values => alert(JSON.stringify(values, null, 3))}
          validationSchema={SignupSchema}
        >
          {({ handleChange, handleBlur, handleSubmit, values, isValid, errors, touched }) => (
            <>
              <TextInput
                value={values.email}
                onChangeText={handleChange('email')}
                placeholder='Email'
                onBlur={() => handleBlur('email')}
                error={!!errors.email && touched.email}
              />
              <TextInput
                value={values.password}
                onChangeText={handleChange('password')}
                placeholder='Contraseña'
                onBlur={() => handleBlur('password')}
                error={!!errors.password}
                type="password"
              />
              {errors.password && touched.password && (
                <StyledColumn>
                  <StyledText>
                    {errors.password}
                  </StyledText>
                </StyledColumn>
              )}
              <PasswordValidationDisplay
                password={values.password}
              />
              <Button
                disabled={!isValid || !values.email || !values.password}
                onPress={handleSubmit}
                variant={'dark'}
              >
                Crear cuenta
              </Button>
            </>
          )}
        </Formik>
      </StyledColumn>
    </MainContainer>
  )
}

export default index;