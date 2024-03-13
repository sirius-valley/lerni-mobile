import { useEffect } from 'react';
import WIPIllustration from '../../../../../assets/icons/WIPIllustration';
import CustomError from '../../../../components/common/ErrorDisplay/CustomError';
import ErrorDisplay from '../../../../components/common/ErrorDisplay';

export default function Page() {

  useEffect

  return (
    <CustomError
      Icon={WIPIllustration}
      title={'Página en construcción'}
      content={'El contenido que querés acceder \n no esta disponible ahora.'}
      buttonText={'Ir a Explorar'}
    />
  );
}
