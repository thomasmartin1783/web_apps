import React, { useState, useRef, useEffect } from 'react'



import logo from './logo.svg';
import './App.css';


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faMusic, faVolumeDown, faAngleLeft, faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'


// styles

import "./styles/app.scss"


// Components


// utils


library.add(faPlay, faVolumeDown, faMusic, far, fab, faAngleLeft, faAngleRight, faPause);




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />



        <FontAwesomeIcon className="ico skip-back" icon="angle-left" size="2x" />
        <FontAwesomeIcon icon="play" />
        <FontAwesomeIcon icon={['far', 'paper-plane']} />
        <FontAwesomeIcon
          className="ico play"
          icon={['fab', 'google-play']}
          size="2x" />
        <FontAwesomeIcon className="ico skip-forward" icon="angle-right" size="2x" />






        <p>
          Edit <code>src/App.js</code> and save to reload.
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
