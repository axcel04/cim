import { useNavigate } from "react-router-dom";
import { CurrencyDollarIcon, HomeIcon,InformationCircleIcon,PlusIcon,UserCircleIcon } from "@heroicons/react/16/solid";
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/20/solid";
import { useRef, useState, useEffect } from "react";
import Following from "./Following";
import AddImage from "./AddImage";

function Prof() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleClick = () => {
    fileInputRef.current.click(); // Déclenche l'ouverture du sélecteur de fichier
  };

  useEffect(()=> {
     const savedImage = localStorage.getItem("profileImage");
     if(savedImage) {
      setImagePreview(savedImage);
     }
  },[]);

    const handleChange = (e)=> {
    const file = e.target.files[0];
    if(file) {
      const reader = new FileReader();
      reader.onloadend = () => {
         const base64 = reader.result;
         setImagePreview(base64);

         localStorage.setItem("profileImage",base64);
      };
      reader.readAsDataURL(file);
    }
  }
 

  return (
    <div>
      <div className="flex mt-20 items-center mx-2">
        <div className="flex flex-col gap-4">
          <div className="relative w-16 h-16">
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Profil"
                className="w-16 h-16 object-cover rounded-full border-2 border-sky-500"
              />
            ) : (
              <UserCircleIcon className="h-16 w-16 text-sky-500 border-2 border-sky-500 rounded-full" />
            )}
            <PlusIcon
              onClick={handleClick}
              className="absolute bottom-0 right-0 h-5 w-5 text-sky-500 border-0 border-sky-500 rounded-full bg-white p-0.5"
            />
          </div>
          <div>
            <strong>Mon Nom</strong>
          </div>
        </div>

        <div className="ml-12 flex gap-4">
          <div className="flex flex-col items-center">
            <span className="text-sm">Withdraw</span>
            <CurrencyDollarIcon
              className="h-5 w-5 text-sky-500"
              onClick={() => navigate("/withdraw")}
            />
          </div>
          <div className="flex flex-col items-center">
            <span className="text-sm">Home</span>
            <HomeIcon
              className="h-5 w-5 text-sky-500"
              onClick={() => navigate("/home")}
            />
          </div>
          <div className="flex flex-col items-center">
            <span className="text-sm">Exit</span>
            <ArrowRightEndOnRectangleIcon
              className="h-5 w-5 text-sky-500"
              onClick={() => navigate("/login")}
            />
          </div>
          <div className="flex flex-col items-center">
            <span className="text-sm">About</span>
            <InformationCircleIcon
              className="h-5 w-5 text-sky-500"
              onClick={() => navigate("/About")}
            />
          </div>
        </div>
      </div>

      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        className="hidden"
        onChange={handleChange}
      />

      <hr className="mt-10" />
      <Following />
      <AddImage />
    </div>
  );
}

export default Prof;
