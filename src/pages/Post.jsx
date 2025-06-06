import { MoveLeft } from "lucide-react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Post() {

  const navigate = useNavigate();
  const [selected, setSelected] = useState("");
  const [post, setPost] = useState({
    type: "",
    image: "",
    title: "",
    description: "",
    duration:"",
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [postsList, setPostsList] = useState([]);

  const [alert,setAlert] = useState(null);
  const useTimeout = useRef(null);

  const handleChange = (e) => {
    const type = e.target.value;
    setSelected(type);
    setPost({ type, image: "", title: "", description: "" });
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
    e.preventDefault(); // Défensif si un form est impliqué par surprise
  }

  if (post.title && post.description && post.image) {
    setPostsList((prev) => [...prev, post]);

    console.log("Post ajouté :", post);

    // Réinitialise après ajout
    setPost({
      type: selected,
      image: "",
      title: "",
      description: "",
      duration:"",
    });
    setImagePreview(null);
  } else {
    setAlert("Veuillez remplir tous les champs et ajouter une image.");

    if(useTimeout.current){
      clearTimeout(useTimeout.current)
    }
    useTimeout.current = setTimeout(()=>{
      setAlert("")},3000)
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

  const { title: titlePlaceholder, description: descPlaceholder } =
    getPlaceholders();

    // fonction pour effacer uniquement la publication
    const deletePost = (indexToDelete) => {
      const updatedPosts = postsList.filter((_, index) => index !== indexToDelete);
      setPostsList(updatedPosts);
    };


  return (
    <div className="p-4 text-sm ">
      <div className="flex mb-3 md:ml-50 lg:ml-80 gap-8">
        <MoveLeft className="text-blue-600" onClick={()=>navigate('/')} />
        <h2 className="font-semibold text-base">Créez un post :</h2>
      </div>

      <div className="flex justify-center gap-4 mb-4">
        {["projet", "formation", "event"].map((type) => (
          <label key={type}>
            <input
              type="radio"
              name="post"
              value={type}
              checked={selected === type}
              onChange={handleChange}
              className="mr-1"
            />
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </label>
        ))}
      </div>
       {/* affiche la notification */}
      <p className="text-xs flex justify-center text-blue-600">{alert}</p>

      {selected && (
        <div className="flex flex-col gap-3 w-[80%] md:w-[50%] lg:w-[30%] mx-auto border-t border-gray-200 pt-4">
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

         {/* input personalise(Dire de la formation) sur la poste Formation */}
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
            onClick={submitPost}
            type="button"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Publier
          </button>
        </div>
      )}

      {postsList.length > 0 && (
        <div className="mt-6 border-t pt-4">
          <h3 className="text-base font-semibold mb-3">Posts publiés :</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
            {postsList.map((item, index) => (
              <div key={index} className="relative p-3 border rounded shadow-sm bg-sky-50">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-32 object-cover rounded mb-2"
                  />
                )}
                <h4 className="font-semibold ">{item.title}</h4>

                {/* affichage de l'input personnalise(dire de la formation) de formation */}
                {item.type === "formation" && item.duration && (
                  <p className="text-xs text-gray-700">
                    <strong>Durée :</strong> {item.duration}
                  </p>
                )}

                <button
                  onClick={() => deletePost(index)}
                  className="absolute bottom-2 right-2 text-xs text-white hover:text-red-800 h-5 w-16 rounded bg-blue-600"
                 >
                  Supprimer
                </button>

                <span className="text-[10px] text-gray-500 italic">{item.type}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Post;
