import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Post from "./pages/Post";
import Dashboard from "./pages/Dashboard";
import Project from "./pages/Project";
import Formations from "./pages/Formations";
import Collaboration from "./pages/Collaboration";
import Following from "./pages/Following";

function App() {
  return(
    <>
    <BrowserRouter>
       <Routes>
         <Route path="/gggxg" element={<Following/>} />
         <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
         <Route path="/post" element={<Post/>} />
         <Route path="/dashboard" element={<Dashboard/>} />
         <Route path="/project" element={<Project/>} />
         <Route path="/formations" element={<Formations/>} />
         <Route path="/collaboration" element={<Collaboration/>} />
        </Routes>
    </BrowserRouter>
    
    </>
  )
}
export default App;