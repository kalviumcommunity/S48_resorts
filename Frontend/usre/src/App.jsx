import React from 'react';
import Landingpage from './components/Landingpage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import SignUp from './components/SignUp';
=======
import Login from './components/Login';
>>>>>>> main
import Users from './components/Users';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';

function App() {
  return (
    <Router>
      <div>
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<Landingpage />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/Create" element={<CreateUser />} />
          <Route path="/update/:id" element={<UpdateUser />} />
=======
          <Route path="/" element={<Landingpage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/Users" element={<Users/>} />
          <Route path="/Create" element={<CreateUser/>} />
          <Route path="/update/:id" element={<UpdateUser/>} />
>>>>>>> main

        </Routes>
      </div>
    </Router>
  );
}

export default App;
