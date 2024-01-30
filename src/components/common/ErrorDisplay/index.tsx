import { ErrorIllustration } from '../../../../assets/icons/ErrorIllustration';
import CustomError from './CustomError';
import { GhostIcon } from '../../../../assets/icons/GhostIcon';
import { FC } from 'react';

interface ErrorDisplayInterface {
  type: '404' | '505';
}

const errorsAvailable = {
  '404': {
    title: 'Página no encontrada',
    content: 'Lo sentimos, no pudimos encontrar lo que estás buscando',
    Icon: ErrorIllustration,
  },
  '505': {
    title: 'Error interno del servidor',
    content: 'Lo sentimos, no eres tú, somos nosotros. Algo salió mal desde nuestro lado',
    Icon: GhostIcon,
  },
};

const ErrorDisplay = ({ type }: ErrorDisplayInterface) => {
  return (
    <CustomError
      Icon={errorsAvailable[type].Icon}
      title={errorsAvailable[type].title}
      content={errorsAvailable[type].content}
    />
  );
};

export default ErrorDisplay;
