import { StyleSheet } from "react-native";
import { colors, fonts, sizes } from "src/shared/lib/constants";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 30,
  },
  pageButtonContainer: {
    width: 30,
    marginHorizontal: sizes.small / 2,
  },
  pageButton: {
    backgroundColor: colors.secondary,
  },
  activeButton: {
    backgroundColor: colors.primary,
  },
});
