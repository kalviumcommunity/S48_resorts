import React, { useState } from "react";
import resorts from "./resorts.json";
import './resortdata.css'
// import resort from "./resortdata.css"

const ResortCard = ({ resort }) => {
  return (
    <div className="resort-card">
      <h2>{resort.resortName}</h2>
      <p>Opening Time: {resort.openingTime}</p>
      <p>Closing Time: {resort.closingTime}</p>
      <p>Address: {resort.resortAddress}</p>
      <p>Contact Number: {resort.resortcontactNumber}</p>
    </div>
  );
};

const ResortsList = () => {
  const [showJson, setShowJson] = useState(false);

  const toggleJsonDisplay = () => {
    setShowJson(!showJson);
  };

  return (
    <div className="resorts-list">
      <button onClick={toggleJsonDisplay}>Toggle JSON Data</button>
      {showJson && (
        <pre>{JSON.stringify(resorts, null, 2)}</pre>
      )}
      {resorts.map((resort) => (
        <ResortCard key={resort._id.$oid} resort={resort} />
      ))}
    </div>
  );
};

export default ResortsList;
