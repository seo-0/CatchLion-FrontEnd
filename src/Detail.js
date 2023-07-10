import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import "./Detail.css";

const Title = styled.div`
  width: 80%;
  margin: 0 auto;
`;
const Btndiv = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
`;
const Deadlinediv = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
  font-weight: bold;
`;

const Detail = () => {
  const { jobId } = useParams();
  const [detailInfo, setDetailInfo] = useState(null);

  useEffect(() => {
    const fetchDetailData = async () => {
      try {
        const response = await axios.get(`http://3.34.2.126:8080/jobs/2`);
        setDetailInfo(response.data.findDetailDto);
      } catch (error) {
        console.error("채용 공고 디테일을 가져오는 도중 에러 발생", error);
        setDetailInfo(null);
      }
    };

    fetchDetailData();
  }, [jobId]);

  if (!detailInfo) {
    return <div>채용 공고 디테일을 불러오는 중...</div>;
  }

  return (
    <div>
      <Title>
        <h2>채용 정보</h2>
      </Title>
      <div className="DetailsContainer">
        <div className="intro">
          <p>{detailInfo.jobId}</p>
          <h3>{detailInfo.title}</h3>
        </div>
        <div className="ACinfo">
          <p className="info">{detailInfo.description}</p>
        </div>
        <div className="Coinfo">
          <p className="info">기업정보</p>
          <p>회사 이름: {detailInfo.name}</p>
          <p>회사 위치: {detailInfo.location}</p>
        </div>
      </div>
      <br />
      <Btndiv>
        <Link to="/register">
          <button id="detailbtn">즉시 지원</button>
        </Link>
      </Btndiv>
      <Deadlinediv>
        <p>
          해당 회사의 서류 마감일은{" "}
          <span style={{ color: "rgb(249, 165, 7)", fontWeight: "bold" }}>
            {detailInfo.deadline}
          </span>
          입니다.
        </p>
      </Deadlinediv>
    </div>
  );
};

export default Detail;
