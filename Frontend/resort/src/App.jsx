import './App.css';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3000/getUsers')
      .then(response => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
      <div className="w-50">
        <table className="table">
          <thead>
            <tr>
              <th className="primary-color">Username</th>
              <th className="primary-color">Emailid</th>
              <th className="primary-color">Password</th>
              <th className="primary-color">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(Users) && Users.map(user => (
              <tr key={user.id}>
                <td>{user.userName}</td>
                <td>{user.emailId}</td>
                <td>{user.password}</td> <td>{user.phonenumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
