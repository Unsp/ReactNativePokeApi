import { Text, View } from "react-native";

import { useRouter } from "expo-router";
import { useEffect } from "react";
import userSlice from "src/entities/user/model/slice/user.slice";
import { useAppDispatch, useAppSelector } from "src/shared/lib/hooks/redux";
import secureStorageUtils from "src/shared/lib/utils/secureStorageUtils";
import AppTextButton from "src/shared/ui/AppTextButton/AppTextButton";
import { styles } from "./HomePublic.styles";

const HomePublic = () => {
  const router = useRouter();

  const signInPress = () => {
    router.push("sign-in");
  };
  const signUpPress = () => {
    router.push("sign-up");
  };

  const users = useAppSelector((state) => state.userReducer.userList);
  const dispatch = useAppDispatch();
  const { setActiveUser } = userSlice.actions;

  const autoLogin = async () => {
    const activeUser = await secureStorageUtils.getSavedUser();

    if (activeUser) {
      const loginUser = users.find((user) => user.username === activeUser);
      dispatch(setActiveUser(loginUser));
    }
  };

  useEffect(() => {
    autoLogin();
  }, []);

  return (
    <View style={styles.container}>
      <Text>
        <AppTextButton text="Sign in" onPress={signInPress} /> to continue.
      </Text>
      <Text>
        Don't have an account?{" "}
        <AppTextButton text="Sign up here" onPress={signUpPress} />
      </Text>
    </View>
  );
};

export default HomePublic;
