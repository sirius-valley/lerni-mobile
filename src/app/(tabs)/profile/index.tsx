import { Text, View } from 'react-native';
import { useLDispatch } from '../../../redux/hooks';
import { showToast } from '../../../redux/slice/utils.slice';
import { ToastTypes } from '../../../utils/constants';
import Button from '../../../components/styled/Button';

export default function Page() {
  const dispatch = useLDispatch();

  const handleToast = (type: ToastTypes, text?: string) => {
    dispatch(showToast({ type, text }));
  };

  return (
    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12 }}>
      <Text>Index page of Profile Tab</Text>
      <Button
        onPress={() =>
          handleToast('error', 'Ha ocurrido un error. Por favor revisa tu conexión a internet.')
        }
        children="show error toast"
      />
      <Button
        onPress={() => handleToast('info', 'Reinicie la app para cargar más clases.')}
        children="show info toast"
      />
      <Button
        onPress={() => handleToast('success', 'La respuesta se ha enviado correctamente.')}
        children="show successful toast"
      />
    </View>
  );
}
