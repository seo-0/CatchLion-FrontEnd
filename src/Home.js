import React, { useEffect, useState } from 'react';
import axios from 'axios';
import slogan from './image/slogan.jpg';
import './Home.scss';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const [jobPostings, setJobPostings] = useState([]);

  useEffect(() => {
    axios
      .get('http://서버:8080/jobs')
      .then((response) => setJobPostings(response.data))
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
          <Link to={`/Detail/${jobPosting.id}`} key={jobPosting.id} className="job-card">
            <h3>{jobPosting.title}</h3>
            <p>회사: {jobPosting.company}</p>
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
