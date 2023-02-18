import React from 'react';
import Header from "./components/Header";
import Footer from './components/Footer';
import Activities from "./components/Activities";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';
function App() {
  return (
    <div className="App">
        <Header>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Activities/>}></Route>
                </Routes>
            </BrowserRouter>
            <Footer></Footer>
        </Header>


    </div>
  );
}

export default App;
