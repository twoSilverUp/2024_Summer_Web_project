import { useState } from 'react';
import "./signup.css";

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    id: '',
    password: '',
    phone: '',
    identify: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup form submitted');
  };

  return (
    <div className="login">
      <h5>홀로서기</h5>
      <h6>병원 키오스크 연습 웹</h6>
      <form onSubmit={this.handleSubmit}>
        <h7>이름</h7>
        <input
          className="text_area"
          type="text"
          name="username"
          placeholder="이름을 입력해주세요."
          value={this.state.username}
          onChange={this.handleChange}
        />
        <h8>아이디</h8>
        <input
          className="text_area"
          type="text"
          name="id"
          placeholder="아이디를 입력해주세요."
          value={this.state.id}
          onChange={this.handleChange}
        />
        <h9>비밀번호</h9>
        <input
          className="text_area"
          type="password"
          name="password"
          placeholder="비밀번호"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <h10>전화번호</h10>
        <input
          className="text_area"
          type="text"
          name="phone"
          placeholder="전화번호(-제외)"
          value={this.state.phone}
          onChange={this.handleChange}
        />
        <h11>주민번호</h11>
        <input
          className="text_area"
          type="text"
          name="identify"
          placeholder="주민번호(-제외)"
          value={this.state.identify}
          onChange={this.handleChange}
        />
        <button className="btn" type="submit">회원가입</button>
      </form>
      <a className="goback" href="/login">계정이 이미 있으신가요?</a>
    </div>
  );
}

export default Signup;