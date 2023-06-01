import React from 'react';
import Header from './Components/Header';
import { HashRouter as Router, Routes, Route, Link, BrowserRouter, HashRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Datapoints from './Pages/Datapoints';
import Testresults from './Pages/Testresults';


function App() {
  return (
    <>
      <div className="App">
        <nav>
          <Header />
        </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Datapoints" element={<Datapoints />} />
            <Route path='/Testresults' element={<Testresults />} />
          </Routes>
      </div>
      </>
    
  );
}

export default App;
