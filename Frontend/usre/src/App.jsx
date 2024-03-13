import React from 'react';
import Landingpage from './components/Landingpage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Users from './components/Users';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Landingpage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/Users" element={<Users/>} />
          <Route path="/Create" element={<CreateUser/>} />
          <Route path="/update/:id" element={<UpdateUser/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
