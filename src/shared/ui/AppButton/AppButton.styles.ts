import { StyleSheet } from "react-native";
import { colors, fonts, sizes } from "src/shared/lib/constants";

export const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: colors.primary,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: sizes.medium,
  },
  buttonText: {
    fontSize: sizes.medium,
    color: colors.white,
    fontFamily: fonts.bold,
  },
});
