import axios from "axios";
import { useEffect, useState } from "react";



function PostForm () {
    const [imagePreview, setImagePreview] = useState(null);
    const [user,setUser] = useState({status:"",titre_project:"",description:""});

    // useEffect(()=>{
    //   axios.get("https://clubtechlac.bi/projet/")
    //     .then(reps => console.log("Resutat:", reps.data))
    //     .catch(error => console.error("Erreur de resultat:", error));
    // },[]);

    const handleFileChange = (e) => {
  const file = e.target.files[0];
  // if(!file){
  //   return;
  // }
  //    if (file && file.size > 5 * 1024 * 1024) { // 5 Mo max
  //   alert('Fichier trop lourd. 5 Mo max.');
  //   return;
  // }
 
   setImagePreview(file);
};


    const handleInputChange = (e) => {
        const {name,value} = e.target;
        setUser((prev)=>({...prev,[name]:value}))
    }

    const handlesend = () => {
    
        if( user.status === "" || user.titre_project === "" || user.description === "" || !imagePreview) {
            console.log("Veuillez remplir tous les champs");
            return;
        }
         console.log(user);
        const formData= new FormData();
        // formData.append("id", user.id);
        formData.append("status", user.status);
        formData.append("titre_project", user.titre_project);
        formData.append("description", user.description);
        if(imagePreview) {
            formData.append("photo", imagePreview);
        }
        // Send formData to the backend
       axios.post("https://clubtechlac.bi/projet/", formData, {
            headers: {
                'Content-Type': 'multipart/form-data',  // Note: This header is usually set automatically by the browser when using FormData
         }
        })
        .then(reps => {
            console.log("Success:", reps.data);
            // Handle success, e.g., show a success message or reset the form
        })
        .catch((error) => {
            console.error("Error:", error);
            if(error.response) {
                console.error("Response data:", error.response.data);
            }
            if(error.request) {
                console.error("Request data:", error.request);
            }   
            // Handle error, e.g., show an error message
        });
    };


                                   
    return (
        <>
          <div className="flex flex-col items-center gap-4 p-4 max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4">Publier </h1>
            {/* <input type="number"
             placeholder="id"
              value={user.id}
              name="id"
              onChange={handleInputChange}
              className="border border-gray-300 p-2 rounded w-full" /> */}
            <input type="text" 
               placeholder="status" 
                value={user.status}
                name="status"
                onChange={handleInputChange}
                className="border border-gray-300 p-2 rounded w-full" />
            <input type="text"
              placeholder="title"
                value={user.titre_project}
                name="titre_project"
                onChange={handleInputChange}
               className="border border-gray-300 p-2 rounded w-full" />
            <input type="file" 
                onChange={handleFileChange}
                className="border border-gray-300 p-2 rounded w-full"
             name="photo" accept="image/*" />
            <input type="text" 
              placeholder="description"
                value={user.description}
                name="description"
                onChange={handleInputChange}
               className="border border-gray-300 p-2 rounded w-full" />
            <button type="button" onClick={handlesend} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-yellow-400">
              Publier
            </button>
          </div>
        </>
    )
}
export default PostForm;