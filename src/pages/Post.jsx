import { LayoutDashboard, MoveLeft } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";

function Post() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("");
  const [loading, setLoading] = useState(false)
  const [post, setPost] = useState({
    type: "",
    image: "",
    title: "",
    description: "",
    duration: "",
  });
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const type = e.target.value;
    setSelected(type);
    setPost({ type, image: "", title: "", description: "", duration: "" });
    setImagePreview(null);
  };

  const getPostData = (e) => {
    const { name, value } = e.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };

  //get posts from server
  const [posts, setPosts] = useState([])
  useEffect(()=>{
    axios.get("https://clubtechlac.bi/projet/")
      .then(resp=> setPosts(resp.data))
      .catch(sapor=> console.error(sapor.message))
  },[])

  const submitPost = () => {
    setLoading(true)
    //post data to backend
    if(selected === "projet") {
       const formData = new FormData();
          formData.append("status", post.type);
          formData.append("titre_project", post.title);
          formData.append("description", post.description);
          if (imagePreview) {   
              formData.append("photo", imagePreview);
          }
          axios.post("https://clubtechlac.bi/projet/", formData)
          .then(res => {
            if(res.data) console.log("Successfully added")
          })
          .catch(err => {
              if(err.response) {
                  console.error("Erreur serveur:", err.response.data);
                console.log("Erreur serveur: " + JSON.stringify(err.response.data));
              }else {
                  console.error("Erreur:", err.message);
              }  
          })
          .finally(() => setLoading(false))
        setPost({
        type: selected,
        image: "",
        title: "",
        description: "",
        duration: "",
      });
      setImagePreview(null);
    }
  };

  const getPlaceholders = () => {
    switch (selected) {
      case "projet":
        return {
          title: "Titre du projet",
          description: "Description du projet",
        };
      case "formation":
        return {
          title: "Titre de la formation",
          description: "Détails de la formation",
        };
      case "actualite":
        return {
          title: "Titre de l’actualite",
          description: "Description de l’actualite",
        };
      default:
        return { title: "", description: "" };
    }
  };

  const { title: titlePlaceholder, description: descPlaceholder } = getPlaceholders();

  const deletePost = (indexToDelete) => {
    const updatedPosts = postsList.filter((_, index) => index !== indexToDelete);
    setPostsList(updatedPosts);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header className="fixed z-50"/>
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-6 ">
        <div className="flex items-center gap-4 mb-6">
          <button
            className="p-2 "
            onClick={() => navigate("/")}
            aria-label="Retour"
          >
            <LayoutDashboard className="text-yellow-600" />
          </button>
          <h2 className="font-semibold text-lg text-gray-700">Tableau de bord</h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <h3 className="font-semibold text-base mb-4 text-gray-700">Créer un post :</h3>
          <p>{loading && "Please wait..."}</p>
          <div className="flex justify-center gap-4 mb-4">
            {["projet", "formation", "actualite"].map((type) => (
              <label key={type} className="cursor-pointer">
                <input
                  type="radio"
                  name="post"
                  value={type}
                  checked={selected === type}
                  onChange={handleChange}
                  className="mr-1 accent-green-600"
                />
                <span className={selected === type ? "text-blue-600 font-semibold" : ""}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </span>
              </label>
            ))}
          </div>
          <p className="text-xs flex justify-center text-blue-600">{alert}</p>
          {selected && (
            <form
              className="flex flex-col gap-3 w-full md:w-[70%] lg:w-[50%] mx-auto border-t border-gray-200 pt-4"
              onSubmit={submitPost}
            >
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImagePreview(e.target.files[0])}
                className="border border-gray-300 p-1 rounded"
              />
         
              <input
                type="text"
                name="title"
                onChange={getPostData}
                value={post.title}
                placeholder={titlePlaceholder}
                className="border border-gray-300 p-2 rounded w-full"
              />

              {selected != "projet" && (
                <input
                  type="text"
                  name="duration"
                  onChange={getPostData}
                  value={post.duration}
                  placeholder="Date prevue"
                  className="border border-gray-300 p-2 rounded w-full"
                />
              )}
              <textarea
                name="description"
                onChange={getPostData}
                value={post.description}
                placeholder={descPlaceholder}
                className="border border-gray-300 p-2 rounded w-full h-24 resize-none"
              />
              <button
                type="button"
                onClick={submitPost}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-yellow-400"
              >
                Publier
              </button>
            </form>
          )}
        </div>

        {posts && (
          <div className="mt-6 border-t pt-4">
            <h3 className="text-base font-semibold mb-3 text-gray-700">Posts publiés :</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
              {posts.map((item, index) => (
                <div key={index} className="relative p-4 border rounded-xl shadow bg-sky-50 flex flex-col">
                  {item.photo && (
                    <img
                      src={item.photo}
                      alt={item.titre}
                      className="w-full h-40 object-cover rounded mb-2"
                    />
                  )}
                  <h4 className="font-semibold text-blue-700">{item.titre}</h4>
                  {item.type === ("formation" && "actualite") && item.duration && (
                    <p className="text-xs text-gray-7005">
                      <strong>Durée :</strong> {item.duration}
                    </p>
                  )}
                  {/* <p className="text-xs text-gray-600 mt-1">{item.description}</p> */}
                  <span className="text-[10px] text-gray-500 italic mt-2">{item.status}</span>
                  <button
                    onClick={() => deletePost(index)}
                    className="absolute bottom-2 right-2 text-xs text-white hover:text-red-800 h-5 w-16 rounded bg-green-600"
                  >
                    Supprimer
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
export default Post;