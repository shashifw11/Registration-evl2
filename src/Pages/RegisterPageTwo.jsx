
 import {Link} from "react-router-dom" ;  
 import { useNavigate } from 'react-router-dom';
 import {useState , useEffect} from "react" ; 

export const Regestertwo = ()=>{  
    const [validate , setvalidate] = useState(false)
   
    let navigate = useNavigate();

    const [user , setUser] = useState({
          Name : "" ,
          Email : "" ,
   })  

  useEffect(()=>{
     if(user.Name === "") {
              if(user.Email === ""){
                   navigate("/register/one")
                 
              }
       }
   
} , []) ; 
    
   

  const handleChange = (e) =>{
          let {name} = e.target ;
          setUser({...user , [name] : e.target.value})
  } 


    return (
        <div style = {{ textAlign : "center" , width : "300px" , height : "300px" , margin :"auto" }}>
            <form  onSubmit={(e)=>e.preventDefault()}>
                <label>Address</label>

                <input style = {{ width : "300px" , padding : "10px" , borderRadius :"10px"}} 
                name = "Name" onChange = {handleChange} 
                type = "text" placeholder = "Enter Address"/>

                <label>Phone Number</label>
                <input style = {{   width : "300px" , padding : "10px" , borderRadius :"10px"}} 
                name = "Email" onChange = {handleChange} 
                type = "number" placeholder = "Enter Contact"/>

                <Link to = "/register/one">
                    <button style = {{ marginTop : "20px" , cursor : "pointer" ,  borderRadius : "15px",  border : "none",  width : "150px" , padding : "19px" , background : "tomato"}}
                    >PREV</button></Link> 
                     
               { validate ? <button type = "submit" style = {{ marginTop : "20px" , cursor : "pointer" ,  borderRadius : "15px",  border : "none",  width : "150px" , padding : "19px" , background : "tomato"}}
                    >Submit</button>: <Link to = "/dashboard"><button type = "submit" style = {{ marginTop : "20px" , cursor : "pointer" ,  borderRadius : "15px",  border : "none",  width : "150px" , padding : "19px" , background : "tomato"}}
                    >Submit</button></Link> } 
            </form>
        </div>
    )
}