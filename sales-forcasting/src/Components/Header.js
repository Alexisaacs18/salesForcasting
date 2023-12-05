import React from 'react';
import { NavLink } from "react-router-dom";
import { PrimeReactProvider } from 'primereact/api';
import '../index.css';



function Header() {
    return (
        <div className="Header">
            <h1>Forecast.io</h1>

            <PrimeReactProvider>

                <nav className='nav'>
                    <NavLink
                        to="/"
                        className="nav-link"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/reps"
                        className="nav-link"
                    >
                        Reps
                    </NavLink>
                    <NavLink
                        to="/stages"
                        className="nav-link"
                    >
                        Stages
                    </NavLink>
                </nav>
            </PrimeReactProvider>
        </div>
    );
}

export default Header;

