import React, { Component } from 'react';
import "./Login.css";
import photo from '../photo.png';

class Signin extends Component {
  render() {
    return (
      <div className="login">
        <img src={photo} alt="시작화면" className="start" />
        <h3>병원 키오스크 연습 웹</h3>
        <h4>홀로서기</h4>
        <form>
          <div className="text_area">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="아이디"
              className="text_input"
            />
          </div>
          <div className="text_area">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="비밀번호"
              className="text_input"
            />
          </div>
          <input
            type="submit"
            value="로그인"
            className="btn"
          />
        </form>
        <a className="link" href="/signup">처음 오셨나요?</a>
      </div>
    )
  }
}

export default Signin;