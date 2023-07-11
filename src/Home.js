import React, { useEffect, useState } from 'react';
import axios from 'axios';
import slogan from './image/slogan.jpg';
import lion from './image/catchlion.jpg';

import './Home.scss';
import { Link } from 'react-router-dom';

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
        <h1>Catch Your <span>Job</span> with <span>CATCHLION!</span></h1>
        <img src={slogan} alt="슬로건 이미지" />
      </div>

      <div className="job-grid">
        {jobPostings.map((jobPosting) => (
          <Link to={`/Detail/${jobPosting.jobId}`} key={jobPosting.jobId} className="job-card">
            <h4>❮이번 주 공채 소식!❯</h4>
            <h3>{jobPosting.title}</h3>
            <p>채용기업: {jobPosting.name}</p>
            <p>지원마감일: {jobPosting.deadline}</p>
            <p>기업위치: {jobPosting.location}</p>
          </Link>
        ))}
      </div>

    <footer className="footer">
        <nav>
            <img src={lion} alt="캐치라이언 이미지" />
            <a href='https://github.com/CATCHLION'>CATCHLION Github </a>
        </nav>
        <div className="contact-info">
          <p>전화번호: 123-456-7890</p>
          <p>이메일: info@catchlion.com</p>
          <p>Copyright 2023. (주)CATCHLION. All Rights Reserved.</p>
        </div>
    
    </footer>

    </div>
  );
};

export default Home;
