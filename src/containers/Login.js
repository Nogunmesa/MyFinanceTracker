import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";

export default function Login(){
    console.log('Entering here');
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
                <Form.Group size="lg" controlld="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                    autoFocus
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button size="lg" type="submit" disabled={!validateForm()}>
                    Login
                </Button>
            </form>
        </div>
    );
}