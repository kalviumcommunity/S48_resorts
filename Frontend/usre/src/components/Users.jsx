import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([])
  
  useEffect(() => {
    axios.get('http://localhost:3000/')
    .then(result => setUsers(result.data))
    .catch(err => console.log(err))
  },[])
  
  const handleDelete= (id) =>{
    axios.delete('http://localhost:3000/deleteUser/'+id)
    .then(res => {console.log(res)
      window.location.reload()}) 
      .catch(errr => console.log(errr))
    }
  return (
    <div className="d-flex vh-100 bg-black justify-content-center align-items-center">
      <div className='w-100 bg-white rounded p-3'>
        <Link to="/create" className='btn btn-success' > Add +</Link>
        <table className="table">
          <thead>
            <tr>
              <th>Resort Name</th>
              <th>Location</th>
              {/* <th>Description</th> */}
              {/* <th>Nearby Attractions</th>
              <th>Amenities</th> */}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id}>
                <td>{user.resort}</td>
                <td>{user.Location}</td>
                {/* <td>{user.Description}</td> */}
                {/* <td>{user.nearByAttractions.join(' , ')}</td> */}
                {/* <td>{user.Amenities.join(' , ')}</td> */}
                <td>
                  <Link to={`/update/${user._id}`} className='btn btn-success' > Update</Link>
                  <button className='btn btn-danger'
                  onClick={(e)=>handleDelete(user._id)}> Delete</button> 
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 

export default Users;