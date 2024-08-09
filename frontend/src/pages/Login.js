import "./styles/login.css";
import mainicon from './mainicon.png';

function Login() {
  return (
    <div className="login">
      <img src={mainicon} alt="시작화면" className="icon" />
        <h1>병원 키오스크 연습 웹</h1>
        <h2>홀로서기</h2>
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

export default Login;