import { useEffect, useState } from "react";

function Dashboard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Charger les posts depuis localStorage au montage du composant
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post, index) => (
        <div
          key={index}
          className="bg-white shadow rounded-lg overflow-hidden p-4"
        >
          {/* ✅ Image du post */}
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-40 object-cover rounded"
          />
          
          {/* ✅ Titre du post */}
          <h2 className="text-lg font-semibold mt-3">{post.title}</h2>

          {/* ✅ Description du post */}
          <p className="text-sm text-gray-700 mt-2">{post.description}</p>

          {/* ✅ Type du post */}
          <span className="inline-block mt-2 text-xs text-gray-500">
            Type : {post.type}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
