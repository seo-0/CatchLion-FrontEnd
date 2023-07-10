import React, { useEffect, useState } from 'react';
import axios from 'axios';
import slogan from './image/slogan.jpg';
import Detail from "./Detail";
import './Home.scss';
import { Link, } from 'react-router-dom';

const Home = () => {
  const [jobPostings, setJobPostings] = useState([]);

  useEffect(() => {
    axios
      .get('http://3.34.2.126:8080/jobs')
      .then((response) => setJobPostings(response.data.jobList))
      .catch((error) => {
        console.error('기업정보를 불러오는데 실패:', error);
      });
  }, []);

  return (
    <div>
      <div className="slogan-container">
        <h2>사자를 잡<span>(job)</span>아라! With CatchLion!</h2>
        <img src={slogan} alt="슬로건 이미지" />
      </div>

    <div className="job-grid">
        {jobPostings.map((jobPosting) => (
          <Link to={`/Detail/${jobPosting.jobId}`} key={jobPosting.jobId} className="job-card">
                <h3>{jobPosting.title}</h3>
                <p>채용기업: {jobPosting.name}</p>
                <p>지원마감일: {jobPosting.deadline}</p>
                <p>기업위치: {jobPosting.location}</p>

            </Link>
        ))}
    </div>

      {/* <div onClick={goDetail}>
        useNavigate(()=>{

        }) 디테일.js 부분이랑 연결시키는 코드

      </div> */}
    </div>
  );
};

export default Home;
