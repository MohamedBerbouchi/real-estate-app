import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext()


export const AuthProvider = ({children})=>{
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null )

    useEffect(()=>{
        localStorage.setItem('user',JSON.stringify(user))

    }, [user])
    return (
        <AuthContext.Provider value={{user, setUser}}>
                {children}
        </AuthContext.Provider>
    )
}

