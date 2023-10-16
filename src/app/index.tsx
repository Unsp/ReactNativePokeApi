import { Stack, useRouter } from "expo-router";
import {
  SafeAreaView
} from "react-native";
import HomeScreen from "src/screens/HomeScreen/HomeScreen";
import { colors } from "src/shared/lib/constants";

const Page = () => {
  const router = useRouter();
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

      <HomeScreen />
    </SafeAreaView>
  );
};

export default Page;
