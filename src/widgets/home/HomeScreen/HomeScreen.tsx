import { View, Text } from "react-native"

import { styles } from "./HomeScreen.styles";
import { useAppSelector } from "src/shared/lib/hooks/redux";
import HomePublic from "src/features/home/HomePublic/HomePublic";
import HomeSignedIn from "src/features/home/HomeSignedIn/HomeSignedIn";

const HomeScreen = () => {

    
    const {isLoggedIn} = useAppSelector(state => state.userReducer)
    
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Welcome to the pokemon db</Text>
            {isLoggedIn ? <HomeSignedIn/> : <HomePublic/>}
        </View>
    )
}

export default HomeScreen;