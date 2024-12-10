import React, { useState } from 'react'
import { createContext } from 'react'

export const editFoodResponseContext = createContext()

const ContextApi = ({children}) => {
    const [editFoodResponse,setEditFoodResponse] = useState("")
  return (
   <editFoodResponseContext.Provider value={{editFoodResponse,setEditFoodResponse}}>
          {children}
   </editFoodResponseContext.Provider>
  )
}

export default ContextApi