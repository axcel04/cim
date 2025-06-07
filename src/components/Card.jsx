import { useNavigate } from "react-router-dom";
import { Calendar } from "lucide-react";

function Card({ title, logo, description, date, type = "project" }) {
  const navigate = useNavigate();
  const typeColors = {
    project: "bg-blue-100 text-blue-700",
    formation: "bg-green-100 text-green-700",
    simple: "bg-gray-100 text-gray-700",
  };

  return (
    <div
      className="rounded-sm shadow-sm hover:shadow-lg transition p-4 bg-white flex flex-col gap-2 border border-gray-100 cursor-pointer"
      onClick={() => navigate('/project')}
    >
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="w-8 h-8 rounded-full border" />
        <span className={`px-2 py-1 rounded text-xs font-semibold ${typeColors[type] || "bg-gray-100 text-gray-700"}`}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
        <span className="flex items-center gap-1 text-xs text-gray-500 ml-auto">
          <Calendar className="w-4 h-4" />
          {date}
        </span>
      </div>
      <h2 className="text-base font-bold text-blue-900">{title}</h2>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
}

export default Card;
