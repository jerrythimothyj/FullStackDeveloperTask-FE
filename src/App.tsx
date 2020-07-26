import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import { fetchGithubUsers } from './services/github/github.service';

function App() {

  useEffect(() => {
    fetchGithubUsers("jerry", "users", 1, 100)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
