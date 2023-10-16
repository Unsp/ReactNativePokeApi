import { StyleSheet } from "react-native";
import { colors, fonts, sizes } from "src/shared/lib/constants";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: sizes.large,
  },
  wrapper: {
    flex: 0,
    backgroundColor: colors.white,
    marginHorizontal: sizes.small,
    borderRadius: sizes.medium,
    height: 50,
    width: "100%",
  },
  wrapperError: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: colors.error,
  },
  input: {
    fontFamily: fonts.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: sizes.medium,
  },
  textError: {
    color: colors.error,
    fontFamily: fonts.regular,
    fontSize: sizes.xSmall,
    marginLeft: sizes.medium,
  },
  errorContainer: {
    width: "100%",
    marginBottom: -sizes.small,
  },
});
