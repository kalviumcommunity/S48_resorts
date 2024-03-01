import { useEffect, useState } from "react";
import axios from 'axios';
import './userdata.css';

export default function UserList() {
  const [resorts, setResorts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/resort"); // Corrected API endpoint
        console.log("Response data:", response.data);
        setResorts(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-100 vh-100 d-flex justify-content-center align-items-center text-align-center">
      <div className="w-50">
        <table className="table">
          <thead>
            <tr>
              <th>Resort Name</th>
              <th>Location</th>
              <th>Name</th>
              <th>Description</th>
              <th>Nearby Attractions</th>
              <th>Amenities</th>
            </tr>
          </thead>
          <tbody>
            {resorts.map(resort => (
              <tr key={resort._id}>
                <td>{resort.resort_name}</td>
                <td>{resort.location}</td>
                <td>{resort.Name}</td>
                <td>{resort.Description}</td>
                <td>{resort.nearByAttractions}</td>
                <td>{resort.Amenities}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
