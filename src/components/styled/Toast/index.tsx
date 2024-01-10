import { Pressable, Text, View } from "react-native";
import { ToastText } from "./ToastText/styles";
import { ToastContainer } from "./ToastView/styles";
import { ToastIcon } from "./ToastIcon";
import { IconInterface } from "../../../../assets/icons/types";
import Button from "../Button/Button";

interface ToastProps {
    type?: "success" | "error" | "info";
    text?: string;
    onClose: () => void;
    icon?: React.FC<IconInterface>;
}

export const CustomSuccessToast = ({type, text, onClose, icon}: ToastProps) => {
    console.log("toast component, ", type, text);
    
    return (
        <ToastContainer type={type ? type : "success"}>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 16}}>
                {/* <ToastIcon type={type} /> */}
                <View style={{ width: 189 }}>
                    <ToastText>{text ? text : "toast"}</ToastText>
                </View>
                <Pressable onPress={onClose}>
                    <Text style={{color: '#ffffff'}}>X</Text>
                </Pressable>
            </View>
        </ToastContainer>
    )
}