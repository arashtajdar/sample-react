import React from 'react';
import Header from "./components/Header";
import Footer from './components/Footer';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';
import Home from "./pages/Home";
import ManageActivities from "./pages/ManageActivities";
function App() {
  return (
    <div className="App">
        <Header>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Home/>}></Route>
                    <Route path={"/manage-activities"} element={<ManageActivities/>}></Route>
                </Routes>
            </BrowserRouter>
            <Footer></Footer>
        </Header>


    </div>
  );
}

export default App;
