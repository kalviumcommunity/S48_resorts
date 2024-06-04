import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './CreateUsres.css';

function CreateUser() {
    const [resortName, setResortName] = useState("");
    const [openingTime, setOpeningTime] = useState("");
    const [closingTime, setClosingTime] = useState("");
    const [resortAddress, setResortAddress] = useState("");
    const [resortContactNumber, setResortContactNumber] = useState(""); 
    const navigate = useNavigate();

    function getCookie(name) {
        let cookieArray = document.cookie.split('; ');
        let cookie = cookieArray.find((row) => row.startsWith(name + '='));
        return cookie ? cookie.split('=')[1] : null;
      }
    
      const createdby = getCookie('userName')

    const submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/addresort", { 
                resortName, 
                openingTime, 
                closingTime, 
                resortAddress, 
                resortContactNumber,
                createdby 
            })
            .then(result => {
                console.log(result);
                navigate('/resortslist');
            })
            .catch(err => console.log(err));
    };



    return (
        <div className="create-user-container">
            <div className="create-user-form">
                <form onSubmit={submit}>
                    <h2>Add Resort</h2>
                    <div className="mb-2">
                        <label htmlFor="resortName">Name</label>
                        <input 
                            type="text" 
                            placeholder="Enter Name" 
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
                        <label htmlFor="resortAddress">Address</label>
                        <input 
                            type="text" 
                            placeholder="Enter Address" 
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
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default CreateUser;