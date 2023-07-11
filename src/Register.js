import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import styled from "styled-components";
import axios from "axios";

const H2div = styled.div`
  margin: 0 auto;
  width: 80%;
  text-align: center;
`

const Regibtndiv = styled.div`
  margin: 0 auto;
  width: 80%;
  text-align: center;
`

const Register = () => {
    const [formData, setFormData] = useState({
      motivation: "",
      growthProcess: "",
      strengthsAndWeaknesses: "",
      crisisManagement: "",
      proactiveWork: "",
      futurePlans: "",
      additionalComments: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // 여러 질문에 해당하는 답변들을 합쳐서 content로 만듦
      const content = Object.values(formData).join("\n");
  
      axios
        .post("http://3.34.2.126:8080/job/2/cover-letter", {
          id: formData.id,
          content: content,
        })
        .then((response) => {
          alert("귀하의 지원서가 성공적으로 제출되었습니다.");
          navigate('/');
          console.log("지원서가 성공적으로 제출되었습니다.");
          console.log("전송된 ID:", formData.id);
          console.log("전송된 내용:", content);        
        })
        .catch((error) => {
            alert("귀하의 지원서 제출 중 오류가 발생했습니다. 다시 시도하세요.");
            console.error("지원서 제출 중 오류가 발생했습니다:", error);
          // 오류 처리를 위한 추가 작업을 처리하십시오
        });
    };
  return (
    <div>
      <div className="registerForm">
        <H2div><h2>지원하기</h2></H2div>
        <br />
        <H2div><h3>자기소개서 작성</h3></H2div><br/><br/>
        <form onSubmit={handleSubmit}>
          <div className="checkLetter">
            <label>지원동기(1000자 이내)</label>
            <span><span className="writelen">{formData.motivation.length}</span>/1000자<span></span></span>
          </div>
          <br />
          <textarea
            name="motivation"
            className="inputRegi"
            value={formData.motivation}
            onChange={handleChange}
            maxLength="1000"
          ></textarea>
          <br />
          <br />
          <br/>
          <div className="checkLetter">
            <label>성장 과정(1000자 이내)</label>
            <span><span className="writelen">{formData.growthProcess.length}</span>/1000자<span></span></span>
          </div>
          <br />
          <textarea
            name="growthProcess"
            className="inputRegi"
            value={formData.growthProcess}
            onChange={handleChange}
            maxLength="1000"
          ></textarea>
          <br />
          <br />
          <br />
          <div className="checkLetter">
            <label>성격 장단점(500자 이내)</label>
            <span><span className="writelen">{formData.strengthsAndWeaknesses.length}</span>/500자<span></span></span>
          </div>
          <br />
          <textarea
            name="strengthsAndWeaknesses"
            className="inputRegi"
            value={formData.strengthsAndWeaknesses}
            onChange={handleChange}
            maxLength="500"
          ></textarea>
          <br />
          <br />
          <br />
          <div className="checkLetter">
            <label>위기 극복 사례(1000자 이내)</label>
            <span><span className="writelen">{formData.crisisManagement.length}</span>/1000자<span></span></span>
          </div>
          <br />
          <textarea
            name="crisisManagement"
            className="inputRegi"
            value={formData.crisisManagement}
            onChange={handleChange}
            maxLength="1000"
          ></textarea>
          <br />
          <br />
          <br />
          <div className="checkLetter">
            <label>주도적으로 업무를 수행한 사례(1000자 이내)</label>
            <span><span className="writelen">{formData.proactiveWork.length}</span>/1000자<span></span></span>
          </div>
          <br />
          <textarea
            name="proactiveWork"
            className="inputRegi"
            value={formData.proactiveWork}
            onChange={handleChange}
            maxLength="1000"
          ></textarea>
          <br />
          <br />
          <br />
          <div className="checkLetter">
            <label>입사 후 계획(1000자 이내)</label>
            <span><span className="writelen">{formData.futurePlans.length}</span>/1000자<span></span></span>
          </div>
          <br />
          <textarea
            name="futurePlans"
            className="inputRegi"
            value={formData.futurePlans}
            onChange={handleChange}
            maxLength="1000"
          ></textarea>
          <br />
          <br />
          <br />
          <div className="checkLetter">
            <label>하고 싶은 말(1000자 이내)</label>
            <span><span className="writelen">{formData.additionalComments.length}</span>/1000자<span></span></span>
          </div>
          <br />
          <textarea
            name="additionalComments"
            className="inputRegi"
            value={formData.additionalComments}
            onChange={handleChange}
            maxLength="1000"
          ></textarea>
          <br />
          <br />
          <br />
          <Regibtndiv>
            <button type="submit" className="hi" id="registersbtn">
              자소서 제출
            </button>
          </Regibtndiv><br/>
        </form>
      </div>
    </div>
  );
};

export default Register;