import { StyleSheet } from "react-native";
import { fonts, sizes } from "src/shared/lib/constants";

export const styles = StyleSheet.create({
  container: {
    marginTop: sizes.small,
  },
  header: {
    fontFamily: fonts.medium,
    fontSize: sizes.medium,
    alignSelf: "center",
  },
  listContainer: {
    marginTop: sizes.small,
  },
});
