import './App.css';
import logo from './img/test_main.png';
import styled from "styled-components";
import Button from "./button";
import { useState } from 'react';

function App() {

  let [thumb, thumbPlus] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} onClick={()=>{ thumbPlus(0)}} className='' alt='React' />
        <text>UriSystem Hompage dev1.0</text>
        &nbsp;
        <span onClick={ ()=>{ thumbPlus(thumb + 1)}}>👍{thumb}</span>
        {/* <text><Button primary>test</Button></text>*/}
      </header>
    </div>
  );
}

export default App;
