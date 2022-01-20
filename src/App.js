import React from 'react'
import './App.css';
import Home from './components/Home'
import Formulaire from './components/Formulaire'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {

  return (
     <Router>
      <div className="App">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/inscription" element={<Formulaire/>}/>

          </Routes>
      </div>

     </Router>
  );
}
