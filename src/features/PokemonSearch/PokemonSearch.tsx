import { Text, View } from "react-native";

import { useRouter } from "expo-router";
import { useState } from "react";
import { PokemonApi } from "src/entities/pokemon/api/PokemonApi";
import recentPokemonSlice from "src/entities/pokemon/model/slice/recentPokemon.slice";
import { useAppDispatch } from "src/shared/lib/hooks/redux";
import AppButton from "src/shared/ui/AppButton/AppButton";
import AppTextInput from "src/shared/ui/AppTextInput/AppTextInput";
import { styles } from "./PokemonSearch.styles";


//There is no actual wildcard search functionality in this API, so a list of results doesn't make sense, instead adding the possibility to open a pokemon by exact name to the home screen
const PokemonSearch = () => {

  const router = useRouter();
  const [nameInput, setNameInput] = useState('');
  const [message, setMessage] = useState('');

  const [triggerFetchByName] = PokemonApi.useLazyFetchPokemonByNameQuery();



  const dispatch = useAppDispatch();
  const { pushRecent } = recentPokemonSlice.actions;

  const queryByName = async () => {
    setMessage("");
    const result = await triggerFetchByName(nameInput.toLocaleLowerCase());

    if (!result.data || result.error) {
      setMessage("Pokemon not found");
      return;
    }

    dispatch(pushRecent(result.data?.id as number));
    router.push(`/pokemon/${result.data?.name}`);
  }


  const searchPress = () => {
    if (!nameInput) {
      setMessage("Please enter a pokemon name");
      return;
    }
    queryByName();
  }


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Find pokemon by name</Text>
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <AppTextInput placeholder="Enter name" value={nameInput} onChangeText={setNameInput} />
        </View>
        <View style={styles.searchButtonContainer}>
          <AppButton text="Search" onPress={searchPress} />
        </View>
      </View>
      {message && <Text style={styles.message}>{message}</Text>}
    </View>
  );
};

export default PokemonSearch;
