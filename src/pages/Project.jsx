
import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Project() {
    const navigate = useNavigate();
    const projets = [
        {id:1,project:"Location",description:
            "location c'est un  site web qui localise la ou il y'a un mobule perdue", 
            image:""
         },
        {id:1,project:"Get House",description:
            "Get House c'est un site web qui peut edee la population d'obtenir la maason"},
        {id:1,project:"Meet ",description:
            "Meet c'est un site web qui localise la ou il y'a un mobule perdue",
            image:""
        },
        {id:1,project:"Belle photo",description:
            "Belle photo c'est un site web qui localise la ou il y'a un mobule perdue",
            image:""
        },
        {id:1,project:"Shoping",description:
            "Shoping c'est un site web qui localise la ou il y'a un mobule perdue",
             image:""
        },
         
    ]
    return (
          
        <div>
            <div className="p-4 mb-4 bg-blue-600 flex gap-4 fixed top-0 w-full ">
               <MoveLeft onClick={()=>navigate('/')}
                 className="w-8 h-8 text-white" />  
               <h1 className="font-bold text-white ml-2">Les projets realises</h1>
            </div>
            
            <div className="mt-20">
                {projets.map((prj,num)=>(
                    <div key={num} className="shadow-md mb-4 mx-4 p-2">
                        <div className="flex items-center py-2">
                          <img src="image.jpg" alt="image"className="w-12 h-12 rounded-full"/>                        
                          <span className="font-lg text-blue-600  font-light ml-2">{prj.project}</span>
                        </div>
                        <p className="text-sm">{prj.description}</p>
                    </div>
                    ))
                }
                     
            </div>
        </div>
   )
}
export default Project;