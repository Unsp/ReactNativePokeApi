import { View, Text } from "react-native";

import { styles } from "./LoginScreen.styles";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "src/shared/lib/hooks/redux";
import { Stack, useRouter } from "expo-router";
import { compareHashedPassword } from "src/shared/lib/utils/passwordUtils";
import userSlice from "src/entities/user/api/user.slice";
import AppTextInput from "src/shared/ui/AppTextInput/AppTextInput";
import AppButton from "src/shared/ui/AppButton/AppButton";
import { system } from "src/shared/lib/constants";
import { IUser } from "src/entities/user/types/user.types";
import secureStorageUtils from "src/shared/lib/utils/secureStorageUtils";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const users = useAppSelector((state) => state.userReducer.userList);
  const dispatch = useAppDispatch();
  const { setActiveUser } = userSlice.actions;
  const router = useRouter();

  const autoLogin = async (user: IUser) => {};

  const onLoginPress = () => {
    const user = users.find(
      (user) =>
        user.email.toLowerCase() == username.toLowerCase() ||
        user.username.toLowerCase() == username.toLowerCase(),
    );
    const result = user
      ? compareHashedPassword(password, user.password)
      : false;

    dispatch(setActiveUser(result ? user : undefined));
    setMessage(result ? "" : "Invalid username or password");

    if (result) {
      secureStorageUtils.setSavedUser((user as IUser).username);
      router.push("/");
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <AppTextInput
          value={username}
          onChangeText={setUsername}
          placeholder="Username or email"
        />
      </View>
      <View>
        <AppTextInput
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
        />
      </View>
      <View style={styles.messageContainer}>
        {message && <Text style={styles.messageText}>{message}</Text>}
      </View>

      <View style={styles.footer}>
        <AppButton onPress={onLoginPress} text="Login" />
      </View>
    </View>
  );
};

export default LoginScreen;
