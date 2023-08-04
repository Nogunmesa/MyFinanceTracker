import React, {useState} from "react";
import "./Login.css";

export default function Login(){
    // State variables for email and password
    const[email,setEmail] = useState("");
    const[password, setPassword] = useState("");
    
    // Function that checks if the form is valid for submission
    // Checks if user inputed something (** need to optimize to make sure its valid email account)
    function validateForm(){
        return email.length > 0 && password.length > 0;
    }

    // Function to handle form submission
    function handleSubmit(event){
        event.preventDefault();
    }
    
    return(
        <div className="Login">
            {/* Login form */}
            <form onSubmit={handleSubmit}>
                {/* Input field for email */}
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        autoFocus
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                {/* Input field for password */}
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                {/* Login button */}
                <button className="btn" type="submit" disabled={!validateForm()}>
                    Login
                </button>
            </form>
        </div>
    );
}