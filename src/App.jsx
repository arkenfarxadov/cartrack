import React, { useState,useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./component/header/header";
import Home from "./component/home/home";
import Uslugi from "./component/drugieuslugi/uslugi";
import "../src/component/font-awesome-4.7.0/css/font-awesome.min.css"
const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/uslugi" element={<Uslugi/>}/>
            </Routes>
        </>
    )
}
export default App;