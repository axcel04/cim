import { MoveLeft } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
   
   const [formulaire,setFormulaire] = useState({email:"",password:""});
   const[alert,setAlert] = useState("");
   const timeoutRef = useRef(null); // pour garder l'ID de setTimeout

   const navigate = useNavigate();
   const metreAJourFormulaire = (champ,value) =>{
    setFormulaire((prev)=>({...prev,[champ]:value}))
   }

   useEffect(()=>{
      const data = localStorage.getItem('login')
      if(data){
         setFormulaire(JSON.parse(data));
      }
     // supprime timeoutRef.current
   return () => {
      clearTimeout(timeoutRef.current)
   }
   }, []);
   
   const loginUser = () => {      
      if(formulaire.email=="" || formulaire.password=="" ) {
         setAlert("Veuillez complete tous les champs ");
        if(timeoutRef.current) {
           clearTimeout(timeoutRef.current)
        };
         // Cache la notification après 3 secondes
        timeoutRef.current = setTimeout(()=>{setAlert("")},3000);
         return ;
      } 
         
      localStorage.setItem("login",JSON.stringify(formulaire))
      console.log("Formuleur est stock localement",formulaire)
      setFormulaire({email:"",password:""});
      setTimeout(()=>{
          navigate('/post',{ replace: true});
      },2000);
   }
   
return(
   <>
      <div className="px-4 flex justify-center" >
         <MoveLeft className="mt-16 text-blue-600" onClick={()=> navigate('/')}/>
    
            <div className="flex flex-col items-center">
               <p className=" p-1 mt-2 mr-4 flex justify-end w-72 text-sm text-red-500 " >{alert}</p>
               
               <h1 className="flex justify-center p-16 font-bold text-2xl">Connexion</h1>
            
            <div className="flex flex-col w-50 gap-4 items-center mb-4">
               
            <input type="email" 
               value={formulaire.email}
               name="email"
               onChange={(e)=>metreAJourFormulaire("email",e.target.value)}
               placeholder="Entrer votre email" 
               className="border border-gray-300 p-2 rounded w-full"
               />

            <input type="password"
               value={formulaire.password}
               name="password"
               onChange={(e)=> metreAJourFormulaire("password",e.target.value)} 
               placeholder="mot de passe"
               className="border border-gray-300 p-2 rounded w-full"
               />
            <button type="button" onClick={loginUser} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">Connexion</button>

               <div className="text-sm p-2" >
               <span className="-ml-1">Vous avez pas le compte ? </span>
               <span type="button"
                  onClick={()=>navigate("/register")}
                  className="text-blue-600 p-2 rounded w-full">Creer un compte</span>
               </div>
            </div>
      
    
      </div>
   </div>
   </>
)}
export default Login;