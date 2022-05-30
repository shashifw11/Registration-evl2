 import {Link} from "react-router-dom" ;  

  import {useState , useEffect} from "react" ; 

 export const Regeterone = ()=>{  
     const [validate , setvalidate] = useState(true)
    
     const [user , setUser] = useState({
           Name : "" ,
           Email : "" ,
    })  

useEffect(()=>{
    const validation = ()=>{
        if(user.Name !== "") {
               if(user.Email !== ""){
                  setvalidate(true); 
                  
               }
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
                 <label>User Name</label>

                 <input style = {{ width : "300px" , padding : "10px" , borderRadius :"10px"}} 
                 name = "Name" onChange = {handleChange} 
                 type = "text" placeholder = "Enter Name"/>

                 <label>Email</label>
                 <input style = {{   width : "300px" , padding : "10px" , borderRadius :"10px"}} 
                 name = "Email" onChange = {handleChange} 
                 type = "email" placeholder = "Enter Email"/>

                 {validate  ? <Link to = "/register/two">
                     <button style = {{ marginTop : "20px" , cursor : "pointer" ,  borderRadius : "15px",  border : "none",  width : "150px" , padding : "19px" , background : "tomato"}}
                     >Next</button></Link> : ""}
             </form>
         </div>
     )
 }