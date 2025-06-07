import { LayoutDashboard, MoveLeft } from "lucide-react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Post() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("");
  const [post, setPost] = useState({
    type: "",
    image: "",
    title: "",
    description: "",
    duration: "",
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [postsList, setPostsList] = useState([]);
  const [alert, setAlert] = useState(null);
  const useTimeout = useRef(null);

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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
      setPost((prev) => ({ ...prev, image: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const submitPost = (e) => {
    if (e && typeof e.preventDefault === "function") {
      e.preventDefault();
    }
    if (post.title && post.description && post.image) {
      setPostsList((prev) => [...prev, post]);
      setPost({
        type: selected,
        image: "",
        title: "",
        description: "",
        duration: "",
      });
      setImagePreview(null);
    } else {
      setAlert("Veuillez remplir tous les champs et ajouter une image.");
      if (useTimeout.current) {
        clearTimeout(useTimeout.current);
      }
      useTimeout.current = setTimeout(() => {
        setAlert("");
      }, 3000);
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
      case "event":
        return {
          title: "Titre de l’événement",
          description: "Description de l’événement",
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
      <Header />
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-6">
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
          <div className="flex justify-center gap-4 mb-4">
            {["projet", "formation", "event"].map((type) => (
              <label key={type} className="cursor-pointer">
                <input
                  type="radio"
                  name="post"
                  value={type}
                  checked={selected === type}
                  onChange={handleChange}
                  className="mr-1 accent-blue-600"
                />
                <span className={selected === type ? "text-blue-700 font-semibold" : ""}>
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
                onChange={handleImageChange}
                className="border border-gray-300 p-1 rounded"
              />
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Aperçu"
                  className="w-40 h-40 object-cover mx-auto rounded"
                />
              )}
              {selected === "formation" && (
                <input
                  type="text"
                  name="duration"
                  onChange={getPostData}
                  value={post.duration}
                  placeholder="Durée de la formation"
                  className="border border-gray-300 p-2 rounded w-full"
                />
              )}
              <input
                type="text"
                name="title"
                onChange={getPostData}
                value={post.title}
                placeholder={titlePlaceholder}
                className="border border-gray-300 p-2 rounded w-full"
              />
              <textarea
                name="description"
                onChange={getPostData}
                value={post.description}
                placeholder={descPlaceholder}
                className="border border-gray-300 p-2 rounded w-full h-24 resize-none"
              />
              <button
                type="submit"
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-yellow-400"
              >
                Publier
              </button>
            </form>
          )}
        </div>

        {postsList.length > 0 && (
          <div className="mt-6 border-t pt-4">
            <h3 className="text-base font-semibold mb-3 text-gray-700">Posts publiés :</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {postsList.map((item, index) => (
                <div key={index} className="relative p-4 border rounded-xl shadow bg-sky-50 flex flex-col">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-40 object-cover rounded mb-2"
                    />
                  )}
                  <h4 className="font-semibold text-blue-700">{item.title}</h4>
                  {item.type === "formation" && item.duration && (
                    <p className="text-xs text-gray-700">
                      <strong>Durée :</strong> {item.duration}
                    </p>
                  )}
                  <p className="text-xs text-gray-600 mt-1">{item.description}</p>
                  <span className="text-[10px] text-gray-500 italic mt-2">{item.type}</span>
                  <button
                    onClick={() => deletePost(index)}
                    className="absolute bottom-2 right-2 text-xs text-white hover:text-red-800 h-5 w-16 rounded bg-blue-600"
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