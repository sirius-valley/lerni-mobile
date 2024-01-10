import { Icon } from "@expo/vector-icons/build/createIconSet";
import { useState } from "react";
import { Image, Text, View, Pressable } from "react-native";
import { ToastProps } from "react-native-toast-message";

export const ToastIcon = ({type}: ToastProps) => {
    const [iconState, setIconState] = useState("")

    if (type === "success") return 
    if (type === "error") return
    if (type === "info") return

    console.log(iconState);
}