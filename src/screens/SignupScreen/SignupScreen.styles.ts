import { StyleSheet } from "react-native";
import { colors, sizes } from "src/shared/lib/constants";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: sizes.small,
    backgroundColor: colors.lightGrey,
    alignItems: "center",
    flexDirection: "row",
  },
});
