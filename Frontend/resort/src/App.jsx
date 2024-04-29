import './App.css';
import Landingpage from './components/Landingpage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/Signup';
import Login from './components/Login';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} /> 
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
