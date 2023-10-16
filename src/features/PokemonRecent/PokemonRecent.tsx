import { View, Text, FlatList } from "react-native";

import { styles } from "./PokemonRecent.styles";
import PokemonRecentListItem from "src/entities/pokemon/ui/PokemonRecentListItem/PokemonRecentListItem";
import { IPokemonListItem } from "src/entities/pokemon/model/types/pokemon.types";
import recentPokemonSlice from "src/entities/pokemon/api/recentPokemon.slice";
import { useAppSelector } from "src/shared/lib/hooks/redux";

const PokemonRecent = () => {
  const data = useAppSelector((state) => state.recentPokemonReducer.pokemonIds);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Recently viewed pokemon</Text>
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => <PokemonRecentListItem pokemonId={item} />}
          keyExtractor={(item) => `recent-${item}`}
          horizontal={true}
        />
      </View>
    </View>
  );
};

export default PokemonRecent;
