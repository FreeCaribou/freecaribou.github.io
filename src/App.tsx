import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import Main from './Example';

function App() {

  useEffect(() => {
    console.log('hello');
  })

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn Reacteee
    //     </a>
    //   </header>
    // </div>

    <Main />
  );
}

export default App;
