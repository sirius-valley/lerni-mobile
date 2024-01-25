import { useMemo } from 'react';
import { TriviaStatusTypes } from '../utils/constants';
import { StyledText } from '../components/styled/styles';

export const useGetTriviaResultText = (
  triviaStatus: TriviaStatusTypes,
  program: string,
  points: number,
) => {
  const ResultText1: string = useMemo(() => {
    if (triviaStatus === 'not_started') {
      return 'Desafío Intelectual';
    } else if (triviaStatus === 'approved') {
      return 'Felicitaciones!';
    } else {
      return 'Estuviste cerca!';
    }
  }, [triviaStatus]);

  const ResultText2: string = useMemo(() => {
    if (triviaStatus === 'not_started') {
      return 'Pone a prueba lo que aprendiste desafiando a algun compañero y compitiendo por quien sabe mas! ';
    } else if (triviaStatus === 'approved') {
      return `Terminaste ${program}!`;
    } else {
      return 'Hasta Einstein tropezó antes de triunfar. ';
    }
  }, [triviaStatus]);

  const ResultText3: string = useMemo(() => {
    if (triviaStatus === 'not_started') {
      return 'Ademas vas a tener la posibilidad de ganar ';
    } else if (triviaStatus === 'approved') {
      return 'Ganaste ';
    } else {
      return 'No te desanimes. En dos días, otra oportunidad.';
    }
  }, [triviaStatus]);

  const ResultText4: string = useMemo(() => {
    if (triviaStatus === 'not_started') {
      return '24 puntos';
    } else if (triviaStatus === 'approved') {
      return ` ${points} puntos!`;
    } else {
      return '';
    }
  }, [triviaStatus]);

  const ResultText5: string = useMemo(() => {
    if (triviaStatus === 'not_started') {
      return '!';
    } else if (triviaStatus === 'approved') {
      return ``;
    } else {
      return '';
    }
  }, [triviaStatus]);

  return { ResultText1, ResultText2, ResultText3, ResultText4, ResultText5 };
};
