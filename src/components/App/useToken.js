import { useState } from 'react';

export default function useToken(){
    const getToken=()=>{
        const tokenString = localStorage.getItem('token');
        console.log('tokenString =', tokenString);
        
        const userToken = JSON.parse(tokenString);
        return userToken
    };

    
    
    

    const [token, setToken] = useState(getToken() || null); // Set initial value to null if token is not available
    const saveToken = userToken => {
        localStorage.setItem('token',JSON.stringify(userToken));
        setToken(userToken);
    };

    

    
    return{
        setToken: saveToken,
        token
    }
}