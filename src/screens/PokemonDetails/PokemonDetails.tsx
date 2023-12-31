import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

import { Stack } from "expo-router";
import { PokemonApi } from "src/entities/pokemon/api/PokemonApi";
import { colors } from "src/shared/lib/constants";
import { styles } from "./PokemonDetails.styles";

interface PokemonDetailsProps {
    name: string;
}

const PokemonDetails = ({ name }: PokemonDetailsProps) => {
    const { data, error, isLoading, isFetching } =
        PokemonApi.useFetchPokemonByNameQuery(name);

    if (isLoading || isFetching) {
        return <ActivityIndicator size="large" color={colors.secondary} />;
    }
    if (error) {
        return <Text>Could not load data</Text>;
    }

    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    headerTitle: data?.name,
                }}
            />
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: data?.sprites.front_default }}
                    style={styles.pokemonImage}
                />
            </View>
            <View style={styles.detailsContainer}>
                <View style={styles.typesContainer}>
                    <Text style={styles.label}>Types:</Text>
                    <Text style={styles.data}>
                        {data?.types.map((item) => item.type.name + " ")}
                    </Text>
                </View>
                <View>
                    <Text style={styles.label}>Base stats:</Text>
                    <View style={styles.statsContainer}>
                        <FlatList
                            data={data?.stats}
                            renderItem={({ item }) => (
                                <View
                                    style={styles.statContainer}
                                    key={`stat-${item.stat?.name}`}
                                >
                                    <Text style={styles.label}>{item.stat?.name}: </Text>
                                    <Text style={styles.data}>{item.base_stat}</Text>
                                </View>
                            )}
                            keyExtractor={(item) => item.stat.name}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default PokemonDetails;
