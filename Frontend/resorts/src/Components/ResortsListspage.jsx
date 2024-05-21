import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ResortsListspage.css';

function ResortsListspage() {
  const [resorts, setResorts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/resortsdata')
      .then(response => {
        setResorts(response.data);
      })
      .catch(error => {
        console.error('Error fetching resorts:', error);
      });
  }, []);

  return (
    <div className="resorts-list-page">
      <h1 id='resorttitle'>Resorts List Page</h1>
      <div className="resorts-list">
        {resorts.map((resort, index) => (
          <div key={index} className="resort-item">
            <h3>{resort.resortName}</h3>
            <p><strong>Opening Time:</strong> {resort.openingTime}</p>
            <p><strong>Closing Time:</strong> {resort.closingTime}</p>
            <p><strong>Address:</strong> {resort.resortAddress}</p>
            <p><strong>Contact Number:</strong> {resort.resortContactNumber}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResortsListspage;
