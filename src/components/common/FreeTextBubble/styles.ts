import styled from "styled-components/native";
import { StyledColumn, StyledRow } from "../../styled/styles";

export const StyledFreeTextContainer = styled(StyledRow)`
  border-color: ${({ theme }) => theme.primary500};
  height: fit-content;
  width: 100%;
  border-width: 1px;
  border-radius: 8px;
  padding: 12px 8px 8px 0px;
`;

export const StyledRightColumn = styled(StyledColumn)`
  width: 20%;
  height: fit-content;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;