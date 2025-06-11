import { useNavigate } from "react-router-dom";
import { Calendar } from "lucide-react";

function Formation({ title, image, dure, date }) {
  const navigate = useNavigate();
  return (
    <div className="rounded-md shadow-sm bg-white p-3 flex flex-col w-full border hover:shadow-lg transition">
      <img src={image} alt={title} className="w-full h-36 object-cover rounded-md mb-2" />
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-base text-green-700 font-semibold">{title}</h2>
        <span className="flex items-center gap-1 text-xs text-gray-500">
          <Calendar className="w-4 h-4" />
          {date}
        </span>
      </div>
      <p className="text-xs text-gray-600 mb-2">{dure}</p>
      <div className="text-end">
        <button
          onClick={() => navigate('/formation')}
          className="rounded bg-green-600 px-3 py-1 text-white text-xs hover:bg-green-700"
        >
          Description
        </button>
      </div>
    </div>
  );
}

export default Formation;