import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
   const [user,setUser] = useState({nom:"",prenom:"",email:"",password:""});
   const[alert,setAlert] = useState("");
   const timeoutRef = useRef(null); // pour garder l'ID de setTimeout

   const navigate = useNavigate();
   const metreAJouruser = (champ,value) =>{
    setUser((prev)=>({...prev,[champ]:value}))
   }

   useEffect(()=>{
      const data = localStorage.getItem('login')
      if(data){
         setUser(JSON.parse(data));
      }
     // supprime timeoutRef.current
   return () => {
      clearTimeout(timeoutRef.current)
   }
   }, []);
   
   const registerUser = () => {      
      if(user.email=="" || user.password=="" || user.nom=="" || user.prenom=="") {
         setAlert("Veuillez complete tous les champs ");
        if(timeoutRef.current) {
           clearTimeout(timeoutRef.current)
        };
        timeoutRef.current = setTimeout(()=>{setAlert("")},3000);
         return ;
      } 

         
      localStorage.setItem("login",JSON.stringify(user))
      console.log("Formuleur est stock localement",user)
      setUser({email:"",password:"",nom:"",prenom:""});
      setTimeout(()=>{
          navigate('/login');
      },2000);
   }
   
return(
   <>
       <p className=" p-1 mt-2 mr-4 flex justify-end w-72 text-sm text-red-500 " >{alert}</p>
    
    <div className="flex flex-col items-center">
      <h1 className="flex justify-center p-16 font-bold text-2xl">Enregistrement</h1>
      <div className="flex flex-col w-50 gap-4 items-center ">
        < input type="text" 
          value={user.nom}
           onChange={(e)=>setUser("nom",e.target.value)}
            placeholder="Nom"
            className="border border-gray-300 p-2 rounded w-full"
         />

        <input type="text" 
          value={user.prenom}
           onChange={(e)=>setUser("prenom",e.target.value)}
            placeholder="Prenom"
            className="border border-gray-300 p-2 rounded w-full"
         />
           
        <input type="email" 
           value={user.email}
           name="email"
           onChange={(e)=>metreAJouruser("email",e.target.value)}
           placeholder="Entrer votre email" 
           className="border border-gray-300 p-2 rounded w-full"
         />
        <input type="password"
           value={user.password}
           name="password"
           onChange={(e)=> metreAJouruser("password",e.target.value)} 
           placeholder="Mot de passe"
           className="border border-gray-300 p-2 rounded w-full"
           />
        <button type="button" onClick={registerUser} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">Enregistrer</button>

        <div className="text-sm p-2" >
            <span className="-ml-1">Vous avez deja un compte ? </span>
        <span type="button"
            onClick={()=>navigate("/login")}
            className="text-blue-500 hover:underline cursor-pointer">Connectez-vous</span>
        </div>
      </div>

    
    </div>
   </>
)}
export default Register;
