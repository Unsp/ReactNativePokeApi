import { View, Text } from "react-native"

import { styles } from "./HomeSignedIn.styles";
import { useRouter } from "expo-router";
import PokemonRecent from "src/features/pokemon/PokemonRecent/PokemonRecent";
import AppButton from "src/shared/ui/AppButton/AppButton";
import { useAppDispatch, useAppSelector } from "src/shared/lib/hooks/redux";
import AppTextButton from "src/shared/ui/AppTextButton/AppTextButton";
import userSlice from "src/entities/user/api/user.slice";
import secureStorageUtils from "src/shared/lib/utils/secureStorageUtils";

const HomeSignedIn = () => {

    const router = useRouter();

    const user = useAppSelector(state => state.userReducer.activeUser)
    
    const dispatch = useAppDispatch();
    const {setActiveUser} = userSlice.actions;
    
    const listPress = () => {
        router.push('list');
    }

    const signoutPress = () => {
        secureStorageUtils.deleteSavedUser();
        dispatch(setActiveUser());
    }
    
    return (
        <View>
            <Text style={styles.userText}>Logged in as {user?.username}. Not you? <AppTextButton text='Sign out' onPress={signoutPress}/></Text>
            <PokemonRecent/>

            <View style={styles.listContainer}>
                <AppButton text="Open full list" onPress={listPress}/>
            </View>
        </View>
    )
}

export default HomeSignedIn;