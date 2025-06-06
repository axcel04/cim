import { Menu, X } from "lucide-react";
import { useState } from "react";
import Card from "../components/Card";
import { Laptop } from "lucide-react";
import Formation from "../components/Formation";
import Footer from "../components/Footer";
import HeaderPhoto from "../components/HeaderPhoto";
import { useNavigate } from "react-router-dom";


function Home() {
  const [show, setShow] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const navigate = useNavigate();

  const handleShow = () => {
    setShow(!show);
    setActiveCategory(null);
  };

  const handleCategory = (category) => {
    setActiveCategory((prev) => (prev === category ? null : category));
  };

  const projects = [
    { id: 1, nom: "location",logo:"https://via.placeholder.com/150",
       description: "le projet vient de résoudre les locations" },
    { id: 2, nom: "getting house",logo:"https://via.placeholder.com/150",
       description: "le projet vient de résoudre les locations" },
    { id: 3, nom: "location", logo:"https://via.placeholder.com/150",
      description: "le projet vient de résoudre les locations" },
    { id: 1, nom: "location",logo:"https://via.placeholder.com/150",
      description: "le projet vient de résoudre les locations" },
  ];

  const formations = [
    {
      id: 1,
      nom: "Frontend",
      image: "https://via.placeholder.com/150",
      dure: "Formation de 3 mois, commence le 23/7/2025",
    },
    {
      id: 2,
      nom: "Frontend",
      image: "https://via.placeholder.com/150",
      dure: "Formation de 3 mois, commence le 23/7/2025",
    },
    {
      id: 3,
      nom: "Frontend",
      image: "https://via.placeholder.com/150",
      dure: "Formation de 3 mois, commence le 23/7/2025",
    },
  ];

  const partnerships = [
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

    { key: "projects", label: "Projets", url: "/project" },
    { key: "formations", label: "Formations", url: "/formations"  },
    { key: "partnership", label: "Collaboration", url: "/collaboration" },
    { key: "login", label: "Login", url: "/login"  },
  ];

  return (
    <div className="relative bg-white min-h-screen text-sm mb-4">
      {/* Barre de navigation en haut */}
      <div className=" mb-4">
        <div className="flex items-center justify-between bg-blue-600 py-7 px-4">
            
            <img src="image.jpg" alt="image"className="w-12 h-12 rounded-full"/>  
            <p className="hidden md:block text-base font-semibold text-center flex-1 ml-4 text-white">
              Club Informatique & Multimédia
            </p>
            <p className="block md:hidden text-xl font-bold text-center flex-1 ml-4 text-white">CIM ULT</p>
            <Menu onClick={handleShow} className="w-6 h-6 cursor-pointer text-white" />
        </div>
       <HeaderPhoto />
      </div>
      

      {/* Menu affiché en overlay */}
      {show && (
        <div className="absolute top-16 right-0 w-[40%] flex justify-between bg-white p-2 rounded-sm shadow-lg z-50 max-h-[80vh] overflow-y-auto">

          {/* icone dans le menu */}
          <X className="text-sm" onClick={handleShow}/>
            <div>
              {categories.map(({ key, label, url }) => (
                <div key={key} className="mb-2 text-end">
                  {/* Bouton de catégorie */}
                  <div
                    className={` ${
                      activeCategory === key ? "bg-sky-50" : ""
                    }`}
                  >
                    <button
                      onClick={() => navigate(url)}
                      className="w-full text-left font-normal text-sm"
                    >
                      {label}
                    </button>
                  </div>

                  {/* Résultats affichés seulement si catégorie active */}
                
                </div>
              ))}
            </div>
        </div>
      )}

      {/* Contenu Home (cards) toujours visible */}
      <div className="mx-3">

        <p className="py-2  text-xs ">Site de Club Informatique et Multimédia(CIM) est un site contient et bublie tous les activites 
          realise dans la Club Informatique et Multimédia
        </p>
        <div className="my-8">
          <h1 className="text-lg pl-4 font-bold mb-3">Les projets realises</h1>

          {/* contenue de component card */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {projects.map((project) => (
                  <Card
                    key={project.id}
                    title={project.nom}
                    logo={project.logo}
                    description={project.description}
                  />
                ))}
          </div>
        </div>
       {/*Contenu de component Formation */}
       <div >
          <h1 className="text-base pl-4 font-bold mb-3">Formations prevues</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {formations.map((item) => (
              <Formation
                key={item.id}
                title={item.nom}
                imageSrc={item.image}
                dure={item.dure}
              />
            ))}
          </div>
       </div>
      </div>

      <Footer />

    </div>

  );
}

export default Home;
