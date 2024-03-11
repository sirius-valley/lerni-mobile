import { useRouter } from 'expo-router';
import { useEffect } from 'react';

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    router.push('/(auth)/triviaScreen');
  }, []);

  return (
    // <CustomError
    //   Icon={WIPIllustration}
    //   title={'Página en construcción'}
    //   content={'El contenido que querés acceder \n no esta disponible ahora.'}
    //   buttonText={'Ir a Explorar'}
    // />
    <></>
  );
}
