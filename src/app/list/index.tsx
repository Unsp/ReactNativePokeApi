import { View, ScrollView, SafeAreaView, Text, TouchableOpacity } from "react-native";
import { Stack, useRouter } from "expo-router";
import { colors } from "src/shared/lib/constants";
import PokemonList from "src/widgets/pokemon/PokemonList/PokemonList";
import { useAppSelector } from "src/shared/lib/hooks/redux";

const Page = () => {

    const router = useRouter();
    
    const {isLoggedIn} = useAppSelector(state => state.userReducer)

    if(!isLoggedIn) {
        router.push('/')
    }

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: colors.lightGrey}}>
            
            <Stack.Screen
                options={{
                    headerStyle: {backgroundColor: colors.lightGrey},
                    headerShadowVisible: false,
                    headerTitle: "Pokemon list",
                    headerTitleAlign: "center"
                }}
            />

            <PokemonList/>
        </SafeAreaView>
    )
}

export default Page;