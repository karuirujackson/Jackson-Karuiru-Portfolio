import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/users";

export default function Users () {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState('');

  // Fetch Users
  useEffect(() => {
    axios.get(API_URL).then((res) => setUsers(res.data));
  }, []);

  // Create User
  const createUser = () => {
    axios.post(API_URL, { name, email,address }).then((res) => {
      setUsers([...users, res.data]);
      setName("");
      setEmail("");
      setAddress("")
    });
  };

  // Delete User
  const deleteUser = (id) => {
    axios.delete(`${API_URL}/${id}`).then(() => {
      setUsers(users.filter((user) => user._id !== id));
    });
  };

  return (
    <div>
      <h2>User Management</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="text" placeholder="address" value={address} onChange={(e) => setAddress(e.target.value)} />
      <button onClick={createUser}>Add User</button>

      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} ({user.email})- {user.address}
            <button onClick={() => deleteUser(user._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

