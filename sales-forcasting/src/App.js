import React from 'react';
import PipelineContainer from './Components/PipelineContainer';
import RepPage from './Components/RepPage';
import StagePage from './Components/StagePage';
import ClosePage from './Components/ClosePage';
import Header from './Components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <RepPage />
      <ClosePage />
      <StagePage />
      <PipelineContainer />
    </div>
  );
}

export default App;
