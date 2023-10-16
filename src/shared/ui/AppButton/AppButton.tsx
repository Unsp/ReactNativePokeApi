import { Text, TouchableOpacity } from "react-native"

import { styles } from "./AppButton.styles";

interface CustomButtonProps extends React.ComponentProps<typeof TouchableOpacity> {
    text?: string
    color?: 'primary' | 'secondary'
}

const AppButton = (props: CustomButtonProps) => {
    const {
        style,
        text,
        ...other
    } = props


    return (
        <TouchableOpacity style={[styles.button, style]} {...other}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

export default AppButton;