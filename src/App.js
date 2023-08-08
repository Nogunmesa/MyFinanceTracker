import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./containers/Login";

export default function App(){
    return(
        <Router>
            <Routes>
              <Route exact path="/login"><Login /></Route>

            </Routes>
        </Router>
    );
}