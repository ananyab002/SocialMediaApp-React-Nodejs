import React from "react";
import './login.scss'
import { Link } from "react-router-dom";

const Login = () => {
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
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button>Login</button>
                    </form>    
                </div>
            </div>
        </div>
    )
}
export default Login;