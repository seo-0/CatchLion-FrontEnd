// import { Route, Routes } from "react-router-dom";
// import Detail from "./Detail";
import React from "react";
import "./Register.css";
import { useState } from "react";

const Register=()=>{
    return(
        <div>
            <h2>지원하기</h2><br/>
            <form>
                <label>지원동기(1000자 이내)</label><br /><br/>
                <textarea className="inputRegi"></textarea><br /><br /><br/>
                <label>성장 과정(1000자 이내)</label><br /><br/>
                <textarea type="textarea" className="inputRegi"></textarea><br /><br /><br/>
                <label>성격 장단점(500자 이내)</label><br /><br/>
                <textarea type="textarea" className="inputRegi" ></textarea><br /><br /><br/>
                <label>위기 극복 사례(1000자 이내)</label><br /><br/>
                <textarea type="textarea" className="inputRegi"></textarea><br /><br /><br/>
                <label>주도적으로 업무를 수행한 사례(1000자 이내)</label><br />
                <textarea type="textarea" className="inputRegi"></textarea><br /><br /><br/>
                <label>입사 후 계획(1000자 이내)</label><br /><br/>
                <textarea type="textarea" className="inputRegi"></textarea><br /><br /><br/>
                <label>하고 싶은 말(1000자 이내)</label><br /><br/>
                <textarea type="textarea" className="inputRegi"></textarea>
            </form>
            <button className="hi">자소서 제출</button>
        </div>


    );
}
export default Register;