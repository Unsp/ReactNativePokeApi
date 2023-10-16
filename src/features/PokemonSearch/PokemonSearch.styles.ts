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
  searchContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
    gap: sizes.small,
    marginVertical: sizes.small
  },
  searchInputContainer: {
    marginTop: -sizes.large,
    width: 'auto',
    flex: 1
  },
  searchButtonContainer: {
    height: 50,
    width: 70
  },
  message: {
    fontFamily: fonts.medium,
    alignSelf: 'center'
  }
});
