import { Home, Eye,EyeOff } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
   
   const [formulaire,setFormulaire] = useState({email:"",password:""});
   const[alert,setAlert] = useState("");
   const timeoutRef = useRef(null); // pour garder l'ID de setTimeout
   const[show,setShow] = useState(false);

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
      if(!formulaire.email || !formulaire.password ) {
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

      <div className="px-4 py-4 flex flex-col justify-center shadow m-4 rounded-xl" >
         
       <div className="flex flex-col items-center pt-8">
                <img src="cim.png" alt="logo"className="w-20 h-20"/>

               <h1 className="flex justify-center p-8 font-bold text-2xl">Login</h1>
               <p className=" p-1 mt-2 mr-4 w-72 text-xs text-center text-blue-600 " >{alert}</p>
            
         <div className="flex flex-col w-50 gap-4 items-center mb-4">
               
            <input type="email" 
               value={formulaire.email}
               name="email"
               onChange={(e)=>metreAJourFormulaire("email",e.target.value)}
               placeholder="Entrer votre email" 
               className="border border-gray-300 p-2 rounded w-full"
               />
            <div className="relative  w-full">
               <input type={show ? "text":"password"} 
               value={formulaire.password}
               name="password"
               onChange={(e)=> metreAJourFormulaire("password",e.target.value)} 
               placeholder="mot de passe"
               className="border border-gray-300 p-2 rounded w-full"
               />
               <div onClick={()=>setShow(!show)}
                className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
                >
                  {show? <EyeOff size={20} /> : <Eye size={20} />} 
               </div>
            </div>

            <button type="button" onClick={loginUser} className="bg-green-600 text-white px-4 py-2 rounded w-full hover:bg-yellow-400">Connexion</button>

            <div className="text-sm p-2" >
               <span className="-ml-1">Vous avez pas le compte ? </span>
               <span type="button"
                  onClick={()=>navigate("/register")}
                  className="text-blue-600 p-1 onderlin rounded w-full cursor-pointer hover:underline">Creer un compte
               </span>
            </div>
         </div>
       </div>
   </div>
  
   </>
)}
export default Login;