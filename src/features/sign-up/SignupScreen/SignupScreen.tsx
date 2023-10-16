import { View, Text } from "react-native"

import { styles } from "./SignupScreen.styles";
import { useRouter } from "expo-router";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "src/shared/lib/hooks/redux";
import userSlice from "src/entities/user/api/user.slice";
import { regex, system } from "src/shared/lib/constants";
import AppTextInput from "src/shared/ui/AppTextInput/AppTextInput";
import AppButton from "src/shared/ui/AppButton/AppButton";
import { IUser } from "src/entities/user/types/user.types";
import secureStorageUtils from "src/shared/lib/utils/secureStorageUtils";

const SignupScreen = () => {

    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState('');

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const users = useAppSelector(state => state.userReducer.userList)
    const dispatch = useAppDispatch();
    const {setActiveUser, addUser} = userSlice.actions;
    const router = useRouter();

    const resetValidation = () => {
        setUsernameError('');
        setEmailError('');
        setPasswordError('');
    }

    const validate = () : boolean => {
        resetValidation();

        //username
        if(username.length < 4 || username.length > 20) {
            setUsernameError('Username must be between 4 and 20 characters')
        } else if(users.find(user => user.username.toLocaleLowerCase() == username.toLocaleLowerCase())) {
            setUsernameError('Username is already in use')
        }
        
        //email
        if(!regex.email.test(email)) {
            setEmailError('Invalid email')
        } else if(users.find(user => user.email.toLocaleLowerCase() == email.toLocaleLowerCase())) {
            setEmailError('Email is already in use')
        }

        //password
        if(!regex.password.test(password)) {
            setPasswordError('Password must be at least 8 characters long, contain uppercase and lowercase letters, special characters and numbers')
        } else if(password != repeatPassword) {
            setPasswordError('Passwords do not match')
        }


        return true;
    }

    const onSignupPress = () => {
        const isValid = validate();

        if(!isValid) return;

        const user = {
            username,
            email,
            password
        };
        dispatch(addUser(user));
        dispatch(setActiveUser(user));
        secureStorageUtils.setSavedUser((user as IUser).username)
        
        router.push('/');
    } 
    
    return (
        <View style={styles.container}>
            <View>
                <AppTextInput 
                    value={username} 
                    onChangeText={setUsername} 
                    placeholder='Username'
                    error={usernameError}
                />
            </View>
            <View>
                <AppTextInput 
                    value={email} 
                    onChangeText={setEmail} 
                    placeholder='Email'
                    error={emailError}
                />
            </View>
            <View>
                <AppTextInput 
                    secureTextEntry={true} 
                    value={password} 
                    onChangeText={setPassword} 
                    placeholder='Password'
                    error={passwordError}
                    />
            </View>
            <View>
                <AppTextInput 
                    secureTextEntry={true} 
                    value={repeatPassword} 
                    onChangeText={setRepeatPassword} 
                    placeholder='Repeat password'
                    />
            </View>

            <View style={styles.footer}>
                <AppButton onPress={onSignupPress} text='Sign up'/>
            </View>
        </View>
    )
}

export default SignupScreen;