import { rgba } from 'polished';
import { StyledBox } from '../../src/components/styled/styles';
import BoltIcon from './BoltIcon';
import { useTheme } from 'styled-components/native';
import { VSIcon } from './VSIcon';
import { IconInterface } from './types';
import { LerniMainIconTransparent } from './LerniMainIconTransparent';

export const TriviaLoaderIcon = ({ size, color }: IconInterface) => {
  const theme = useTheme();
  return (
    <StyledBox
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 170,
      }}
    >
      <LerniMainIconTransparent color={color} />
      <StyledBox
        css={{
          zIndex: 1,
          position: 'absolute',
          top: 65,
          left: 52,
        }}
      >
        <BoltIcon size={66} color={rgba(theme.primary400, 0.3)} />
      </StyledBox>
      <StyledBox
        css={{
          zIndex: 2,
          position: 'absolute',
          top: 89,
          left: 75,
        }}
      >
        <VSIcon />
      </StyledBox>
    </StyledBox>
  );
};
