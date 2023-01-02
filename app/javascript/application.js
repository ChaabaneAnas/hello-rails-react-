import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

export function Greetings() {
  const [greetings, setGreetings] = useState([])

  const fetchGreetings = async () => {
    const response = await fetch('http://127.0.0.1:3000/api/v1/users/1/greetings')
    const data = await response.json()
    setGreetings(data)
  }

  useEffect(() => {
    fetchGreetings()
  }, [])

  return (
    <div className='greeting__container'>
      {
        greetings.map(greeting => (
          <ul key={greeting.id}>
            <li>{ greeting.message }</li>
          </ul>
        ))
      }
    </div>
  )
}

function App() {
  return (
    <div className='App'>
      <header>
          <h1>Random Greetings</h1>
      </header>
      <Greetings />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
