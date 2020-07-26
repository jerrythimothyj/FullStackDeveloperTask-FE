import React, { useEffect, useState } from 'react';
import Loader from "react-loader"
import { ToastContainer, toast } from "react-toastify"
import logo from './logo.svg';
import { fetchGithubUsers } from './services/github/github.service';
import { showLoaderCountState } from './services/api/api.service';
import { showToasterState } from './services/toaster/toaster.service';
import "react-toastify/dist/ReactToastify.css"
import './App.scss';

function App() {

  const [isShowLoader, setIsShowLoader] = useState(0)

  useEffect(() => {
    showLoaderCountState.subscribe((showLoaderCount: any) => {
      setIsShowLoader(showLoaderCount)
    })

    showToasterState.subscribe((toasterData: any) => {
      switch (toasterData.type) {
        case "error":
          toast.error(toasterData.value)
          break;
        case "success":
          toast.success(toasterData.value)
          break;
        default:
          toast.info(toasterData.value)
          break;
      }
    })
    fetchGithubUsers("tim", "users", 1, 100)
  }, [])

  return (
    <div className="App">
      <Loader loaded={!isShowLoader}></Loader>
      <ToastContainer />
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
