
import { useNavigate } from "react-router-dom";
import { useRef } from 'react';
import Following from "./Following";



function Prof() {
    const navigate = useNavigate();

    const fileInputRef = useRef(null); //
     const handleClick = () => {
    fileInputRef.current.click()}; // Déclenche l'ouverture du sélecteur de fichier
return(
  <div >
    <div className="flex mt-20 items-center mx-2 " >
       
       <div className="flex flex-col gap-4"> 
          <div className="relative w-16 h-16">
              <UserCircleIcon className="h-16 w-16 text-sky-500 border-2 border-sky-500 rounded-full"/>
              <PlusIcon onClick={handleClick} className="absolute bottom-0 right-0 h-5 w-5 text-sky-500 border border-sky-500 rounded-full bg-white p-0.5 border-0" />
          </div>
          <div>
              <strong>Mon Nom</strong>
          </div>
          
       </div>
       <div className="ml-12 flex gap-4">
          <div className="flex flex-col items-center">
             <span className="text-sm">Withdraw</span>
             < CurrencyDollarIcon
                  className="h-5 w-5 text-sky-500"
                  onClick={()=>navigate('/withdraw')}
               />
          </div>
          <div className="flex flex-col items-center">
             <span className="text-sm">Home</span>
             <HomeIcon
                className="h-5 w-5 text-sky-500"
                onClick={()=>navigate('/home')}
             />
         </div>
         <div className="flex flex-col items-center">
             <span className="text-sm"> Exit </span>
             <ArrowRightEndOnRectangleIcon 
                className="h-5 w-5 text-sky-500" 
                onClick={()=>navigate('/login')}
             />
          </div>
          <div className="flex flex-col items-center">
             <span className="text-sm">About</span>
             <InformationCircleIcon 
                 className="h-5 w-5 text-sky-500" 
                 onClick={()=>navigate('/About')}
                 />
          </div>
       </div>
    </div>
    

        <input
      type="file"
      ref={fileInputRef}
      accept="image/*"
      className="hidden"
      onChange={(e) => {
        const file = e.target.files[0];
        console.log('Image sélectionnée :', file);
      }}
    />
    <hr className="mt-10"></hr>
    <Following />

    <p>I am Profil</p>
    
    <button onClick={()=>navigate('/home')}>Home</button>

  </div>
 )
}

 export default Prof;




 // les copies de App.jsx

import Enfant from "./pages/Home.jsx";
import Prof from "./pages/Profile.jsx"
import Login from "./pages/Login.jsx";
import About from "./pages/About.jsx";
import Withdraw from "./pages/Withdraw.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export function App() {
  return (
  <> 
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Enfant/>}/>
        <Route path="/" element={<Prof/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Withdraw" element={<Withdraw/>}/>
      </Routes>
    </BrowserRouter>
  </>
  )
}




// creation de l'select

import { useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
function Home() {
    const navigate = useNavigate();
     const[showMenu,setShowMenu]= useState(false);
     
     const handShowMenu = ()=>{
        setShowMenu(!showMenu);
     }
     const handSetShowMenu = (e)=>{
        const value = e.target.value;
        if(value=="login"){
            navigate("/");
        } else if(value=="suprime"){
            alert("pouvez-vous supprimer tous?")
        }
     }

    return(
     <> 
        <div className="flex justify-between p-4">
         <div className="flex gap-4">
          <button onClick={()=>navigate('/Achat')}>Achat</button> 
          <button onClick={()=>navigate('/vente')}>Prix et vente/j</button> 
          <button onClick={()=>navigate('/dettes')}>Dettes</button> 
         </div>

         <div className="relative" >
            < Menu onClick={handShowMenu} className="cursor-pointer "/> 
            {showMenu && (
                <select className="absolute right-0 mt-2 border rounded p-1"
                   onChange={handSetShowMenu}
                   defaultValue=""
                
                >
                    <option value="" disabled>option</option>
                    <option value="login">login</option>
                    <option value="supprime">Effacer</option>
                </select>
            )}
         </div>
        </div>
 
     </>
    )
}
export default Home;

// // vient dans le HTML
// <script type="module" src="/src/main.jsx"></script>
// <link rel="icon" type="image/svg+xml" href="/vite.svg" />


// projet de CIM
import { Menu } from "lucide-react";
import { useState } from "react";
import { Navigate } from "react-router-dom";


function Home() {
     const navigate = Navigate();

     const[show, setShow] = useState(false);
     const handleShow = () =>{
        setShow(!show);
     }
     const[affiche,setAffiche] = useState(false);
     const handleAffiche = () =>{
        setAffiche(!affiche)
     }
     const[activeCategory,setActiveCategory] = useState(null);
     const handleCategory = (category) =>{
        setActiveCategory((prev) =>(prev === "category"? null:category));
     }
      // Array of projects
     const projects = [
        {id:1, nom:"location "},
        {id:2, nom:"getting house "},
        {id:3, nom:"location "}
     ];
      // Array of formations
     const formations = [
       // la description entree avec le chef en tapant dans le textearea
       {id:1,nom:"Frotend",description:"la formation a duree de 3 mois,commence le 23/7/2025"},
       {id:2,nom:"Frotend",description:"la formation a duree de 3 mois,commence le 23/7/2025"},
       {id:3,nom:"Frotend",description:"la formation a duree de 3 mois,commence le 23/7/2025"}
     ];
      // Array of paternaship
     const partenaships = [
      {id:"1",nom:"Hogi"},
      {id:"2",nom:"BBS"},
      {id:"3",nom:"Lumitel"}
     ];
      // Array of collaborations
     const collaborations = [
      {id:"1",nom:"callaborations des etudiants"},
      {id:"2",nom:"callaborations avec Hogi"},
      {id:"3",nom:"callaborations avec les devellopeurs"},
      
     ]
     console.log(projects[0])
    return(
        <>
         <div className="flex m-4 justify-between">
           <Menu onClick={handleShow}/>
           <h1>Club Informatique et Multimedia</h1>
         </div>
         {show && (
            <ul className="ml-4">
                <li 
                 className={`border border-sky-500 ${activeCategory==="projects"? "bg-sky-500":"bg-white-500"}`}
                 onClick={()=>handleCategory("projects")}>Projects</li>

                <li 
                 className={`border border-sky-500 ${activeCategory==="formations"? "bg-sky-500":"bg-white-500"}`}
                  onClick={()=>handleCategory("formations")}>Formations</li>

                <li
                  className={`border border-sky-500 ${activeCategory==="partenaship"? "bg-sky-500":"bg-white-500"}`}
                  onClick={()=>handleCategory("partenaship")}>Partenaship</li>

                <li
                  className={`border border-sky-500 ${activeCategory==="collaboration"? "bg-sky-500":"bg-white-500"}`}
                  onClick={()=>handleCategory("collaboration")}>Collaboration</li>
            </ul>
         )}
         {activeCategory==="projects" && (
           projects.map((project,value) =>
           <ul>
                <li key={value}>{project.nom}</li>
           </ul> 
           )
         )}
         {activeCategory==="formations" && (
            formations.map((formation,value) =>
               <ul>
                  <li key={value}>{formation.nom} <hr/> <br></br> {formation.description}</li>
               </ul>
            )
         )}

         {activeCategory==="partenaship" && (
            partenaships.map((partenaship,value)=>
               <ol>
                  <li key={value}>{partenaship.nom}</li>
               </ol>
            )

         )}
         {activeCategory==="collaboration" && (
            collaborations.map((collaboration,value)=>
               <ol>
                  <li key={value}>{collaboration.nom}</li>
               </ol>
            )

         )}
        </>
    )
}
export default Home;

// Home mise en jour

import { Menu } from "lucide-react";
import { useState } from "react";
import Card from "../components/Card";
import { Laptop } from "lucide-react";

function Home() {
  const [show, setShow] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const handleShow = () => {
    setShow(!show);
    setActiveCategory(null);
  };

  const handleCategory = (category) => {
    setActiveCategory((prev) => (prev === category ? null : category));
  };

  const projects = [
    { id: 1, nom: "location",description:"le projet vient de de resolve les location"},
    { id: 2, nom: "getting house",description:"le projet vient de de resolve les location" },
    { id: 3, nom: "location",description:"le projet vient de de resolve les location" },
  ];

  const formations = [
    {
      id: 1,
      nom: "Frontend",
      description: "Formation de 3 mois, commence le 23/7/2025",
    },
    {
      id: 2,
      nom: "Frontend",
      description: "Formation de 3 mois, commence le 23/7/2025",
    },
    {
      id: 3,
      nom: "Frontend",
      description: "Formation de 3 mois, commence le 23/7/2025",
    },
  ];

  const partenaships = [
    { id: "1", nom: "Hogi" },
    { id: "2", nom: "BBS" },
    { id: "3", nom: "Lumitel" },
  ];

  const collaborations = [
    { id: "1", nom: "Collaboration des étudiants" },
    { id: "2", nom: "Collaboration avec Hogi" },
    { id: "3", nom: "Collaboration avec les développeurs" },
  ];

  const categories = [
    { key: "projects", label: "Projects", data: projects },
    { key: "formations", label: "Formations", data: formations },
    { key: "partenaship", label: "Partenaship", data: partenaships },
    { key: "collaboration", label: "Collaboration", data: collaborations },
  ];

  return (
    <div className="p-3 bg-white min-h-screen text-sm flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <Menu onClick={handleShow} className="w-6 h-6 cursor-pointer" />
        <h1 className="text-base font-semibold text-center flex-1 ml-4">
          Club Informatique & Multimédia
        </h1>
      </div>

      {show && (
        <div className="flex">
          {/* Colonne du menu avec cards */}
          <div className="w-[70%] bg-gray-50 rounded-md shadow-md flex flex-col gap-2">
            {categories.map(({ key, label, data }) => (
              <div key={key} className="w-full flex flex-col gap-2">
                {/* Card du menu */}
                <div
                  className={`rounded-xl p-2 shadow-md bg-white ${
                    activeCategory === key ? "bg-sky-100" : ""
                  }`}
                >
                  <button
                    onClick={() => handleCategory(key)}
                    className="w-full text-left font-medium text-sm"
                  >
                    {label}
                  </button>
                </div>

                {/* Résultats sous le bouton si actif */}
                {activeCategory === key && (
                  <div className="ml-3 flex flex-col gap-2 max-h-60 overflow-y-auto">
                    {data.map((item) => (
                      <div
                        key={item.id}
                        className="w-[90%] bg-white rounded-xl shadow-sm border border-gray-200 p-2"
                      >
                        <h3 className="font-semibold text-sm">{item.nom}</h3>
                        {item.description && (
                          <p className="text-xs text-gray-600 mt-1">
                            {item.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Espace vide pour 30% */}
          <div className="w-[30%]"></div>
        </div>
      )}
      <div className="grid grid-cols-2 gap-3 mt-4">
        {projects.map((project) => (
          <Card
            key={project.id}
            title={project.nom}
            logo={<Laptop className="text-blue-500 w-5 h-5" />}
            description={project.description}
            className="w-full"
          />
        ))}
      </div>


    </div>
  );
}

export default Home;


// component card

import { ChevronRight } from "lucide-react";
import { useState } from "react";

function Card({ title, logo, description }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="rounded-xl bg-sky-50 shadow-md p-3 flex flex-col justify-between">
      <div className="flex justify-between items-start">
        {logo}
        <ChevronRight
          className="w-4 h-4 text-gray-500 cursor-pointer"
          onClick={() => setShowDetails(!showDetails)}
        />
      </div>
      <h2 className="mt-2 text-sm font-semibold">{title}</h2>
      {showDetails && (
        <p className="text-xs text-gray-600 mt-2">{description}</p>
      )}
    </div>
  );
}

export default Card;


// card 2

import { ChevronRight } from "lucide-react";
import { useState } from "react";

function Card({ title, logo, description }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = (e) => {
    e.stopPropagation(); // Évite la propagation si un parent écoute les clics
    setShowDetails(!showDetails);
  };

  return (
    <div className="rounded-md bg-sky-50 shadow-sm p-3 flex flex-col justify-between w-full">
      <div className="flex justify-between items-start">
        {logo}
        <ChevronRight
          className="w-4 h-4 text-gray-500 cursor-pointer"
          onClick={toggleDetails}
        />
      </div>
      <h2 className="mt-2 text-13">{title}</h2>
      {showDetails && (
        <p className="text-xs text-gray-600 mt-2">{description}</p>
      )}
    </div>
  );
}

export default Card;


// page poste

import { useState } from "react";

function Post() {
  const [selected, setSelected] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [post, setPost] = useState({
    type: "",
    image: "",
    title: "",
    description: ""
  })

  const [imagePreview, setImagePreview] = useState(null);

  //handlegetPostData
  const getPostData = (e) =>{
    const { name, value } = e.target
    console.log(name)
    setPost((prev) => ({...prev, [name]:value}))
  }
  //handle change type of post
  const handleChange = (e) => {
    setSelected(e.target.value);
    setPost(prev=>({...prev,type: e.target.value}))
    setTitle("");
    setDescription("");
    setImagePreview(null)
  };

  const submitPost = ()=>{
    console.log(post)
  }

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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagePreview(reader.result); // données en base64
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-4 text-sm">
      <h2 className="font-semibold mb-3 text-base">Cr&eacute;ez un post :</h2>

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

      {selected && (
        <div className="flex flex-col gap-3 w-[80%] mx-auto border-t border-gray-200 pt-4">
          <input
            type="file"
            onChange={handleImageChange}
            className="border border-gray-300 p-1 rounded"
            placeholder="Ajouter une image ou logo"
          />


          <input
            type="text"
            name="title"
            onChange={getPostData}
            placeholder={titlePlaceholder}
            className="border border-gray-300 p-2 rounded w-full"
          />

          <textarea
            name="description"
            onChange={getPostData}
            placeholder={descPlaceholder}
            className="border border-gray-300 p-2 rounded w-full h-24 resize-none"
          />
        </div>
      )}
      <button onClick={submitPost} type="buton">Publier</button>
    </div>
  );
}

export default Post;


// contenue de footer
import React from "react";

// Ajoute ici les logos dans le dossier public/images


function Footer() {

    const logos = [
  { name: "HOGI",src:"image.jpg" },
  { name: "BBS", src:"image.jpg" },
  { name: "Lumitel", src:"image.jpg" },
  { name: "HOGI",src:"image.jpg" },
  { name: "BBS", src:"image.jpg" },
  { name: "Lumitel", src:"image.jpg" },
];
 const loardLogos = [...logos,...logos];
  return (
    <footer className="bg-gray-100 py-4 overflow-hidden relative">
        <span className="text-gray-700 py-2 font-bold flex justify-center">Les collaborateurs</span>
      <div className="whitespace-nowrap animate-slide flex  items-center">
        {loardLogos.map((logo, index) => (
          <div key={index} className="flex flex-col items-center min-w-[120px]">
            <img
              src={logo.src}
              alt={logo.name}
            //   className="h-12 w-12 rounded-full mb-1 object-contain"
              className="w-12 h-12 rounded-full"
            />
            
            <span className="text-sm font-medium text-blue-600">
              {logo.name}
            </span>
          </div>
        ))}
        {/* Répète les logos pour effet de boucle infinie */}
        {logos.map((logo, index) => (
          <div key={"repeat-" + index} className="flex flex-col items-center min-w-[120px]">
            <img
              src={logo.src}
              alt={logo.name}
              className="h-12 w-auto mb-1 object-contain"
            />
            
            <span className="text-sm font-medium text-gray-700">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;

// la description de component Card
      {description && (
        <p className="text-xs text-gray-600 mt-2">{description}</p>
      )}

// l'affichage de la description des post
<p className="text-xs text-gray-600">{item.description}</p>


// dashboard de post
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

