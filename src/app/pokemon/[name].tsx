import { Stack, useGlobalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native";
import PokemonDetails from "src/screens/PokemonDetails/PokemonDetails";
import { colors } from "src/shared/lib/constants";
import { useAppSelector } from "src/shared/lib/hooks/redux";

const Page = () => {
  const router = useRouter();
  const params = useGlobalSearchParams();

  const { isLoggedIn } = useAppSelector((state) => state.userReducer);

  if (!isLoggedIn) {
    router.push("/");
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.lightGrey }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: colors.lightGrey },
          headerShadowVisible: false,
          headerTitle: "",
          headerTitleAlign: "center",
        }}
      />

      <PokemonDetails name={params.name as string} />
    </SafeAreaView>
  );
};

export default Page;
