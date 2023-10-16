import { SafeAreaView, } from "react-native";
import { Stack, useRouter } from "expo-router";
import LoginScreen from "src/features/sign-in/LoginScreen/LoginScreen";
import { colors } from "src/shared/lib/constants";

const Page = () => {

    const router = useRouter();
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: colors.lightGrey}}>
            
            <Stack.Screen
                options={{
                    headerStyle: {backgroundColor: colors.lightGrey},
                    headerShadowVisible: false,
                    headerTitle: "Sign in",
                    headerTitleAlign: "center"
                }}
            />

            <LoginScreen/>
        </SafeAreaView>
    )
}

export default Page;