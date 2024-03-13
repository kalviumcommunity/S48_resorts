import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
// import './UpdateUser.css';

function UpdateUser() {
    const { id } = useParams();
    const [resort,setResort]  =useState('')
    const [Location,setLocation] = useState('')
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3000/getUser/${id}`)
            .then(response => {
                console.log(response.data);
                setResort(response.data.resort)
                setLocation(response.data.Location)
                setLoading(false);
            })
            .catch(error => console.log(error));
    }, [id]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:3000/updateUser/${id}`, {resort,Location});
            console.log(response);
            navigate('/Users');
        } catch (error) {
            console.log(error);
        }
    };
    if (loading) return <div>Loading...</div>;

    return (
        <div className="d-flex vh-100 bg-black justify-content-center align-items-center">
            <div className='w-200 bg-white rounded p-3'>
                <form onSubmit={handleUpdate}>
                    <h2>Update Users</h2>
                    <div className="mb-2">
                        <label htmlFor="resort_name">Resort Name</label>
                        <input type="text" name="resort_name" placeholder="Enter Resort Name" className="form-control"
                            value={resort} onChange={(e)=>setResort(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="location">Location</label>
                        <input type="text" name="location" placeholder="Enter Location" className="form-control"
                            value={Location} onChange={(e)=>setLocation(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-success">Update</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateUser;
