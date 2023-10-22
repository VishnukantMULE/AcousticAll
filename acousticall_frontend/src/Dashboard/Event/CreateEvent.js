import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function CreateEvent() {
    const [eventDetails, setEventDetails] = useState({
        title: '',
        description: '',
        location: '',
        date: '',
        time: '',
        members: '',
        eventType: '', // Added eventType, eventLink, and organizerName
        eventLink: '',
        organizerName: '',
        thumbnail: null,
      });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventDetails({
      ...eventDetails,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    setEventDetails({
      ...eventDetails,
      thumbnail: file,
    });
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    axios.post('http://localhost:5000/createevent', eventDetails)
      .then((response) => {
        console.log('Event created successfully:', response.data);
        navigate('/dashboard');
      })
      .catch((error) => {
        console.error('Error creating event:', error);
      });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Create Amazing Event</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Event Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={eventDetails.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Event Description</label>
          <textarea
            className="form-control"
            name="description"
            value={eventDetails.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Event Location</label>
          <input
            type="text"
            className="form-control"
            name="location"
            value={eventDetails.location}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Event Type</label>
          <select
            className="form-select"
            name="eventType"
            value={eventDetails.eventType}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Event Type</option>
            <option value="offline">Offline</option>
            <option value="online">Online</option>
          </select>
        </div>
        {eventDetails.eventType === 'online' && (
          <div className="mb-3">
            <label className="form-label">Event Link</label>
            <input
              type="url"
              className="form-control"
              name="eventLink"
              value={eventDetails.eventLink}
              onChange={handleInputChange}
              required
            />
          </div>
        )}
        <div className="mb-3">
          <label className="form-label">Event Organizer Name</label>
          <input
            type="text"
            className="form-control"
            name="organizerName"
            value={eventDetails.organizerName}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Event Date</label>
          <input
            type="date"
            className="form-control"
            name="date"
            value={eventDetails.date}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Event Time</label>
          <input
            type="time"
            className="form-control"
            name="time"
            value={eventDetails.time}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Number of Members</label>
          <input
            type="number"
            className="form-control"
            name="members"
            value={eventDetails.members}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Event Thumbnail (Optional)</label>
          <input type="file" className="form-control" accept="image/*" onChange={handleThumbnailChange} />
        </div>
        <button type="submit" className="btn btn-outline-primary btn-lg">
          Create Event
        </button>
      </form>
    </div>
  );
}
