import {
  View,
  ScrollView,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { SvgUri } from "react-native-svg";
import { Provider } from "react-redux";
import LoginScreen from "src/screens/LoginScreen/LoginScreen";
import { colors } from "src/shared/lib/constants";
import SignupScreen from "src/screens/SignupScreen/SignupScreen";

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
