import { Text } from 'react-native'
import React, { useState } from 'react'
import LerniMainIcon from '../../../assets/icons/LerniMainIcon'
import MainContainer from '../../components/register/MainContainer'
import { StyledColumn, StyledText } from '../../components/common/styles'
import { TextInput } from '../../components/common/TextInput/TextInput'
import Button from '../../components/common/Button/Button'

const index = () => {

  const [inputValues, setInputValues] = useState<{
    email: string;
    psw: string;
  }>({
    email: '',
    psw: ''
  })

  const handleInputChange = (value: string, att: string) => {
    setInputValues((prev) => ({
      ...prev,
      [att]: value
    }))
  }

  const handleButtonPress = () => {
    alert('create account');
  }

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
        <TextInput
          value={inputValues.email}
          onChangeText={(value) => handleInputChange(value, 'email')}
          placeholder='Email'
          />
        <TextInput
          value={inputValues.psw}
          onChangeText={(value) => handleInputChange(value, 'psw')}
          placeholder='Contraseña'
        />
        <Button disabled={true} onPress={handleButtonPress}>
          Crear cuenta
        </Button>
      </StyledColumn>
    </MainContainer>
  )
}

export default index;