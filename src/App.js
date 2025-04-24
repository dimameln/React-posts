import React, { useEffect, useState } from 'react';
import './styles/App.css';
import {BrowserRouter as Router} from "react-router-dom";
import NavBar from './components/UI/navbar/NavBar';
import AppRouter from './components/AppRouter';
import { AuthContext } from './context';

function App() {
    const [isAuth, setIsAuth] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (localStorage.getItem('auth')) setIsAuth(true)
        setIsLoading(false)
    }, [])

    return (
        <AuthContext.Provider value={{
            isAuth, 
            setIsAuth,
            isLoading
        }}>
            <Router>
                <NavBar/>
                <AppRouter/>
            </Router>
        </AuthContext.Provider>
    )
}

export default App;
