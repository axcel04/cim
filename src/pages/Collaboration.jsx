import { useNavigate } from "react-router-dom";
import { MoveLeft } from "lucide-react";
import Header from "../components/Header";

function Collaboration() {

    const navigate = useNavigate();
    const collaborations = [
        {id:1, image:"", nom:"Hogi",desc:"Partenariat d'hebergements"},
        {id:2, image:"", nom:"Lumitel",desc:"partainariat telecome officiel"},
        {id:3, image:"", nom:"BBS",desc:"Expert en ingenierie de reseaux"},
        {id:4, image:"", nom:"Kit hup", desc:"partainairiat des formations technologique"},
        {id:5, image:"", nom:"Fithec", desc:"Societe des materiel technique et de reparation"}   
    ]

    return (
        <div>
            <div className="fixed top-0 w-full z-50">
               < Header />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-4 mt-28 ">
                {collaborations.map((collab,num)=>(
                    <div key={num} className="shadow-md mb-4 bg-sky-50 p-2 flex flex-col items-center justify-center hover:shadow-lg transition " >
                       <img src="image.jpg" alt="image"className="w-20 h-20 border border-gray-200 rounded-full"/> 
                       <h2 className="text-blue-600 font-bold mt-2 " >{collab.nom}</h2>
                       <p className="text-xs">{collab.desc}</p>
                   </div>
                ))}
            </div>

            <div className="mt-12 border-t border-gray-200 p-4 text-center text-xs text-gray-500 bg-gray-50">
              © {new Date().getFullYear()} Club Informatique & Multimédia — CIM.<br />
               Powered by <a href="https://vovota.bi/about" className="underline text-sky-500 hover:text-sky-700" target="_blank" rel="noopener noreferrer">vovota</a>
            </div>

        </div>
    )
}
export default Collaboration;