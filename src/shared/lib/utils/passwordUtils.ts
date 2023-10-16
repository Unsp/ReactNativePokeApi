import bcrypt from "react-native-bcrypt";


//should be handled on backend
export const hashPassword = (password: string) : string => {

    
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(password, salt);

    return hash;
}

export const compareHashedPassword = (password: string, hashedPassword: string) : boolean => {

    return bcrypt.compareSync(password, hashedPassword);
}
