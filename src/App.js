import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Guilds from './Components/Guilds';
import Dragons from './Components/Dragons';
import Error from './Components/Error';
import DarkGuild from './Components/DarkGuilds';
import fairylogo from './Images/fairytail-logo.png';
const App = () => {
  return (
    <div className="browser-router">
      <Router>
        <div className="router-links">
          <img src={fairylogo} alt="fairytail-logo" />
          <Link to="/"> Home </Link>
          <Link to="/guilds"> Guilds </Link>
          <Link to="/dguilds"> DarkGuilds </Link>
          <Link to="/dragons"> Dragons </Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guilds" element={<Guilds />} />
          <Route path="/dguilds" element={<DarkGuild />} />
          <Route path="/dragons" element={<Dragons />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;