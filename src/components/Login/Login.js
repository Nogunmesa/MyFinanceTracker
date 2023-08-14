import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './Login.css';

async function loginUser(credentials){
    try {
        // TypeError: Failed to fetch
        // The URL is either incomplete or incorrect
        const response = await fetch('http://localhost:8080/login');
        
        if (!response.ok) {
        
        throw new Error(`Error! status: ${response.status}`);
        
        }
        
        const result = await response.json();
        
        return result;
        
        } catch (err) {
        
        console.log(err); }
        
        }
        
        loginUser();
//     return fetch('http://localhost:8080/login',{
//         method: 'POST',
//         headers: {
//             'Content-Type':'application/json'
//         },
//         body: JSON.stringify(credentials)
//     })
//     .then(data => data.json())
// }

export default function Login({setToken}){
    // State variables for username and password
    const[username,setUserName] = useState();
    const[password, setPassword] = useState();
    
    const handleSubmit=async e=>{
        console.log('Submitting form');
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        console.log('token received:', token);
        setToken(token);
  }
       
    return(
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)}/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)}/>
                </label>
                <div>
                    {/* Login button */}
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
Login.propTypes = {
    setToken: PropTypes.func.isRequired
};