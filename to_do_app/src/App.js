import './App.css';
import Home from './components/home/home';
import Login  from './components/login/login'
import Register  from './components/register/register'
import Notes from './components/notes/notes'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      </div>

    </div>
  );
}

export default App;
