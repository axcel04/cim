import { useNavigate } from "react-router-dom";
import { MoveLeft } from "lucide-react";

function Collaboration() {

    const navigate = useNavigate();
    const collaborations = [
        {id:1, image:"", nom:"Hogi"},
        {id:2, image:"", nom:"Lumitel"},
        {id:3, image:"", nom:"BBS"},
        {id:4, image:"", nom:"Kit hup"},
        {id:5, image:"", nom:"Fithec"}   
    ]

    return (
        <div>
            <div className="p-4 mb-4 bg-blue-600 flex gap-4 fixed top-0 w-full">
                <MoveLeft onClick={()=>navigate('/')}
                   className="w-8 h-8 rounded-full bg-white text-blue-600 " />
                <h1 className="font-bold text-white ">Les collaborateurs</h1>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 mx-4 mt-20 ">
                {collaborations.map((collab,num)=>(
                    <div key={num} className="shadow-md mb-4  p-2 flex flex-col items-center " >
                       <img src="image.jpg" alt="image"className="w-12 h-12 rounded-full"/> 
                       <h2 >{collab.nom}</h2>
                   </div>
                ))}
            </div>

        </div>
    )
}
export default Collaboration;