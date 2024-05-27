import { createContext, useEffect, useState } from "react";


export const ProfileContext = createContext()


export const ProvileProvider = ({children})=>{
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

    useEffect(()=>{
        localStorage.setItem('user',JSON.stringify(user))

    }, [user])
    return (
        <ProfileContext.Provider value={{user, setUser}}>
                {children}
        </ProfileContext.Provider>
    )
}

