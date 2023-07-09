// import { Route, Routes } from "react-router-dom";
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

const Detail=()=>{
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
                </div>
            </div><br/>
            <Btndiv>
                <button>즉시 지원</button>
            </Btndiv>
        </div>
    );
}
export default Detail;