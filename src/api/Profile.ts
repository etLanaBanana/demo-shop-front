// import {useEffect, useState} from "react";
// import axios from "axios";
//
// const ProfilePage = () => {
//     const [userData, setUserData] = useState(null);
//
//     useEffect(() => {
//         axios.get('https://api.example.com/user')
//             .then(response => {
//                 setUserData(response.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching user data: ', error);
//             });
//     }, []);
//
//     return (
//         <div>
//             {userData ? (
//                     <div>
//                         <h2>{userData.name}</h2>
//                     <p>Email: {userData.email}</p>
//     {/* Другие данные пользователя */}
//     </div>
// ) : (
//         <p>Loading user data...</p>
// )}
//     </div>
// );
// };
//
// export default ProfilePage;