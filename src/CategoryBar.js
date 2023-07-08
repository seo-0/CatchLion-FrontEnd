import React from 'react';
import './CategoryBar.scss';

function CategoryBar() {
    return (
        <div className="CategoryBar">
          <ul>
            <li>채용공고</li>
            <li>공채정보</li>
            <li>채용추천</li>
            <li>기업&연봉</li>
            <li>취업톡톡</li>
            <li>진로탐색</li>
            
            <li>로그인</li>
            <li>회원가입</li>
          </ul>
        </div>

        // <div className="LoginBar" >
        //     <li>로그인</li>
        //     <li>회원가입</li>
        // </div>
      );
    }

export default CategoryBar;