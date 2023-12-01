import React from 'react';
import RepPage from './RepPage';
import ClosePage from './ClosePage';
import StagePage from './StagePage';

function Header() {
    return (
        <div className="Header">
            <h1>Forecast.io</h1>
            <RepPage />
            <ClosePage />
            <StagePage />
        </div>
    );
}

export default Header;