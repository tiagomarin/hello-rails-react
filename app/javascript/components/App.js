import React from 'react';
// import './App.css';
import Greeting from './Greeting/Greeting';

function App() {
  return (
    <main className="background">
      <h1 className="my-heading">Hello React Rails!</h1>
      <h2> this is one of my greetings:</h2>
      <Greeting />
    </main>
  );
}

export default App;
