import { useLocalSearchParams } from "expo-router";
import { StyledColumn, StyledRow } from "../../../../../components/styled/styles";
import BackArrow from "../../../../../../assets/icons/BackArrow";
import { useTheme } from "styled-components/native";

const StartTrivia = () => {
  const {programId} = useLocalSearchParams();
  const theme = useTheme();
    return (
      <StyledColumn css={{width: '100%', height: '100%', gap: 32}}>
        <StyledRow css={{width: '100%', justifyContent: 'left', alignItems: 'center'}}>
          <BackArrow color={theme.gray400} size={24} />
        </StyledRow>
        <StyledColumn css={{ justifyContent: 'center', alignItems: 'center'}}>

        </StyledColumn>
        <StyledRow>

        </StyledRow>

      </StyledColumn>
    )
};

export default StartTrivia;