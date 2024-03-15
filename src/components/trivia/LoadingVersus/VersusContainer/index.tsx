import { Dimensions } from 'react-native';
import { useTheme } from 'styled-components/native';
import { StyledBox } from '../../../styled/styles';
import { StyledTriangle } from '../../styles';

interface VersusContainerProps {
  children: React.ReactNode;
}

export const VersusContainer = ({ children }: VersusContainerProps) => {
  const theme = useTheme();
  const { width } = Dimensions.get('window');

  return (
    <StyledBox
      css={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.primary650,
        width: '100%',
        height: '100%',
      }}
    >
      <StyledTriangle />
      <StyledBox css={{ position: 'absolute', height: '100%', width: '100%', top: 0, left: 0 }}>
        {children}
      </StyledBox>
    </StyledBox>
  );
};
