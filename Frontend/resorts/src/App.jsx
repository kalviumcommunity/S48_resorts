import React from 'react';
import './App.css';
import Landingpage from './Components/Landingpage';
import ResortsListspage from './Components/ResortsListspage';
// import Signup from './Components/';
// import Login from './Components/Login';
// import Users from './Components/Users';
// import UpdateUsers from "./Components/UpdateUsers";
import CreateUser from './Components/CreateUsres'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/resortslist" element={<ResortsListspage />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
        {/* <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} /> */}
        {/* <Route path="/update" element={<UpdateUsers />} /> */}
        <Route path="/createuser" element={<CreateUser />} /> {/* Ensure route consistency */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
