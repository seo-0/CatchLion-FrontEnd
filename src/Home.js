// import { Route, Routes } from "react-router-dom";
import React from "react";
import slogan from './image/slogan.jpg';
import './Home.scss';

const Home= ()=>{
    return(
      <div>
        <h1>사자를 잡아라! With CatchLion!</h1>
        <div className="slogan-container">
             <img src={slogan} alt="슬로건 이미지" />
             {/* <span className="slogan-text">사자를 잡아라!</span> */}
      </div>
    </div>
  );
};
export default Home;