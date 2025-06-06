import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Formations() {
    const navigate = useNavigate();
    const formations = [
        {id:1,formation:"Frotend",description:
            "Formation Frotend c'est un Formation web qui localise la ou il y'a un mobule perdue", 
            image:"src=image.jpg",
            dure: "Formation de 3 mois, commence le 23/7/2025",   
         },

         {id:1,formation:"Frotend",description:
            "Formation Frotend c'est un Formation web qui localise la ou il y'a un mobule perdue", 
            image:"src=image.jpg",
            dure: "Formation de 3 mois, commence le 23/7/2025"
         },

          {id:1,formation:"Frotend",description:
            "Formation Frotend c'est un Formation web qui localise la ou il y'a un mobule perdue", 
            image:"src=image.jpg",
            dure: "Formation de 3 mois, commence le 23/7/2025",
         },

          {id:1,formation:"Frotend",description:
            "Formation Frotend c'est un Formation web qui localise la ou il y'a un mobule perdue", 
            image:"src=image.jpg",
            dure: "Formation de 3 mois, commence le 23/7/2025",
         },
      
         
    ]
    return (
          
        <div>
            <div className="p-4 mb-4 bg-blue-600 flex gap-4 fixed top-0 w-full">
                <MoveLeft onClick={()=>navigate('/')}
                 className="w-8 h-8 text-white"/>
               <h1 className="font-bold text-white ">Les formations prevues </h1>
            </div>
            <div className="mt-20">
                {formations.map((forma,num)=>(
                    <div key={num} className="shadow-md mb-4 mx-4 p-2">
                        <div className="flex gap-16 pb-2 ">
                            <h2 className="font-lg text-blue-600 font-light">{forma.formation}</h2>
                            <p className="text-xs">{forma.dure}</p>
                        </div>

                        <p className="text-sm">{forma.description}</p>
                    </div>
                    ))
                }
                     
            </div>
        </div>
   )
}
export default Formations;