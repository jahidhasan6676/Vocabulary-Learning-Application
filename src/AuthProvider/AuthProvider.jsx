import { createContext } from "react";

export const authContext = createContext();
const AuthProvider = ({children}) => {
    const info = {
        name:"jahid",
    }

    const authInfo = {
        info
    }
    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;