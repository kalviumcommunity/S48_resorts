import { useEffect, useState } from "react";
import axios from 'axios';
import './userdata.css';
import { Link } from "react-router-dom";

export default function UserList() {
  const [resorts, setResorts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/resort");
        console.log("Response data:", response.data);
        if (Array.isArray(response.resort)) {
          setResorts(response.resort);
        } else {
          setError("Response data is not an array.");
        }
      } catch (error) {
        console.error("Error:", error);
        setError("Error fetching resorts.");
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="w-100 vh-100 d-flex justify-content-center align-items-center text-align-center">
      <div className="w-50">
        <Link to="/create" className='btn btn-success'> Add +</Link>
        <table className="table">
          <thead>
            <tr>
              <th>Resort Name</th>
              <th>Location</th>
              <th>Name</th> 
              <th>Description</th>
              <th>Nearby Attractions</th>
              <th>Amenities</th>
              <th>Actions</th>
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
                <td>
                  <Link to={`/update/${resort._id}`}>
                    <button>Update</button>
                  </Link>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
