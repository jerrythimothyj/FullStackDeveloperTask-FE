import React, { useEffect, useState } from 'react';
import Loader from "react-loader"
import logo from './logo.svg';
import './App.scss';
import { fetchGithubUsers } from './services/github/github.service';
import { showLoaderCountState } from './services/api/api.service';

function App() {

  const [isShowLoader, setIsShowLoader] = useState(0)

  useEffect(() => {
    showLoaderCountState.subscribe((showLoaderCount: any) => {
      setIsShowLoader(showLoaderCount)
    })
    fetchGithubUsers("jerrythi", "users", 1, 100)
  }, [])

  return (
    <div className="App">
      <Loader loaded={!isShowLoader}></Loader>
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
