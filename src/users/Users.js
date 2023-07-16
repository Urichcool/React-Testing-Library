import React, { useState } from "react";
import axios

function Users() {
  const [users, setUsers] = useState([]);

    const loadUsers = async () => {
       const resp  = await axios.get
   } 
    
    
  return (
    <div>
      {users.map((user) => (
        <div key={user.id} data-testId="user-item">
          {user.name}
        </div>
      ))}
    </div>
  );
}

export default Users;
