import { Calendar } from "lucide-react";

function Post({ title, image, description, date }) {
  return (
    <div className="rounded-sm shadow-sm bg-white border hover:shadow-lg transition flex flex-col">
      <img src={image} alt={title} className="w-full h-36 object-cover rounded-t-sm" />
      <div className="p-3 flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <h2 className="text-base text-gray-800 font-bold">{title}</h2>
          <span className="flex items-center gap-1 text-xs text-gray-500">
            <Calendar className="w-4 h-4" />
            {date}
          </span>
        </div>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
    </div>
  );
}

export default Post;