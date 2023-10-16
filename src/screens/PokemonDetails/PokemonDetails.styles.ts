import { StyleSheet } from "react-native";
import { colors, fonts, sizes } from "src/shared/lib/constants";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  imageContainer: {
    backgroundColor: colors.lightWhite,
    width: 128,
    borderRadius: sizes.large,
  },
  detailsContainer: {
    width: "100%",
    backgroundColor: colors.lightWhite,
    padding: sizes.small,
    borderRadius: sizes.large,
    marginTop: sizes.small,
  },
  pokemonImage: {
    width: 128,
    height: 128,
  },
  typesContainer: {
    flexDirection: "row",
    marginBottom: sizes.small,
  },
  label: {
    fontFamily: fonts.bold,
  },
  data: {
    fontFamily: fonts.regular,
    paddingLeft: sizes.small,
  },
  statContainer: {
    flexDirection: "row",
    width: "50%",
  },
  statsContainer: {},
});
