import { useState } from 'react';

export default function useToken() {
  // Function to get token from localStorage
  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  };

  // Initialize token state with the token from localStorage
  const [token, setToken] = useState(getToken());

  // Function to save token to localStorage
  const saveToken = userToken => {
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  // Function to remove token from localStorage
  const removeToken = () => {
    localStorage.removeItem('token');
    setToken(null); // Set token to null upon removal
  };

  // Return token object with the defined functions
  return {
    setToken: saveToken,
    removeToken,
    token
  };
}