import { Text, TextInput, View, ViewStyle } from "react-native";

import { styles } from "./AppTextInput.styles";

interface CustomTextInputProps extends React.ComponentProps<typeof TextInput> {
  error?: string;
}

const AppTextInput = (props: CustomTextInputProps) => {
  const { error, ...other } = props;

  const wrapperStyle: ViewStyle[] = [styles.wrapper];
  if (error) {
    wrapperStyle.push(styles.wrapperError);
  }

  return (
    <View style={styles.container}>
      <View style={wrapperStyle}>
        <TextInput style={styles.input} {...other} />
      </View>

      {error && (
        <View style={styles.errorContainer}>
          <Text style={styles.textError}>{error}</Text>
        </View>
      )}
    </View>
  );
};

export default AppTextInput;
