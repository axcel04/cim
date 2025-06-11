import { useNavigate } from "react-router-dom";
import { Calendar } from "lucide-react";

function Projet({ title, logo, description, date, nom }) {
  const navigate = useNavigate();
  const typeColors = {
    project: "bg-blue-100 text-blue-700",
    formation: "bg-green-100 text-green-700",
    simple: "bg-gray-100 text-gray-700",
  };

  return (
    <div
      className="rounded-sm shadow-sm hover:shadow-lg transition p-4 bg-white flex flex-col gap-2 border border-gray-100 "
    >
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="w-8 h-8 rounded-full border" />
        {/* il faut change type en utilisant leur nom */}
        <span className={`px-2 py-1 rounded text-xs font-bold ${typeColors[nom] || " text-gray-700 "}`}>
          {nom.charAt(0).toUpperCase() + nom.slice(1)}
        </span>
        <span className="flex justify-center gap-1 text-xs text-gray-500 ml-auto">
          <Calendar className="w-4 h-4" />
          {date}
        </span>
      </div>
      <h2 className="text-base font-bold text-blue-900">{title}</h2>
      <div className="text-center">
         <button
           className="bg-blue-500 w-20 h-6 rounded text-white text-xs cursor-pointer hover:bg-blue-700"
            onClick={() => navigate('/project')}>
            Description
         </button>
      </div>   
    </div>
  );
}

export default Projet;
