import Header from "../components/Header";
import Footer from "../components/Footer";
import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const categories = [
  { key: "projects", label: "Projets", url: "/project" },
  { key: "formations", label: "Formations", url: "/formations" },
  { key: "partnership", label: "Collaboration", url: "/collaboration" },
  { key: "login", label: "Login", url: "/login" },
];

// Use the same data as Home.jsx
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
    title: "Backend",
    image: "/image.jpg",
    dure: "Formation de 3 mois, commence le 01/10/2025",
    description: "Apprenez à créer des API robustes avec Node.js et Express.",
  },
  {
    id: 3,
    title: "Fullstack",
    image: "/image.jpg",
    dure: "Formation de 6 mois, commence le 15/01/2026",
    description: "Devenez développeur fullstack en maîtrisant frontend et backend.",
  },
];

function Formations() {
  const navigate = useNavigate();

  return (
    <div>
      <Header/>
      <div className="mt-8 max-w-2xl mx-auto px-4">
        {formations.map((forma) => (
          <div key={forma.id} className="shadow-sm mb-8 p-6 rounded-sm bg-white flex flex-col gap-4">
            <img
              src={forma.image}
              alt={forma.title}
              className="w-full h-48 object-cover rounded-md border-2 border-yellow-200"
            />
            <div>
              <h2 className="text-xl font-bold text-green-700">{forma.title}</h2>
              <p className="text-xs text-gray-500 mt-1">{forma.dure}</p>
              <p className="text-gray-700 text-base mt-2">{forma.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Formations;