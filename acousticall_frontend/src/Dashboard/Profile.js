import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Profile() {
  const user = {
    name: "John Doe",
    profilePicture: "https://via.placeholder.com/150", // URL to the profile picture
    bio: "Passionate advocate for accessibility and inclusivity. Let's make the world a better place for everyone!",
    email: "john.doe@example.com",
    phone: "+1 (123) 456-7890",
    location: "New York, USA"
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <img src={user.profilePicture} alt="Profile" className="img-fluid rounded-circle mb-3" />
        </div>
        <div className="col-md-8">
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
          <ul className="list-unstyled">
            <li><strong>Email:</strong> {user.email}</li>
            <li><strong>Phone:</strong> {user.phone}</li>
            <li><strong>Location:</strong> {user.location}</li>
          </ul>
          {/* Add more profile details as needed */}
        </div>
      </div>
    </div>
  );
}
