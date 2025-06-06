
import { useNavigate } from "react-router-dom";

function Withdraw() {
    const navigate = useNavigate()
    return (
        <>
           <h3>I am Withdraw</h3>
           <button onClick={()=>navigate('/')}>Profil</button>
        </>

    )
}
export default Withdraw;
