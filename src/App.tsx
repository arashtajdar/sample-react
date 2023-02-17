import React from 'react';
import logo from './logo.svg';
import MenuBar from "./components/MenuBar";
import Footer from './components/Footer';
import Activities from "./components/Activities";

import './App.css';
function App() {
  return (
    <div className="App">
      <MenuBar></MenuBar>
 <Activities></Activities>
<Footer></Footer>
    </div>
  );
}

export default App;
