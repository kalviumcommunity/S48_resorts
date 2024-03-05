// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// function Users() {
//   const [users, setUsers] = useState([])
  
//   useEffect(() => {
//     axios.get('http://localhost:3001/resort')
//     .then(result => setUsers(result.data))
//     .catch(err => console.log(err))
//   },[])
  
//     return (
//     <div className="d-flex vh-100 bg-black justify-content-center align-items-center">
//       <div className='w-100 bg-white rounded p-3'>
//         <Link to="/create" className='btn btn-success' > Add +</Link>
//         <table className="table">
//           <thead>
//             <tr>
//               <th>resort_name</th>
//               <th>location</th>
//               <th>specialities</th>
//               <th>fresh_seafood</th>
//               <th>variety_of_meal_preparation</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map(data => {
//               return <tr key={resort._id}>
//                 <td>{resort.resort_name}</td>
//                 <td>{resort.location}</td>
//                 <td>{resort.specialities}</td>
//                 <td>{resort.fresh_seafood}</td>
//                 <td>{resort.variety_of_meal_preparation}</td>
//               </tr>
//             })
//             }
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Users;