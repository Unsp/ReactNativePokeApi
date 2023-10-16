import { SafeAreaView } from "react-native";
import { Stack, useGlobalSearchParams, useRouter } from "expo-router";
import { colors } from "src/shared/lib/constants";
import PokemonDetails from "src/entities/pokemon/ui/PokemonDetails/PokemonDetails";
import { useAppSelector } from "src/shared/lib/hooks/redux";

const Page = () => {

    const router = useRouter();
    const params = useGlobalSearchParams();
    
    
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
                    headerTitle: params.name as string,
                    headerTitleAlign: "center"
                }}
            />

            <PokemonDetails name={params.name as string}/>
        </SafeAreaView>
    )
}

export default Page;