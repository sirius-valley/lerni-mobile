import { useTheme } from 'styled-components/native';
import { StyledBox, StyledColumn, StyledRow, StyledText } from '../../styled/styles';
import RhombusIcon from '../../../../assets/icons/RhombusIcon';

export const ProfileRanking = () => {
  const theme = useTheme();

  return (
    <StyledBox
      style={{
        paddingTop: 16,
        gap: 16,
        borderRadius: 8,
        backgroundColor: theme.primary650,
      }}
    >
      <StyledColumn
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          gap: 16,
        }}
      >
        <StyledColumn
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <StyledText variant="body3" style={{ color: theme.white }}>
            {'Mis puntos'}
          </StyledText>
          <StyledRow style={{ gap: 8, alignItems: 'center' }}>
            <RhombusIcon size={18} />
            <StyledText variant="h1" style={{ color: theme.white }}>
              {'700 Puntos'}
            </StyledText>
          </StyledRow>
        </StyledColumn>
        <StyledBox
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 8,
            paddingBottom: 8,
            gap: 10,
            backgroundColor: theme.primary500,
            borderBottomEndRadius: 8,
            borderBottomStartRadius: 8,
            width: '100%',
          }}
        >
          <StyledText style={{ color: theme.primary650, fontFamily: 'Roboto-Bold', fontSize: 14 }}>
            {'Posicion #10'}
          </StyledText>
        </StyledBox>
      </StyledColumn>
    </StyledBox>
  );
};
