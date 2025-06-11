import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { Home, Folder, GraduationCap, Newspaper, LogIn } from "lucide-react";

// Categories as in Home.jsx
const categories = [
    { key: "home", label: "Acceuil", url: "/", icon: Home },
    { key: "projects", label: "Projets", url: "/project", icon: Folder },
    { key: "formations", label: "Formations", url: "/formations", icon: GraduationCap },
    { key: "actualite", label: "Actualite", url: "/actualite", icon: Newspaper },
    { key: "login", label: "Login", url: "/login", icon: LogIn },
];

// Use the same posts data as Home.jsx
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

function Actualite() {
  const navigate = useNavigate();

  return (
    <div>
      <Header categories={categories} />
      <div className="mt-8 max-w-2xl mx-auto px-4">
        {simplePosts.map((post) => (
          <div key={post.id} className="rounded-md shadow-sm mb-8 p-6 bg-white flex flex-col gap-4">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover rounded-lg border-2 border-yellow-200"
            />
            <div>
              <h2 className="text-md font-bold text-gray-800">{post.title}</h2>
              <p className="text-xs text-gray-500 mt-1">{post.date}</p>
              <p className="text-gray-700 text-sm mt-2">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Actualite;