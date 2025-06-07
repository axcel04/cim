import { useState } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import Formation from "../components/Formation";
import Footer from "../components/Footer";
import HeaderPhoto from "../components/HeaderPhoto";
import { useNavigate } from "react-router-dom";
import Post from "../components/Post";



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
    { id: 1, nom: "location",logo:"/cim.png",
       description: "le projet vient de résoudre les locations" },
    { id: 2, nom: "getting house",logo:"/cim.png",
       description: "le projet vient de résoudre les locations" },
    { id: 3, nom: "location", logo:"/cim.png",
      description: "le projet vient de résoudre les locations" },
    { id: 1, nom: "location",logo:"/cim.png",
      description: "le projet vient de résoudre les locations" },
  ];

const formations = [
    {
        id: 1,
        title: "Frontend",
        image: "/image.jpg",
        dure: "Formation de 3 mois, commence le 23/7/2025",
        description: "Cette formation couvre les bases du développement frontend, y compris HTML, CSS et JavaScript.",
    },
    {
        id: 2,
        title: "Frontend",
        image: "/image.jpg",
        dure: "Formation de 3 mois, commence le 23/7/2025",
        description: "Cette formation couvre les bases du développement frontend, y compris HTML, CSS et JavaScript.",
    },
    {
        id: 3,
        title: "Frontend",
        image: "/image.jpg",
        dure: "Formation de 3 mois, commence le 23/7/2025",
        description: "Cette formation couvre les bases du développement frontend, y compris HTML, CSS et JavaScript.",
    },
];

  const simplePosts = [
    {
      id: 1,
      title: "Annonce: Réunion générale",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
      description: "Tous les membres sont invités à la réunion générale du club ce vendredi.",
      date: "2025-06-05",
    },
    {
      id: 2,
      title: "Annonce: Hackathon",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      description: "Participez au hackathon annuel du club, ouvert à tous les membres.",
      date: "2025-06-10",
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
    {/* Header */}
    <Header/>
    {/* Header Photo */}
    <HeaderPhoto />
    {/* ...rest of your code... */}
    
          {/* Contenu Home (cards) toujours visible */}
          <div className="mx-3">
    
            <p className="py-2  text-xs ">Site de Club Informatique et Multimédia(CIM) est un site contient et bublie tous les activites 
              realise dans la Club Informatique et Multimédia
            </p>
        {/* Projects Section */}
        <section className="my-8">
          <h1 className="text-md md:text-lg  font-bold mb-4 pl-2 border-l-4 border-blue-600 bg-blue-50 py-1">Projets réalisés</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-6">
            {projects.map(project => (
              <Card key={project.id} {...project} />
            ))}
          </div>
        </section>

        {/* Formations Section */}
        <section className="my-8">
          <h1 className="text-md md:text-lg font-bold mb-4 pl-2 border-l-4 border-green-600 bg-green-50 py-1">Formations prévues</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {formations.map(formation => (
              <Formation key={formation.id} {...formation} />
            ))}
          </div>
        </section>

        {/* Simple Posts Section */}
        <section className="my-8">
          <h1 className="text-xl font-bold mb-4 pl-2 border-l-4 border-gray-600 bg-gray-50 py-1">Annonces et Actualités</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {simplePosts.map(post => (
              <Post key={post.id} {...post} />
            ))}
          </div>
        </section>
          </div>
    
          <Footer />
  </div>
);
// ...existing code...
}

export default Home;
