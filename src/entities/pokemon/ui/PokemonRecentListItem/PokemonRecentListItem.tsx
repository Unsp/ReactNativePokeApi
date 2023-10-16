import { useRouter } from "expo-router";
import { Image, TouchableOpacity, View } from "react-native";
import { useAppDispatch } from "src/shared/lib/hooks/redux";
import recentPokemonSlice from "../../api/recentPokemon.slice";
import { styles } from "./PokemonRecentListItem.styles";

interface PokemonRecentListItemProps {
  pokemonId: number;
}

const PokemonRecentListItem = ({ pokemonId }: PokemonRecentListItemProps) => {
  const router = useRouter();

  const dispatch = useAppDispatch();
  const { pushRecent } = recentPokemonSlice.actions;

  const onItemPress = () => {
    dispatch(pushRecent(pokemonId as number));
    router.push(`/pokemon/${pokemonId}`);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onItemPress}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
          }}
          width={50}
          height={50}
        />
      </View>
    </TouchableOpacity>
  );
};

export default PokemonRecentListItem;
