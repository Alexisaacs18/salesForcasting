// App.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header';


function App() {
  return (

    <>
      <header>
        <Header />
      </header>
      <Outlet />
    </>
  );

}

export default App;
