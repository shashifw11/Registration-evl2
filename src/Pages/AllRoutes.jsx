import {Route,Routes} from "react-router-dom" ; 
import { Dashboard } from "./Dashboard";
import { Private } from "./PrivateRoute";
import { Regeterone } from "./RegisterPageOne";
import { Regestertwo } from "./RegisterPageTwo";



export const Allroutes =()=>{
    return(
        <Routes>
            <Route path = "/" element = {<Private/>}/>
               <Route path = "/register/one" element = {<Regeterone/>}/>
               <Route path = "/register/two" element = {<Regestertwo/>}/>
               <Route path = "/dashboard" element = {<Dashboard/>}/>
        </Routes>
    )
}