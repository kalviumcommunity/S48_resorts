import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import './ResortsListspage.css';
import {  useNavigate } from 'react-router-dom';


function ResortsListspage() {
  const [resorts, setResorts] = useState([]);
  const [users,setUsers] = useState([])

  const navigate = useNavigate();

  useEffect(()=>{
    axios.get("http://localhost:3000/usersdata")
    .then(
      users=>{
        setUsers(users.data)}
    )
    .catch(err=>
      console.log(err)
    )
  },[])

  useEffect(() => {
    axios.get('http://localhost:3000/resortsdata')
      .then(response => {
        setResorts(response.data);
      })
      .catch(error => {
        console.error('Error fetching resorts:', error);
      });
  }, []);

  const handleUpdateClick = (id) => {
    navigate(`/UpdateUser/${id}`);
  };

  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }


  const handleDelete = (id)=>{
    axios.delete('http://localhost:3000/deleteresort/'+id)
    .then((res)=>{
    window.location.reload()
    console.log(res)
  })
    .catch((err)=>{console.log(err)})
  }

  const handleLogout = () => {
    document.cookie = 'userName=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/';
    document.cookie = 'acessToken=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/';
    navigate('/');
    document.cookie? console.log(document.cookie):console.log("No cookies found")
  };

  const username=getCookie('userName')
  const [selectedValue , setSelectedvalue] = useState(username)
  const handleSelectChange=(e)=>{
    setSelectedvalue(e.target.value)
  }

  return (
    <div className="resorts-list-page">
      <h1 id='resorttitle'>Resorts List Page</h1>
      <div>
      <select  value={selectedValue} onChange={handleSelectChange}>
          {users.map((user,i)=>(
            <option key={i} value={user.userName}>{user.userName}</option>
          ))}
        </select>
      </div>
      <div>
        <Link to="/CreateUser" className="add-btn">Add+</Link> 
        <button className="add-btn" onClick={handleLogout}>Logout</button>
      </div>
      <div className="resorts-list">
        {resorts.filter(item=>item.createdby==selectedValue).map((resort, index) => (
          <div key={index} className="resort-item">
            <h3>{resort.resortName}</h3>
            <p><strong>Opening Time:</strong> {resort.openingTime}</p>
            <p><strong>Closing Time:</strong> {resort.closingTime}</p>
            <p><strong>Address:</strong> {resort.resortAddress}</p>
            <p><strong>Contact Number:</strong> {resort.resortContactNumber}</p>
            <button className="add-btn" onClick={(e)=>handleUpdateClick(resort._id)}>Update</button>
            <button className='btn btn-danger'
                onClick={()=>handleDelete(resort._id)}> Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResortsListspage;