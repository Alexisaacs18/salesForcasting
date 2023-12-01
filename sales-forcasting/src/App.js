import React from 'react';
import Header from './Components/Header';
import PipelineContainer from './Components/PipelineContainer';
import Search from './Components/Search';
import './App.css';

function App() {

  const url = "http://localhost:3000/pipeline"
  return (
    <div className="App">
      <Header />
      <Search />
      <PipelineContainer />
    </div>
  );
}

export default App;
