import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import './App.css';
import Greeting from './Greeting/Greeting';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Greeting />} />
    </Routes>
  );
}

export default App;
