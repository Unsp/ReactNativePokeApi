import bcrypt from "react-native-bcrypt";
import isaac from "isaac";

//should be handled on backend
export const hashPassword = (password: string) : string => {

    bcrypt.setRandomFallback((len) => {
        const buf: number[] = []
        for(let i = 0; i < len; i++)
            buf.push(i)
    
        return buf.map(() => Math.floor(isaac.random() * 256));
    });
    
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(password, salt);

    return hash;
}

export const compareHashedPassword = (password: string, hashedPassword: string) : boolean => {

    bcrypt.setRandomFallback((len) => {
        const buf: number[] = []
        for(let i = 0; i < len; i++)
            buf.push(i)
    
        return buf.map(() => Math.floor(isaac.random() * 256));
    });
    

    return bcrypt.compareSync(password, hashedPassword);
}
