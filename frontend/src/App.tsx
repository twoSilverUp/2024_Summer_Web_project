import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter as Router
import './App.css';
import Login from './component/Login';
import Signup from './component/Signup';
import Complete from './component/Complete';
import MainPage from './pages/MainPage';
import './styles/global.css';
import Scene4 from './pages/Scene4';
import Scene1 from './pages/Scene1';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/complete" element={<Complete />} />
        <Route path="/scene1/:step" element={<Scene1 />} />
        <Route path="/scene4/:step" element={<Scene4 />} />
      </Routes>
    </Router>
  );
}

export default App;
