import { Stack, useRouter } from "expo-router";
import {
  SafeAreaView
} from "react-native";
import SignupScreen from "src/screens/SignupScreen/SignupScreen";
import { colors } from "src/shared/lib/constants";

const Page = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.lightGrey }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: colors.lightGrey },
          headerShadowVisible: false,
          headerTitle: "Sign up",
          headerTitleAlign: "center",
        }}
      />

      <SignupScreen />
    </SafeAreaView>
  );
};

export default Page;
