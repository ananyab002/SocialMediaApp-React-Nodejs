import React, { useState } from "react";
import './register.scss'
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
    const [inputs, setInputs] = useState({
        username: "",
        password: "",
        email: "",
        name:""
    })

    const [errs, setErrs] = useState(null);

    const [msg, setMsg] = useState(null);

    const handleInputs = (e) => {
        setErrs(null)
         setMsg(null)
       setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleRegister = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8800/api/auth/register", inputs);
            setMsg(res.data)
            
        } catch (error) {
            setErrs(error.response.data);
        }
    }
    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>Register</h1>
                    <form onSubmit={handleRegister}> 
                        <input type="text" placeholder="Username" name="username" onChange={handleInputs} required/>
                        <input type="Password" placeholder="Password" name="password" onChange={handleInputs} required/>
                        <input type="text" placeholder="Email" name="email" onChange={handleInputs} required/>
                        <input type="text" placeholder="Name" name="name" onChange={handleInputs} required />
                        {errs && <span style={{ color: "red" }}>{errs}</span>}
                        {msg && <span style={{color:"green"}}>{msg}</span>}
                        <button>Register</button>
                    </form>
                </div>
                <div className="right">
                    <h1>Register Here</h1>
                    <p>
                         “A good friend is a connection to life - a tie to the past, a road to the future, the key to sanity in a totally insane world.”
                    </p>
                    <span>Do you have an account?</span>
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Register;