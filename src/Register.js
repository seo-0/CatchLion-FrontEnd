import React, { useState } from "react";
import "./Register.css";
import axios from "axios";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://3.34.2.126:8080/job/2/cover-letter", formData);
      console.log(response.data);
      // 성공적으로 제출되었을 때 처리할 작업을 수행하세요.
    } catch (error) {
      console.error("지원서 제출 중에 오류가 발생했습니다.", error);
      // 오류 발생 시 처리할 작업을 수행하세요.
    }
  };

  return (
    <div>
      <h2>지원하기</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <label>지원동기(1000자 이내)</label>
        <br />
        <br />
        <textarea
          name="motivation"
          className="inputRegi"
          value={formData.motivation}
          onChange={handleChange}
        ></textarea>
        <br />
        <br />
        <label>성장 과정(1000자 이내)</label>
        <br />
        <br />
        <textarea
          name="growthProcess"
          className="inputRegi"
          value={formData.growthProcess}
          onChange={handleChange}
        ></textarea>
        <br />
        <br />
        <label>성격 장단점(500자 이내)</label>
        <br />
        <br />
        <textarea
          name="strengthsAndWeaknesses"
          className="inputRegi"
          value={formData.strengthsAndWeaknesses}
          onChange={handleChange}
        ></textarea>
        <br />
        <br />
        <label>위기 극복 사례(1000자 이내)</label>
        <br />
        <br />
        <textarea
          name="crisisManagement"
          className="inputRegi"
          value={formData.crisisManagement}
          onChange={handleChange}
        ></textarea>
        <br />
        <br />
        <label>주도적으로 업무를 수행한 사례(1000자 이내)</label>
        <br />
        <textarea
          name="proactiveWork"
          className="inputRegi"
          value={formData.proactiveWork}
          onChange={handleChange}
        ></textarea>
        <br />
        <br />
        <label>입사 후 계획(1000자 이내)</label>
        <br />
        <textarea
          name="futurePlans"
          className="inputRegi"
          value={formData.futurePlans}
          onChange={handleChange}
        ></textarea>
        <br />
        <br />
        <label>하고 싶은 말(1000자 이내)</label>
        <br />
        <textarea
          name="additionalComments"
          className="inputRegi"
          value={formData.additionalComments}
          onChange={handleChange}
        ></textarea>
        <br />
        <br />
        <button type="submit" className="hi">
          자소서 제출
        </button>
      </form>
    </div>
  );
};

export default Register;
