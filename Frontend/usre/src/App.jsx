import React from 'react';
import Landingpage from './components/Landingpage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import UserList from "./components/userdata";
import CreateUser from './components/CreateUser';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Landingpage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/UserList" element={<UserList/>} />
          <Route path="/Create" element={<CreateUser/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
