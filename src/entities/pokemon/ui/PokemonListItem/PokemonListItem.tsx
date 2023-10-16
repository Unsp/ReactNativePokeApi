import { IPokemonListItem } from "../../model/types/pokemon.types";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "./PokemonListItem.styles";
import { useAppDispatch } from "src/shared/lib/hooks/redux";
import recentPokemonSlice from "../../api/recentPokemon.slice";
import { useEffect } from "react";


interface PokemonListItemProps {
    pokemon: IPokemonListItem
}

const PokemonListItem = ({pokemon}: PokemonListItemProps) => {

    const regex = /^https:\/\/pokeapi.co\/api\/v2\/pokemon\/([\d]+)\/$/i;
    const router = useRouter();

    const match = regex.exec(pokemon.url);
    
    const id = match ? match[1] : 0;

    const dispatch = useAppDispatch();
    const {pushRecent} = recentPokemonSlice.actions;

    const onItemPress = () => {
        dispatch(pushRecent(id as number));

        router.push(`/pokemon/${pokemon.name}`)
    }
    
    
    useEffect(()=>{
    }, [])

    return(
    <TouchableOpacity style={styles.container} onPress={onItemPress}>
        <View style={styles.imageContainer}>
            <Image
                source={{uri:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}}
                width={50}
                height={50}
            />
        </View>
        <Text style={styles.text}>{pokemon.name}</Text>
    </TouchableOpacity>
    )
}

export default PokemonListItem;