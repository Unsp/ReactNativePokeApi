import { StyleSheet } from "react-native";
import { fonts, sizes } from "src/shared/lib/constants";

export const styles = StyleSheet.create({
    container: {
        margin: sizes.small,
        marginTop: sizes.xxLarge
    },
    header: {
        fontFamily: fonts.bold,
        fontSize: sizes.large
    },
    details:{

    },
    buttonContainer: {
        marginTop: sizes.xxLarge,
        flexDirection: "row",
        height:50
    },
    button: {
        marginHorizontal:sizes.small/2
    }
    
});