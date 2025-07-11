import { useContext, useState } from "react"
import "../../pages/Login/login.scss"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase.config"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../Context/AuthContext"

const Login = () => {
  const [error, setError] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate();

  const {dispatch} = useContext(AuthContext)
  
  const handleLogin = (e) => {
    e.preventDefault();
  
    if (email === "mohamedaziz.nacib@esprit.tn" && password === "123456") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch({ type: "LOGIN", payload: user });
          navigate("/");
        })
        .catch((error) => {
          setError(true);
        });
    } else {
      setError(true);
    }
  };
  
  return(
    <div className="login">
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
        {error && <span>Wrong email or password!</span>}
      </form>
    </div>



  )

}
export default Login