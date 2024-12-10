import React, { createContext, useEffect, useState } from 'react'
export const tokenAuthContext = createContext()

const AuthContextApi = ({children}) => {

    const [isAuthorised,setIsAuthorised] = useState(false)
    const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('user')));
    console.log(user);
    
    
    useEffect(()=>{
        if(sessionStorage.getItem("token")){
            setIsAuthorised(true)
        }else{
            setIsAuthorised(false)
        }
    },[isAuthorised])

  return (
    <tokenAuthContext.Provider value={{isAuthorised,setIsAuthorised,user}}>
    {children}
    </tokenAuthContext.Provider>
  )
}

export default AuthContextApi