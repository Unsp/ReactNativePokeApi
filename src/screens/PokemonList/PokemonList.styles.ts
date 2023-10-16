import { StyleSheet } from "react-native";
import { colors, sizes } from "src/shared/lib/constants";

export const styles = StyleSheet.create({
  list: {
    marginBottom: 40,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: sizes.small / 2,
    backgroundColor: colors.lightGrey,
  },
});
