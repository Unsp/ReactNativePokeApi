import { View, Text } from "react-native"

import { styles } from "./HomePublic.styles";
import { useRouter } from "expo-router";
import AppTextButton from "src/shared/ui/AppTextButton/AppTextButton";
import { useAppDispatch, useAppSelector } from "src/shared/lib/hooks/redux";
import userSlice from "src/entities/user/api/user.slice";
import { useEffect } from "react";
import secureStorageUtils from "src/shared/lib/utils/secureStorageUtils";

const HomePublic = () => {

    const router = useRouter();

    const signInPress = () => {
        router.push('sign-in');
    }
    const signUpPress = () => {
        router.push('sign-up');
    }

    const users = useAppSelector(state => state.userReducer.userList)
    const dispatch = useAppDispatch();
    const {setActiveUser} = userSlice.actions;
    
    const autoLogin = async () => {
        var activeUser = await secureStorageUtils.getSavedUser();
        
        if(activeUser) {
          var loginUser = users.find((user) => user.username === activeUser)
          dispatch(setActiveUser(loginUser))
        }
    }

    useEffect( () => {
        autoLogin();
    },[])
    
    return (
        <View style={styles.container}>
            <Text>
                <AppTextButton text="Sign in" onPress={signInPress}/> to continue.
            </Text>
            <Text>Don't have an account? <AppTextButton text="Sign up here"  onPress={signUpPress}/></Text>
        </View>
    )
}

export default HomePublic;