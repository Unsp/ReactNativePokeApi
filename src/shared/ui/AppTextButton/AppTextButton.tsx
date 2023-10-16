import { Text } from "react-native";

import { styles } from "./AppTextButton.styles";

interface CustomButtonProps
  extends React.ComponentProps<typeof Text> {
  text?: string;
}

const AppTextButton = (props: CustomButtonProps) => {
  const { style, text, ...other } = props;

  return (
    <Text style={styles.button} {...other}>
      <Text style={styles.buttonText}>{text}</Text>
    </Text>
  );
};

export default AppTextButton;
