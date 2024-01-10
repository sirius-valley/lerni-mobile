import { FunctionComponent, useEffect } from "react";
import Toast, { BaseToast } from "react-native-toast-message";
import { StyledText } from "../components/styled/styles";
import { View } from "react-native";
import { theme } from "../utils/theme";
import { useLDispatch, useLSelector } from "../redux/hooks";
import { ToastTypes } from "../utils/constants";
import { resetToast } from "../redux/slice/utils.slice";

export const withToast = (Component: FunctionComponent<any>) => (props: any) => {
    const type = useLSelector((state) => state.utils.type)
    const dispatch = useLDispatch();
    const toastConfig = {
        success: (props: any) => (
          <BaseToast
            {...props}
            style = {{
              borderRadius: 8,
              backgroundColor: theme.success,
              paddingVertical: 12,
              paddingHorizontal: 18,
              gap: 16,
              alignItems: 'center',
              width: 189,
            }}
            contentContainerStyle = {{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
            text1Style={{
              fontFamily: theme.body2.fontFamily,
              fontSize: 14,
              fontWeight: 400,
              color: theme.white,
            }}
          />
        ),
        okay: (props: any) => (
          <View><StyledText variant='body1'>hola</StyledText></View>
        )
      };

      useEffect(() => {
        if (type) {
            Toast.show({
                type: type,
                text1: toastMap[type].title
            })

            setTimeout(() => {
                dispatch(resetToast())
            }, 2000)
        } 
      }, [type])

      const toastMap: Record<ToastTypes, {emoji: string, title: string}> = {
        "success": {
            emoji: ':)',
            title: 'Operación exitosa!'
        },
        "info": {
            emoji: 'i',
            title: 'Reiniciar para más información.'
        },
        "error": {
            emoji: ':(',
            title: 'Ha ocurrido un error, por favor intentar de nuevo!'
        }
      }

    return (
        <>
            <Toast config={toastConfig} />
            <Component {...props} />
        </>
    )
}