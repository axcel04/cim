import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";


const project = [
  { id: 1, nom: "location", logo: "/cim.png", description: "Le projet vient de résoudre les locations." },
];

function Project() {
  const navigate = useNavigate();

  return (
    <div>
      <Header/>
      <div className="mt-8 max-w-2xl mx-auto px-4">
        {project.map((prj) => (
          <div
            key={prj.id}
            className="shadow-sm mb-8 p-6 rounded-sm border bg-white flex flex-col sm:flex-row gap-6 items-center"
          >
            <img
              src={prj.logo}
              alt={prj.nom}
              className="w-20 h-20 rounded-full border-2 border-blue-200 object-cover"
            />
            <div className="flex-1">
              <h2 className="text-xl font-bold text-blue-700">{prj.nom}</h2>
              <p className="text-gray-700 text-base mt-2">{prj.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Project;