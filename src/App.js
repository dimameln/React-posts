import React from 'react';
import './styles/App.css';
import {BrowserRouter as Router} from "react-router-dom";
import NavBar from './components/UI/navbar/NavBar';
import AppRouter from './components/AppRouter';

function App() {
    return (
        <Router>
            <NavBar/>
            <AppRouter/>
        </Router>
    )
}

export default App;
