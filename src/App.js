import React, { Suspense, lazy } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button} from 'reactstrap'
 
import './App.css';

import {Nav} from "./components/Nav";
import {Footer} from "./components/Footer";
import {Application} from "./components/Application";


function App() {
  return (
    <div className="App">
      <div>
      <Nav/>
      <Application/>
      <Footer/>
      </div>
  
     
 
    </div>
  );
}

export default App;
