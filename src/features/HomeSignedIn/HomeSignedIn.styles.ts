import { StyleSheet } from "react-native";
import { fonts, sizes } from "src/shared/lib/constants";

export const styles = StyleSheet.create({
  listContainer: {
    height: 50,
    width: "100%",
    marginTop: sizes.large,
  },
  userText: {
    fontFamily: fonts.medium,
    alignSelf: "center",
  },
});
