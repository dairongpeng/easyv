import React from 'react';
import logo from './logo.svg';
import ColumnList from './components/ColumnList'
import dataList from './mock/ColumnList.json'
import styles from './App.module.css';

function App() {
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
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <ul className = {styles.list}>
      {dataList.map((l) => 
      <ColumnList url={l.url} description={l.description} title={l.title}/>)}
    </ul>
  );
}

export default App;
