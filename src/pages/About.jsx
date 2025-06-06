import { useNavigate } from "react-router-dom";
function About() {
    const navigate = useNavigate();
    return(
        <>
          <p>Hello I am About</p>
          <button onClick={()=>navigate('/')}>Profil</button>
        </>
    )
}
export default About;