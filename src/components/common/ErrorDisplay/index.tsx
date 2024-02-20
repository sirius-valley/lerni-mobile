import { ErrorIllustration } from '../../../../assets/icons/ErrorIllustration';
import CustomError from './CustomError';
import { GhostIcon } from '../../../../assets/icons/GhostIcon';
import NoResults from '../../../../assets/icons/NoResults';
import ShipIllustration from '../../../../assets/icons/ShipIllustration';

interface ErrorDisplayInterface {
  type: '404' | '505' | 'no-results' | 'no-introduction';
}

const errorsAvailable = {
  '404': {
    title: 'Página no encontrada',
    content: 'Lo sentimos, no pudimos encontrar lo que estás buscando',
    Icon: ErrorIllustration,
    hasActionButton: true,
  },
  '505': {
    title: 'Error interno del servidor',
    content: 'Lo sentimos, no eres tú, somos nosotros. Algo salió mal desde nuestro lado',
    Icon: GhostIcon,
    hasActionButton: true,
  },
  'no-results': {
    title: 'No se encuentran resultados',
    content: 'Lo sentimos, no pudimos encontrar lo que estás buscando',
    Icon: NoResults,
    hasActionButton: false,
  },
  'no-introduction': {
    title: 'El conocimiento está a la espera y tú tambien',
    content: 'Todavía no tienes ningún programa asignado. Intenta de nuevo más tarde',
    Icon: ShipIllustration,
    hasActionButton: false,
  },
};

const ErrorDisplay = ({ type }: ErrorDisplayInterface) => {
  return (
    <CustomError
      Icon={errorsAvailable[type].Icon}
      title={errorsAvailable[type].title}
      content={errorsAvailable[type].content}
      hasActionButton={errorsAvailable[type].hasActionButton}
    />
  );
};

export default ErrorDisplay;
