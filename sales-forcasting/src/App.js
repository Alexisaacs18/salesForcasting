import React from 'react';
import { useState, useEffect } from 'react';
import Header from './Components/Header';
import PipelineContainer from './Components/PipelineContainer';
import Search from './Components/Search';
import './App.css';

function App() {

  const url = "http://localhost:3001/pipeline"

  const [deals, setDeals] = useState([])

  useEffect(() => {
    getDeals()
  }, [])

  function getDeals() {
    fetch(url)
      .then(res => res.json())
      .then(data => console.log(data))
  }


  return (
    <div className="App">
      <Header />
      <Search />
      <PipelineContainer />
    </div>
  );
}

export default App;
