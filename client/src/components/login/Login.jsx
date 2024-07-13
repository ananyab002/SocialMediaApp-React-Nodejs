import React, { useContext, useState } from "react";
import './login.scss'
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const Login = () => {
    const navigate=useNavigate()
    const [inputs, setInputs] = useState({
        username:"",
        password:""
    })
    const [err,setErr]=useState(null)

    const handleChange = (e) => {
        setInputs(prev => ({ ...prev, [e.target.name]:e.target.value  }))
        console.log(inputs)
    }

    const { login } = useContext(AuthContext)
    
    const handleLogin = async(e) => {
        e.preventDefault()
        try {
            await login(inputs)
            navigate("/")
        } catch (error) {
            setErr(error.response.data)
        }
      
    }

    return(
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Hello World.</h1>
                    <p>
                        “A good friend is a connection to life - a tie to the past, a road to the future, the key to sanity in a totally insane world.”
                    </p>
                    <span>Don't you have an account?</span>
                    <Link to="/register">
                        <button>Register</button>
                    </Link>
                    
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form onSubmit={handleLogin}>
                        <input type="text" placeholder="Username" name="username" onChange={handleChange} required/>
                        <input type="password" placeholder="Password" name="password" onChange={handleChange} required/>
                        {err && <span style={{color:"red"}}>{ err}</span>}
                        <button >Login</button>
                    </form>    
                </div>
            </div>
        </div>
    )
}
export default Login;