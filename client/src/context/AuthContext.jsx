import { useContext } from "react";
import { createContext, useEffect, useState } from "react";
import axiosClient from "../lib/axiosClient";
import { useLocation, useNavigate } from "react-router-dom";


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


export const useUser = ()=> useContext(AuthContext)



