import React, { Suspense, lazy } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button} from 'reactstrap'
 
import './App.css';

import {Nav} from "./components/Nav";
import {Footer} from "./components/Footer";
import {Application} from "./components/Application";
import {Jobs} from "./components/jobs";


function App() {
  return (
    <div className="App">
      <div>
      <Nav/>
      <Application/>
      {/* <Jobs/> */}
      <Footer/>
      </div>
  
     
 
    </div>
  );
}

export default App;
