import React from 'react';
import './ResortsListspage.css'; // Importing the CSS file for styling

function ResortsListspage() {
  const resortData = [
    {
      resortName: 'Paradise Cove Resort',
      openingTime: '10:00',
      closingTime: '18:00',
      resortAddress: '123 Oceanfront Avenue Tropical Island, Paradise 12345',
      resortContactNumber: '0987654321'
    },
    {
      resortName: 'Mountain Retreat',
      openingTime: '08:00',
      closingTime: '20:00',
      resortAddress: '456 Highland Road, Mountainville, MNT 67890',
      resortContactNumber: '1234567890'
    },
    {
      resortName: 'Desert Oasis',
      openingTime: '09:00',
      closingTime: '21:00',
      resortAddress: '789 Desert Path, Oasis City, DES 34567',
      resortContactNumber: '2345678901'
    },
    {
      resortName: 'Urban Getaway',
      openingTime: '07:00',
      closingTime: '23:00',
      resortAddress: '321 City Street, Metropolis, URB 45678',
      resortContactNumber: '3456789012'
    },
    {
      resortName: 'Island Paradise',
      openingTime: '10:00',
      closingTime: '18:00',
      resortAddress: '654 Tropical Lane, Island Town, ISL 98765',
      resortContactNumber: '4567890123'
    }
    // Add more resort data as needed
  ];

  return (
    <div className="resorts-list-page">
      <h1 id='resorttitle'>Resorts List Page</h1>
      <div className="resorts-list">
        {resortData.map((resort, index) => (
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
