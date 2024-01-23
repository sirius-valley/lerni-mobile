import { useTheme } from "styled-components/native";

export const useGetNameColor = (author: number) => {
    const theme = useTheme();
  if (author < 5) {
     return theme.primary200;
  } else if (author >= 5 && author <= 8) {
     return theme.red500;
  } else {
     return theme.success;
  }
 }
 