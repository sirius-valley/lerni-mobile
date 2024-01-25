import { useMemo } from 'react';
import { TriviaStatusTypes } from '../utils/constants';
import { StyledText } from '../components/styled/styles';

export const useGetTriviaResultText = (
  triviaStatus: TriviaStatusTypes,
  program: string,
  points: number,
) => {
  const triviaResultText1: string = useMemo(() => {
    if (triviaStatus === 'not_started') {
      return 'Desafío Intelectual';
    } else if (triviaStatus === 'approved') {
      return 'Felicitaciones!';
    } else {
      return 'Estuviste cerca!';
    }
  }, [triviaStatus]);

  const triviaResultText2: string = useMemo(() => {
    if (triviaStatus === 'not_started') {
      return 'Pone a prueba lo que aprendiste desafiando a algun compañero y compitiendo por quien sabe mas! Ademas vas a tener la posibilidad de ganar 24 puntos!';
    } else if (triviaStatus === 'approved') {
      return `Terminaste ${program}!`;
    } else {
      return 'Hasta Einstein tropezó antes de triunfar.No te desanimes. En dos días, otra oportunidad.';
    }
  }, [triviaStatus]);

  const triviaResultText3: string = useMemo(() => {
    if (triviaStatus === 'not_started') {
      return 'Seleccionar por lo menos 1';
    } else if (triviaStatus === 'approved') {
      return `${points} puntos`;
    } else {
      return '';
    }
  }, [triviaStatus]);

  return { triviaResultText1, triviaResultText2, triviaResultText3 };
};
