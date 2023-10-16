import { useRouter } from "expo-router";
import { SafeAreaView, Text, View } from "react-native";
import AppButton from "src/shared/ui/AppButton/AppButton";
import { styles } from "./ErrorFallback.styles";

interface ErrorFallbackProps {
  error: Error;
  resetError(): void;
}

const ErrorFallback = (props: ErrorFallbackProps) => {
  const router = useRouter();
  const goHome = () => {
    router.push("/");
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.header}>Something went wrong!</Text>
        <Text style={styles.details}>{props.error.toString()}</Text>
        <View style={styles.buttonContainer}>
          <AppButton style={styles.button} onPress={goHome} text={"Go home"} />
          <AppButton
            style={styles.button}
            onPress={props.resetError}
            text={"Try again"}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ErrorFallback;
