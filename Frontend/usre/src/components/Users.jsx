import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:3000/')
    .then(result => {
      if (Array.isArray(result.data)) {
        setUsers(result.data);
      } else {
        console.error("Data received is not an array:", result.data);
      }
    })
    .catch(err => console.error("Error fetching data:", err));
}, []);
  
  const handleDelete= (id) => {
    axios.delete('http://localhost:3000/deleteUser/'+id)
      .then(res => {
        console.log(res);
        window.location.reload();
      }) 
      .catch(errr => console.log(errr));
  }
  
  return (
    <>
    <div className="d-flex vh-100 bg-black justify-content-center align-items-center">
        <Link to="/Create" className='btn btn-success' > Add +</Link>
      <div className='w-100 bg-white rounded p-3'>
          <table className="table">
            <thead>
              <tr>
                <th>Resort Name</th>
                <th>Location</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                users && users.map((user, index) => {
                  return (
                      <tr key={index}>
                        <td>{user.resort}</td>
                        <td>{user.Location}</td>
                        <td>
                          <Link to={`/update/${user._id}`} className='btn btn-success'>Update</Link>
                          <button className='btn btn-danger' onClick={() => handleDelete(user._id)}>Delete</button>
                        </td>
                      </tr>
                      )
            })}
            </tbody>
          </table>
      </div>
    </div>
    </>
  );
} 

export default Users;

