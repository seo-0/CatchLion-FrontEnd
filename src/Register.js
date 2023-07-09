// import { Route, Routes } from "react-router-dom";
// import Detail from "./Detail";
import React from "react";
import "./Register.css";
// import { useState } from "react";
import styled from "styled-components";

const Regibtn = styled.div`
    width: 80%;
    margin: 0 auto;
    text-align: center;
`

const Register=()=>{
    return(
        <div>
            <h1 style={{textAlign:"center", marginTop: 20}}>지원하기</h1><br/>
            <div className="registerForm">
                <h2 style={{textAlign:"center"}}>자기소개서 작성</h2><hr/><br/>
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
            </div><br/><br/>
            <Regibtn>
                <button id="registersbtn" className="hi">자소서 제출</button>
            </Regibtn>
        </div>


    );
}
export default Register;