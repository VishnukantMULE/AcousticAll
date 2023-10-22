import React, { useState } from 'react';
import CreateEvent from './CreateEvent';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Event() {
  const [activeComponent, setActiveComponent] = useState(null);

  const events = [
    {
      id: 1,
      title: 'Accessible Yoga Class',
      date: 'October 30, 2023',
      location: 'Community Center',
      description: 'Join us for a relaxing yoga class designed for people with disabilities. All levels are welcome!',
    },
    {
      id: 2,
      title: 'Wheelchair Basketball Tournament',
      date: 'November 15, 2023',
      location: 'Sports Complex',
      description: 'Cheer on your favorite teams as they compete in an exciting wheelchair basketball tournament!',
    },
    {
      id: 3,
      title: 'Sign Language Workshop',
      date: 'December 5, 2023',
      location: 'Library Meeting Room',
      description: 'Learn basic sign language skills and improve communication with the deaf and hard of hearing community.',
    },
  ];

  return (
    <div className="container mt-5">
           <div className="container mt-5">
      {activeComponent ? (
        activeComponent
      ) : (
        <div className="text-center">
          <button className="btn btn-primary btn-lg" onClick={() => setActiveComponent(<CreateEvent />)}>
            Create Event
          </button>
        </div>
      )}
    </div>
      {activeComponent ? (
        activeComponent
      ) : (
        <div className="row">
          {events.map(event => (
            <div key={event.id} className="col-lg-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{event.title}</h5>
                  <p className="card-text"><strong>Date:</strong> {event.date}</p>
                  <p className="card-text"><strong>Location:</strong> {event.location}</p>
                  <p className="card-text">{event.description}</p>
                  <button className="btn btn-primary" disabled>RSVP</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
