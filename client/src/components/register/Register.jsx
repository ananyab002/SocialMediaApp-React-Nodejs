import React from "react";
import './register.scss'
import { Link } from "react-router-dom";

function Register() {
    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>Register</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="Password" placeholder="Password" />
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Name" />
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