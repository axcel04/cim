import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

function Register() {
   const [user,setUser] = useState({nom:"",prenom:"",email:"",password:""});
   const[alert,setAlert] = useState("");
   const timeoutRef = useRef(null); // pour garder l'ID de setTimeout
   const[show,setShow] = useState(false);

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
      if(user.email =="" || user.password=="" || user.nom =="" || user.prenom =="" ) {
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
    
    <div className="flex flex-col items-center shadow m-4 pb-12 rounded-lg">
      <img src="cim.png" alt="logo"className="w-20 h-20 mt-12 "/>

      <h1 className="flex justify-center p-8 font-bold text-2xl">Enregistrement</h1>
       <p className=" p-1 mt-2 mr-4 text-center w-72 text-xs text-blue-600 " >{alert}</p>

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
         <div className="relative w-full">
           <input type={show? "text":"password" }
           value={user.password}
           name="password"
           onChange={(e)=> metreAJouruser("password",e.target.value)} 
           placeholder="Mot de passe"
           className="border border-gray-300 p-2 rounded w-full"
           />
           <div onClick={()=>setShow(!show)} 
            className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 hover:gray-700 cursor-pointer">
               {show ? <EyeOff size={20} /> : <Eye size={20} />}
           </div>
         </div>

        <button type="button" onClick={registerUser} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-yellow-400 w-full">Enregistrer</button>

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
