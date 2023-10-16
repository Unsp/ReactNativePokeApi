import { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { styles } from "./PokemonList.styles";
import { colors } from "src/shared/lib/constants";
import Pagination from "src/shared/ui/Pagination/Pagination";
import PokemonListItem from "src/entities/pokemon/ui/PokemonListItemRename/PokemonListItem";
import { PokemonApi } from "src/entities/pokemon/api/PokemonApi";
import { useAppSelector } from "src/shared/lib/hooks/redux";


const PokemonList = () => {

    const pageSize = 100;

    const [page, setPage] = useState(0);

    const {data, error, isLoading, isFetching} = PokemonApi.useFetchPokemonListQuery({limit:pageSize, offset:pageSize * page});



    if(isLoading || isFetching) {
        return (<ActivityIndicator size='large' color={colors.secondary}/>)
    }

    if(error) {
        return (
            <Text>
                Could not load data
            </Text>
        )
    }


    return (
        <View>
                <FlatList  style={styles.list}
                    data={data?.results ?? []}
                    renderItem={({item}) => (<PokemonListItem pokemon={item}/>)}
                    keyExtractor={item => item.name}
                    nestedScrollEnabled
                />
                <View style={styles.footer}>
                    <Pagination page={page} totalCount={data?.count ?? 0} pageSize={pageSize} onPagePress={setPage} />
                </View>
        </View>
    )
}

export default PokemonList;