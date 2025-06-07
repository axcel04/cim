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

// ...existing code...
return (
  <div className="relative bg-white min-h-screen text-sm mb-4">
    {/* Sticky Navigation Bar */}
    <header className="sticky top-0 z-50 bg-white shadow">
      <nav className="flex items-center justify-between px-4 py-3 md:py-5">
        {/* Logo and Site Name */}
        <div className="flex items-center space-x-3">
          <img src="/logo192.png" alt="CIM Logo" className="w-10 h-10 rounded-full" />
          <span className="text-lg md:text-2xl font-bold text-blue-700">Club Informatique & Multimédia</span>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {categories.map(({ key, label, url }) => (
            <button
              key={key}
              onClick={() => navigate(url)}
              className="text-gray-700 hover:text-blue-700 font-medium transition"
            >
              {label}
            </button>
          ))}
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded hover:bg-blue-50"
          aria-label="Open menu"
          onClick={handleShow}
        >
          <Menu className="w-6 h-6 text-blue-700" />
        </button>
      </nav>
      {/* Mobile Menu Overlay */}
      {show && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-end">
          <div className="w-2/3 max-w-xs bg-white p-6 shadow-lg">
            <button
              className="mb-6"
              aria-label="Close menu"
              onClick={handleShow}
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
            <div className="flex flex-col space-y-4">
              {categories.map(({ key, label, url }) => (
                <button
                  key={key}
                  onClick={() => {
                    navigate(url);
                    setShow(false);
                  }}
                  className="text-gray-700 hover:text-blue-700 text-lg font-medium text-left"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
    {/* Header Photo */}
    <HeaderPhoto />
    {/* ...rest of your code... */}
    
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
// ...existing code...
}

export default Home;
