import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function CreateUser() {
    const [resortName, setResortName] = useState("");
    const [openingTime, setOpeningTime] = useState("");
    const [closingTime, setClosingTime] = useState("");
    const [resortAddress, setResortAddress] = useState("");
    const [resortContactNumber, setResortContactNumber] = useState(""); // Corrected variable name
    const navigate = useNavigate();
    
    const submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/api/resortsdata", { 
                resortName, 
                openingTime, 
                closingTime, 
                resortAddress, 
                resortContactNumber 
            })
            .then(result => {
                console.log(result);
                navigate('/resortslist');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="d-flex vh-100 bg-black justify-content-center align-items-center">
            <div className="w-100 bg-white rounded p-3">
                <form onSubmit={submit}>
                    <h2>Add Resort</h2>
                    <div className="mb-2">
                        <label htmlFor="resortName">Name</label>
                        <input 
                            type="text" 
                            placeholder="Enter Name" 
                            className="form-control"
                            onChange={(e) => setResortName(e.target.value)} 
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="openingTime">Opening Time</label>
                        <input 
                            type="text" 
                            placeholder="Enter Opening Time" 
                            className="form-control"
                            onChange={(e) => setOpeningTime(e.target.value)} 
                        />
                    </div>
                    <div className="mb-2">  
                        <label htmlFor="closingTime">Closing Time</label>
                        <input 
                            type="text" 
                            placeholder="Enter Closing Time" 
                            className="form-control"
                            onChange={(e) => setClosingTime(e.target.value)} 
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="resortAddress">Address</label>
                        <input 
                            type="text" 
                            placeholder="Enter Address" 
                            className="form-control"
                            onChange={(e) => setResortAddress(e.target.value)} 
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="resortContactNumber">Contact Number</label>
                        <input 
                            type="text" 
                            placeholder="Enter Contact Number" 
                            className="form-control"
                            onChange={(e) => setResortContactNumber(e.target.value)} 
                        />
                    </div>
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default CreateUser;
