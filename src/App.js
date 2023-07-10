import { Route, Routes } from "react-router-dom";
import React from 'react';

import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Detail from "./Detail";

import Header from './Header';
import CategoryBar from './CategoryBar';


function App() {
  return (
    <div>
      <Header />
      <CategoryBar />
        <Routes>
          <Route path="/" element ={<Home />} />
          <Route path="/Detail/:jobId" element ={<Detail />} />
          <Route path="/Register" element ={<Register />} />
          <Route path="/Login" element ={<Login />} />
        </Routes>
    </div>
  );
}

export default App;
