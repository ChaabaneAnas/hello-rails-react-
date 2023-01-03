import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Greetings from './components/Greetings';

function App() {
  return (
    <>
      <div className='App'>
        <header>
          <h1>Random Greetings</h1>
        </header>
      </div>
      <Routes>
        <Route path='/' element={<Greetings />} />
      </Routes>
    </>
  );
}

export default App;