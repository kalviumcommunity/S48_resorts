import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function CreateUser() {
    const [resort, setresort] = useState();
    const [Location, setLocation] = useState();
    const navigate = useNavigate()
    
    const Submit = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:3000/createUser", {resort, Location})
        .then(result => {
            console.log(result)
            navigate('/Users')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="d-flex vh-100 bg-black justify-content-center align-items-center">
            <div className='w-100 bg-white rounded p-3'>
                <form onSubmit={Submit}>
                    <h2>Add resort name</h2>
                    <div className="mb-2">
                        <label htmlFor="">Name </label>
                        <input type="text" placeholder="Enter Name" className="form-control"
                            onChange={(e) => setresort(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Location </label>
                        <input type="text" placeholder="Enter Location" className="form-control"
                            onChange={(e) => setLocation(e.target.value)} />
                    </div>
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateUser;
