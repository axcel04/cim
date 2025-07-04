import { Menu, X, Home, Folder, GraduationCap, Newspaper, LogIn, Handshake } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const categories = [
      { key: "home", label: "Acceuil", url: "/", icon: Home },
      { key: "projects", label: "Projets", url: "/projects", icon: Folder },
      { key: "formations", label: "Formations", url: "/formations", icon: GraduationCap },
      { key: "actualite", label: "Actualite", url: "/actualite", icon: Newspaper },
      {key:"collaborateurs", label:"Collaborateurs", url:"/collaboration",icon: Handshake},    
      { key: "login", label: "Login", url: "/login", icon: LogIn },
  ];

  const handleShow = () => setShow(!show);

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <nav className="flex items-center justify-between px-4 py-3 md:py-5">
        {/* Logo and Site Name */}
        <div className="flex items-center space-x-3">
          <img src="/cim.png" alt="CIM Logo" className="w-10 h-10 rounded-full" />
          <span className="text-lg font-medium md:font-bold">
            <span className="md:hidden">CIM</span>
            <span className="hidden md:inline">Club Informatique & Multimédia</span>
          </span>
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
          <Menu className="w-6 h-6" />
        </button>
      </nav>
        
          <div className={`fixed top-0 right-0 w-2/3 max-w-xs bg-white p-6 space-y-2 h-full transform ${show ? "translate-x-0" : "translate-x-full"} 
              transition-transform duration-300  ease-in-out z-50 flex justify-center shadow-lg`}>
            
            <button
              className="mb-2 absolute top-4 right-4 p-2 rounded hover:bg-gray-100"
              aria-label="Close menu"
              onClick={handleShow}
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
            <div className="flex flex-col pt-8 space-y-2">
              {categories.map(({ key, label, url, icon: Icon }) => (
                <button
                key={key}
                onClick={() => {
                  navigate(url);
                  setShow(false);
                }}
                className="flex items-center gap-2 text-gray-700 hover:text-blue-700 text-sm font-medium text-left"
                >
                <Icon className="w-5 h-5 text-yellow-500" />
                {label}
                </button>
              ))}
            </div>
      
          </div>
      {show && (<div onClick={handleShow} className="fixed top-0 inset-0 bg-black bg-opacity-40 z-30"
         ></div>)}

    </header>
  );
}

export default Header;