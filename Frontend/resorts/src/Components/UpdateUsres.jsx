import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateUser() {
    const { id } = useParams(); 
    const [resortName, setResortName] = useState("");
    const [openingTime, setOpeningTime] = useState("");
    const [closingTime, setClosingTime] = useState("");
    const [resortAddress, setResortAddress] = useState("");
    const [resortContactNumber, setResortContactNumber] = useState(""); 
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3000/resortsdata/${id}`)
            .then(response => {
                setResortName(response.data.resortName);
                setOpeningTime(response.data.openingTime);
                setClosingTime(response.data.closingTime);
                setResortAddress(response.data.resortAddress);
                setResortContactNumber(response.data.resortContactNumber);
                setLoading(false);
            })
            .catch(error => console.log(error));
    }, [id]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:3000/updateresort/${id}`, {
                resortName,
                openingTime,
                closingTime,
                resortAddress,
                resortContactNumber
            });
            console.log(response);
            navigate('/resortslist');
        } catch (error) {
            console.log(error);
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div className="create-user-container">
            <div className="create-user-form">
                <form onSubmit={handleUpdate}>
                    <h2>Update Resort</h2>
                    <div className="mb-2">
                        <label htmlFor="resortName">Resort Name</label>
                        <input 
                            type="text" 
                            placeholder="Enter Resort Name" 
                            className="form-control"
                            id="resortName"
                            value={resortName}
                            onChange={(e) => setResortName(e.target.value)} 
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="openingTime">Opening Time</label>
                        <input 
                            type="text" 
                            placeholder="Enter Opening Time" 
                            className="form-control"
                            id="openingTime"
                            value={openingTime}
                            onChange={(e) => setOpeningTime(e.target.value)} 
                        />
                    </div>
                    <div className="mb-2">  
                        <label htmlFor="closingTime">Closing Time</label>
                        <input 
                            type="text" 
                            placeholder="Enter Closing Time" 
                            className="form-control"
                            id="closingTime"
                            value={closingTime}
                            onChange={(e) => setClosingTime(e.target.value)} 
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="resortAddress">Resort Address</label>
                        <input 
                            type="text" 
                            placeholder="Enter Resort Address" 
                            className="form-control"
                            id="resortAddress"
                            value={resortAddress}
                            onChange={(e) => setResortAddress(e.target.value)} 
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="resortContactNumber">Contact Number</label>
                        <input 
                            type="text" 
                            placeholder="Enter Contact Number" 
                            className="form-control"
                            id="resortContactNumber"
                            value={resortContactNumber}
                            onChange={(e) => setResortContactNumber(e.target.value)} 
                        />
                    </div>
                    <button type="submit" className="btn btn-success">Update</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateUser;