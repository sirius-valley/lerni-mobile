import CustomError from '../../../../components/common/ErrorDisplay/CustomError';
import WIPIllustration from '../../../../../assets/icons/WIPIllustration';

export default function Page() {
  return (
    <CustomError
      Icon={WIPIllustration}
      title={'Página en construcción'}
      content={'El contenido que querés acceder \n no esta disponible ahora.'}
      buttonText={'Ir a Explorar'}
    />
  );
}
