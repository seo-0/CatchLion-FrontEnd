// import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import "./Detail.css";

const Title = styled.div`
    width: 80%;
    margin: 0 auto;
`
const Btndiv = styled.div`
    width: 80%;
    margin: 0 auto;
    text-align: center;
`
const Deadlinediv = styled.div`
    width: 80%;
    margin: 0 auto;
    text-align: center;
    font-weight: bold;
`

const Detail=()=>{
    const { jobId } = useParams();
    const [recruInfo, setRecruInfo] = useState([]);

    useEffect(() => {
        const fetchRecruData = async () => {
            try {
              const response = await axios.get(`https://jsonplaceholder.typicode.com/users/`);
              setRecruInfo(response.data);
            } catch (error) {
              console.error("회사 상세 정보를 가져오는 도중 에러 발생",error);
              setRecruInfo(null);
            }
        };
        
        fetchRecruData();

    }, [jobId]);

    if (!recruInfo) {
        return <div>회사 상세 정보를 불러오는중</div>;
      }

    return(
        <div>
            <Title>
                <h2>채용 정보</h2>
            </Title>
            <div className="DetailsContainer">
                <div className="intro">
                    <p>1</p>
                    <h3>hi</h3>
                </div>
                <div className="ACinfo">
                    <p className="info">지원자격</p>
                </div>
                <div className="WKinfo">
                    <p className="info">근무조건</p>
                </div>
                <div className="Coinfo">
                    <p className="info">기업정보</p>
                    <p>회사 이름: {recruInfo.name}</p>
                    <p>회사 위치: {recruInfo.username}</p>
                </div>
            </div><br/>
            <Btndiv>
                <Link to="/register">
                    <button id="detailbtn">즉시 지원</button>
                </Link>
            </Btndiv>
            <Deadlinediv>
                <p>해당 회사의 서류 마감일은 
                    <span style={{color: "rgb(249, 165, 7)", fontWeight: "bold"}}>{recruInfo.email}</span>입니다.
                </p>
            </Deadlinediv>
        </div>
    );
}
export default Detail;