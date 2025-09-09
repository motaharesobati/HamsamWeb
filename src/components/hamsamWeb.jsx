import React from "react";
import '../App.css';
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import HomePage from './Homepage';
import WallPage from './wallhamsam/Wallpage';
function Main(){
    return(
    <div>
        <Header/>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/wall" element={<WallPage />}/>
        </Routes>
    </div>
    )
} 
export default Main;