import { useTheme } from 'styled-components/native';
import ChevronLeftIcon from '../../../../assets/icons/ChevronLeftIcon';
import { StyledBox, StyledLine, StyledRow, StyledText } from '../../styled/styles';
import { Pressable } from 'react-native';

interface HeaderProps {
  title: string;
  onPress: () => void;
}

export const Header = ({ title, onPress }: HeaderProps) => {
  const theme = useTheme();
  return (
    <StyledBox style={{ gap: 8, alignItems: 'flex-start' }}>
      <StyledRow
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          gap: 24,
          paddingTop: 6,
          paddingBottom: 6,
          paddingLeft: 2,
          paddingRight: 2,
        }}
      > 
        <Pressable onPress={onPress}>
          <ChevronLeftIcon color={theme.gray400} />
        </Pressable>
        <StyledText
          style={{
            fontSize: 16,
            fontFamily: 'Roboto-Medium',
            fontWeight: '500',
            color: theme.gray100,
          }}
        >
          {title}
        </StyledText>
      </StyledRow>
      <StyledLine />
    </StyledBox>
  );
};
