import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import './ResortsListspage.css';
import {  useNavigate } from 'react-router-dom';


function ResortsListspage() {
  const [resorts, setResorts] = useState([]);
  const navigate = useNavigate();

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

  const handleDelete = (id)=>{
    axios.delete('http://localhost:3000/deleteresort/'+id)
    .then((res)=>{
    window.location.reload()
    console.log(res)
  })
    .catch((err)=>{console.log(err)})
  }

  return (
    <div className="resorts-list-page">
      <h1 id='resorttitle'>Resorts List Page</h1>
      <div>
        <Link to="/CreateUser" className="add-btn">Add+</Link> 
      </div>
      <div className="resorts-list">
        {resorts.map((resort, index) => (
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