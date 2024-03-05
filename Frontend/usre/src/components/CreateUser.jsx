import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import './CreateUser.css';

function CreateUser() {
    const [resortName, setresortName] = useState("");
    const [location, setLocation] = useState("");
    const [specialities, setSpecialities] = useState("");
    const [freshSeafood, setFreshSeafood] = useState("");
    const [varietyOfMeatPreparation, setVarietyOfMeatPreparation] = useState("");
    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/resort", {
            resort_name: resortName,
            location: location,
            specialities: specialities,
            fresh_seafood: freshSeafood,
            variety_of_meat_preparation: varietyOfMeatPreparation
        })
        .then(result => {
            console.log(result)
            navigate('/resort')
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
                            onChange={(e) => setresortName(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Location </label>
                        <input type="text" placeholder="Enter Location" className="form-control"
                            onChange={(e) => setLocation(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Specialities </label>
                        <input type="text" placeholder="Enter Specialities" className="form-control"
                            onChange={(e) => setSpecialities(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Fresh Seafood </label>
                        <input type="text" placeholder="Enter Fresh Seafood" className="form-control"
                            onChange={(e) => setFreshSeafood(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Variety of Meat Preparation </label>
                        <input type="text" placeholder="Enter Variety of Meat Preparation" className="form-control"
                            onChange={(e) => setVarietyOfMeatPreparation(e.target.value)} />
                    </div>
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateUser;
