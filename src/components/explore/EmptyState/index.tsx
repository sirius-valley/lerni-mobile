import React from 'react';
import ShipIllustration from '../../../../assets/icons/ShipIllustration';
import { StyledColumn, StyledText } from '../../styled/styles';
import { Dimensions } from 'react-native';

const EmptyState = () => {
  const height = Dimensions.get('window').height - 250;
  return (
    <StyledColumn
      css={{
        gap: 32,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
        height: height,
      }}
    >
      <ShipIllustration />
      <StyledColumn css={{ gap: 8 }}>
        <StyledText variant="h2" color={'white'} css={{ textAlign: 'center' }}>
          {'El conocimiento está a \n la espera y tu también'}
        </StyledText>
        <StyledText variant="body1" color={'gray400'} css={{ textAlign: 'center' }}>
          {'Todavía no tienes ningún programa \n asignado. Intenta de nuevo más tarde'}
        </StyledText>
      </StyledColumn>
    </StyledColumn>
  );
};
export default EmptyState;
