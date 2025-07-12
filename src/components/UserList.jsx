import React, {useEffect, useState} from "react";
function UserList() {
    const [users, setUsers] = useState([])
    useEffect(() => {
       
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setUsers(data)) 
            .catch(error => console.log("Error fetching the data:",error));
    },[]);
    return (
       <>
       <h1>User list</h1>
       <ul style={{color:"#fff"}}>
        {users.map((user) => (
            <li key={user.id}>
                <h2>{user.name}</h2>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Website: {user.website}</p>
            </li>
        ))}
       </ul>
       </> 
    )

}
export default UserList