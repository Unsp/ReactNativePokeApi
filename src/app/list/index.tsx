import { Stack, useRouter } from "expo-router";
import {
  SafeAreaView
} from "react-native";
import PokemonList from "src/screens/PokemonList/PokemonList";
import { colors } from "src/shared/lib/constants";
import { useAppSelector } from "src/shared/lib/hooks/redux";

const Page = () => {
  const router = useRouter();

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
          headerTitle: "Pokemon list",
          headerTitleAlign: "center",
        }}
      />

      <PokemonList />
    </SafeAreaView>
  );
};

export default Page;
