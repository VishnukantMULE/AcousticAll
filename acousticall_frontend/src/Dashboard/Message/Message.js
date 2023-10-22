// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Message = ({ onSelectUser }) => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // Fetch the list of users from your MongoDB Realm backend
//     axios.get('YOUR_BACKEND_ENDPOINT/users')
//       .then((response) => {
//         setUsers(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching users:', error);
//       });
//   }, []); // Empty dependency array ensures this effect runs once after initial render

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4">Users</h2>
//       <ul className="list-group">
//         {users.map((user) => (
//           <li
//             key={user._id}
//             onClick={() => onSelectUser(user)}
//             className="list-group-item list-group-item-action"
//           >
//             {user.username}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Message;

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Message.css'; // Create a Message.css file for custom styles

export default function Message() {
  const [selectedUser, setSelectedUser] = useState('User 1');

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-3">
          <div className="list-group">
            {['Jhon Walker', 'Michel J', 'Himaly'].map((user) => (
              <button
                key={user}
                type="button"
                className={`list-group-item list-group-item-action ${selectedUser === user ? 'active' : ''}`}
                onClick={() => handleUserClick(user)}
              >
                {user}
              </button>
            ))}
          </div>
        </div>
        <div className="col-9">
          <div className="card">
            <div className="card-body">
              <div className="message-container">
                <div className={`message-bubble sent-message`}>Hello, how are you?</div>
                <div className={`message-bubble received-message`}>I'm good, thanks! How about you?</div>
                {/* More messages go here */}
              </div>
            </div>
            <div className="card-footer">
              <input
                type="text"
                className="form-control"
                placeholder="Type your message..."
              />
              <button className="btn btn-primary mt-2">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
