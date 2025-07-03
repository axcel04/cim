import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";

function Register() {
   const [user,setUser] = useState({first_name:"",last_name:"",username:"",password:""});
   const[alert,setAlert] = useState("");
   const timeoutRef = useRef(null); // pour garder l'ID de setTimeout
   const[show,setShow] = useState(false);

   const navigate = useNavigate();

   const metreAJouruser = (e) =>{
      const {name, value} = e.target;
      setUser((prev)=>({...prev,[name]:value}))
    }

   // useEffect(()=>{
   //    const data = localStorage.getItem('login')
   //    if(data){
   //       setUser(JSON.parse(data));
   //    }
   //   // supprime timeoutRef.current
   // return () => {
   //    clearTimeout(timeoutRef.current)
   // }
   // }, []);
   
   const registerUser = (e) => { 
      e.preventDefault();    
      if(user.username =="" || user.password=="" || user.first_name =="" || user.last_name =="" ) {
         setAlert("Veuillez complete tous les champs ");
        if(timeoutRef.current) {
           clearTimeout(timeoutRef.current)
        };
        timeoutRef.current = setTimeout(()=>{setAlert("")},3000);
         return ;
      } 
        console.log(user); 
      // localStorage.setItem("login",JSON.stringify(user))
      //  console.log("Formuleur est stock localement",user)
      axios.post("https://clubtechlac.bi/user/", user, {
      headers: {
         'Content-Type': 'application/json'
      }
      })
      .then(resp => {
         console.log("Reponse du serveur:", resp.data);
         setAlert("Enregistrement reussi, vous pouvez vous connecter");
         if(timeoutRef.current) {
            clearTimeout(timeoutRef.current)
         };
         timeoutRef.current = setTimeout(()=>{setAlert("")},3000);
      })
      .catch(saporo => {
         console.error("Erreur Axios:", saporo);
         if (saporo.response) {
            console.error("Réponse du serveur:", saporo.response.data);
            setAlert("Erreur : " + JSON.stringify(saporo.response.data));
         }
         });


      
      setUser({username:"",password:"",first_name:"",last_name:""});
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
          value={user.first_name}
          name="first_name"
           onChange={metreAJouruser}
            placeholder="Nom"
            className="border border-gray-300 p-2 rounded w-full"
         />

        <input type="text" 
          value={user.last_name}
           onChange={metreAJouruser}
            placeholder="Prenom"
            name="last_name"
            className="border border-gray-300 p-2 rounded w-full"
         />
           
        <input type="text" 
           value={user.username}
           name="username"
           onChange={metreAJouruser}
           placeholder="Entrer nom d'utilisateur" 
           className="border border-gray-300 p-2 rounded w-full"
         />
         <div className="relative w-full">
           <input type={show? "text":"password" }
           value={user.password}
           name="password"
           onChange={metreAJouruser} 
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
