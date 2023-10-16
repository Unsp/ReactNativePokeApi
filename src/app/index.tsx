import {
  View,
  ScrollView,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { colors } from "src/shared/lib/constants";
import HomeScreen from "src/screens/HomeScreen/HomeScreen";

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
