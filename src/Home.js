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
        console.error('Error fetching job postings:', error);
      });
  }, []);

  return (
    <div>
      <h1>사자를 잡아라! With CatchLion!</h1>
      <div className="slogan-container">
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
