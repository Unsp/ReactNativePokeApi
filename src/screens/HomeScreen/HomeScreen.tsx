import { Text, View } from "react-native";

import HomePublic from "src/features/HomePublic/HomePublic";
import HomeSignedIn from "src/features/HomeSignedIn/HomeSignedIn";
import { useAppSelector } from "src/shared/lib/hooks/redux";
import { styles } from "./HomeScreen.styles";

const HomeScreen = () => {
  const { isLoggedIn } = useAppSelector((state) => state.userReducer);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to the pokemon db</Text>
      {isLoggedIn ? <HomeSignedIn /> : <HomePublic />}
    </View>
  );
};

export default HomeScreen;
