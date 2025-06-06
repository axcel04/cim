import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRef ,useEffect } from 'react';

function AddImage () {
    const fileInputRef = useRef(null); // pour pointer l'input
    const [preview, setPreview] = useState(null); // stocke l'image en aperçu
    const images = [1,2,3,4,5,6]

    const handleClick = () =>{
        fileInputRef.current.click(); // declenche l'ouverture du secteur de fichier
    };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader( );
        reader.onloadend = () => {
          const base64 = reader.result;
          setPreview(base64);

          localStorage.setItem('pubImage',base64); //Enregistrement
        };
        reader.readAsDataURL(file);
    }
  };

  // Au chargement,on recupere l'image du localStorage
  useEffect(() => {
    const savedImage = localStorage.getItem('pubImage');
    if(savedImage) {
      setPreview(savedImage);
    }
  },[]);

  const handleDelete = () => {
    localStorage.removeItem('pubImage');
    setPreview(null);
  }; 

  return (
    <div>
        <button onClick={handleClick} 
          className="flex justify-end border border-sky-500 text-sm bg-sky-500 text-white font-medium rounded p-1 px-3"> 
          + Add pub
          </button>
      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        className="hidden"
        onChange={handleChange}
      />

      {preview && (
        <div className='mt-2 grid grid-cols-2 gap-2 px-4'>
          {images.map((img,n)=>
            <img
            key={n}
            src={preview}
            alt="Aperçu"
            className="h-18 object-cover rounded border"
            />
          )}
          <button onClick={handleDelete}
             className='text-sky-500 underline text-sm'>Delete image</button>
       </div>
    )}
  </div>
  );
} 

export default AddImage;
