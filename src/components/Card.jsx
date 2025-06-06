import { useNavigate } from "react-router-dom";

function Card({ title, logo, description }) {
  const navigate = useNavigate();
  return (
    <div className="rounded-sl bg-sky-50 shadow-md p-3 flex flex-col justify-between cursor-pointer"
      onClick={()=>navigate('/project')}>
      <div className="flex justify-start items-center gap-2">
        <span className=" w-12 h-12  rounded-full">
          {/* {logo} */}
          <img src="image.jpg" alt="image"className="w-12 h-12 rounded-full"/> 
        </span>
        <h2 className="text-sm text-blue-600 font-semibold">{title}</h2>
      </div>

    </div>
  );
}

export default Card;
