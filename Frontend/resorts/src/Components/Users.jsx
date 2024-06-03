import React, { useState } from 'react'

function Users () {
    const [users, setUsers] = useState([{
        Name: "sai teja.b", Email: "saiteja99722@gmail.com", Age: 20
    }])
    return(
        <div className='d-flex vh-100 bg-primary justify-content-vreatr align-items-center'>
            <div className = 'w-50 bg-white rounded p-2'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                </table>
                <tbody>
                     {
                        users.map((users) => {
                <tr>
                    <td>{users.Name}</td>
                    <td>{users.Email}</td>
                    <td>{users.Age}</td>
                    <td><button>Edit</button><button>Delete</button></td>
                </tr>
                }
                )}
                    </tbody>
               </div>
             Users
        </div>
    )
}

export default Users;