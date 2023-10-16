import { Text, View } from "react-native";

import { useRouter } from "expo-router";
import userSlice from "src/entities/user/model/slice/user.slice";
import PokemonRecent from "src/features/PokemonRecent/PokemonRecent";
import { useAppDispatch, useAppSelector } from "src/shared/lib/hooks/redux";
import secureStorageUtils from "src/shared/lib/utils/secureStorageUtils";
import AppButton from "src/shared/ui/AppButton/AppButton";
import AppTextButton from "src/shared/ui/AppTextButton/AppTextButton";
import { styles } from "./HomeSignedIn.styles";

const HomeSignedIn = () => {
  const router = useRouter();

  const user = useAppSelector((state) => state.userReducer.activeUser);

  const dispatch = useAppDispatch();
  const { setActiveUser } = userSlice.actions;

  const listPress = () => {
    router.push("list");
  };

  const signoutPress = () => {
    secureStorageUtils.deleteSavedUser();
    dispatch(setActiveUser());
  };

  return (
    <View>
      <Text style={styles.userText}>
        Logged in as {user?.username}. Not you?{" "}
        <AppTextButton text="Sign out" onPress={signoutPress} />
      </Text>
      <PokemonRecent />

      <View style={styles.listContainer}>
        <AppButton text="Open full list" onPress={listPress} />
      </View>
    </View>
  );
};

export default HomeSignedIn;
