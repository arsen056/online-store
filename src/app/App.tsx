import React from 'react';

import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from "../UI/Header/Header";

import {ProductLists} from "../features/ProductLists/ProductLists";


function App() {
  return (
    <div className="App">
      <Header/>
      <ProductLists/>
    </div>
  );
}

export default App;
