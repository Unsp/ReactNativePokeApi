import { StyleSheet } from "react-native";
import { colors, sizes } from "src/shared/lib/constants";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: sizes.large,
    backgroundColor: colors.white,
    padding: sizes.small,
    margin: sizes.small / 2,
  },
  imageContainer: {
    backgroundColor: colors.lightWhite,
    borderRadius: sizes.small,
  },
});
