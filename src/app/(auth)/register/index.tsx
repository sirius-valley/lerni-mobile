import { useNavigation, useRouter } from "expo-router"

export const Register = () => {
    const navigate = useRouter();
    const handlePress = () => {
        navigate.push('/');
    }
    return (
        <></>
    )
}