// Write code for Registration context

import {createContext} from "react" ; 
import {useState} from "react" ; 

export const RegesterContext = createContext() ; 

 

export const RegesterContextProvider = ({children})=>{ 

    const [data , setData] = useState({}) ;

 const handleChange = (value)=>{

 }
         return  <RegesterContext.Provider value = {{data,handleChange }}>{children}</RegesterContext.Provider>
}