import { useNavigate } from "react-router-dom";

function Formation({ title, imageSrc, dure }) {
  const navigate = useNavigate();
  return (
    <div className="rounded-md  shadow-sm p-3 flex flex-col w-full">
      {/* Image en haut */}

      <img src="image.jpg" alt="image"className="w-full h-34 object-cover rounded-sm mb-2"/>

      {/* Titre */}
      <h2 className="text-sm text-blue-600 font-semibold mb-1">{title}</h2>

      {/* Dure de la formation*/}
      <p className="text-xs text-gray-600 mb-2">{dure}</p>
      <giv className="text-end">
         <button onClick={()=>navigate('/formations')}
         className="rounded bg-blue-600 w-20 text-white" >Description</button>
      </giv>

    </div>
    
  );
}

export default Formation;