import React from 'react';
import PipelineContainer from './Components/PipelineContainer';
import RepPage from './Components/RepPage';
import StagePage from './Components/StagePage';
import ClosePage from './Components/ClosePage';
import Header from './Components/Header';
import './App.css';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';


function App() {
  return (
    <PrimeReactProvider>
      <div className="App">
        <Header />
        <RepPage />
        <ClosePage />
        <StagePage />
        <PipelineContainer />
      </div>
    </PrimeReactProvider>

  );
}

export default App;
