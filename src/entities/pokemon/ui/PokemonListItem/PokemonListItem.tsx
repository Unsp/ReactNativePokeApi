import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useAppDispatch } from "src/shared/lib/hooks/redux";
import recentPokemonSlice from "../../model/slice/recentPokemon.slice";
import { IPokemonListItem } from "../../model/types/pokemon.types";
import { styles } from "./PokemonListItem.styles";

interface PokemonListItemProps {
  pokemon: IPokemonListItem;
}

const PokemonListItem = ({ pokemon }: PokemonListItemProps) => {
  const regex = /^https:\/\/pokeapi.co\/api\/v2\/pokemon\/([\d]+)\/$/i;
  const router = useRouter();

  const match = regex.exec(pokemon.url);

  const id = match ? match[1] : 0;

  const dispatch = useAppDispatch();
  const { pushRecent } = recentPokemonSlice.actions;

  const onItemPress = () => {
    dispatch(pushRecent(id as number));

    router.push(`/pokemon/${pokemon.name}`);
  };

  useEffect(() => { }, []);

  return (
    <TouchableOpacity style={styles.container} onPress={onItemPress}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
          }}
          width={50}
          height={50}
        />
      </View>
      <Text style={styles.text}>{pokemon.name}</Text>
    </TouchableOpacity>
  );
};

export default PokemonListItem;
