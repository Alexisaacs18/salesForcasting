import React from 'react';
import { useState, useEffect } from 'react';
import PipelineContainer from './Components/PipelineContainer';
import Search from './Components/Search';
import RepPage from './Components/RepPage';
import StagePage from './Components/StagePage';
import ClosePage from './Components/ClosePage';
import Header from './Components/Header';
import './App.css';

function App() {

  const url = "http://localhost:3001/deals"

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
      <RepPage />
      <ClosePage />
      <StagePage />
      <Search />
      <PipelineContainer />
    </div>
  );
}

export default App;
