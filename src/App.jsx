import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Post from "./pages/Post";
import Actualite from "./pages/Actualite";
import Projects from "./pages/Projects";
import Formations from "./pages/Formations";
import Collaboration from "./pages/Collaboration";
import Formation from "./pages/formation";
import Project from "./pages/Project";
// import PostForm from "./pages/Signup";

function App() {
  return(
    <>
    <BrowserRouter>
       <Routes>
        {/* <Route path="/" element={<PostForm />} /> */}
         <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
         <Route path="/post" element={<Post/>} />
         <Route path="/actualite" element={<Actualite/>} />
         <Route path="/projects" element={<Projects/>} />
         <Route path="/formations" element={<Formations/>} />
         <Route path="/collaboration" element={<Collaboration/>} />
         <Route path="/formation" element={<Formation/>} />
         <Route path="/project" element={<Project/>} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
