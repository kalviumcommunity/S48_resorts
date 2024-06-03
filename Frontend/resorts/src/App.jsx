import React from 'react';
import './App.css';
import Landingpage from './Components/Landingpage';
import ResortsListspage from './Components/ResortsListspage';
import UpdateUser from './Components/UpdateUsres'; 
import CreateUser from './Components/CreateUsres';
import SignUp from './Components/Signup';
import Login from './Components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
 <div>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/resortslist" element={<ResortsListspage />} />
        <Route path="/UpdateUser/:id" element={<UpdateUser />} /> 
        <Route path="/createuser" element={<CreateUser />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;