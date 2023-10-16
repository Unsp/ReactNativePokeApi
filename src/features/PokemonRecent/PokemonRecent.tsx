import { FlatList, Text, View } from "react-native";

import PokemonRecentListItem from "src/entities/pokemon/ui/PokemonRecentListItem/PokemonRecentListItem";
import { useAppSelector } from "src/shared/lib/hooks/redux";
import { styles } from "./PokemonRecent.styles";

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
