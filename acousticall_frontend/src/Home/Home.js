import React from 'react';
import { Link } from 'react-router-dom';
import bgvideo from './Media/bg_video.mp4'
import './Home.css'


export default function Home() {
  return (
<div className="homepage">
  <nav className="navbar navbar-expand-lg navbar-dark bg-black">
    <div className="container">
      <Link className="navbar-brand" to="/">
        {/* <img src={logo} alt="Logo" width="30" height="30" className="mr-2" /> */}
        <span className="brand-text">AcousticAll</span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/registration">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div className="fullscreen-video-container">
    <video autoPlay muted loop className="fullscreen-video">
      <source src={bgvideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="video-overlay">
      <h1>Welcome to AcousticAll</h1>
      <p>Connecting the Deaf Community: Your social hub for networking, resources, and events.</p>
    </div>
  </div>

  <div className="container mt-5">
    <div className="row">
      <div className="col-md-4">
        <div className="section">
          <h2>Community Networking</h2>
          <p>Connect with deaf individuals, share experiences, and foster meaningful relationships.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="section">
          <h2>Resource Sharing</h2>
          <p>Access a wealth of resources, from educational materials to assistive technologies.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="section">
          <h2>Event Organization</h2>
          <p>Plan and participate in community events, workshops, and social gatherings.</p>
        </div>
      </div>
    </div>
    <div className="row mt-5">
      <div className="col-md-6 offset-md-3">
        <div className="section">
          <h2>Inclusive Learning</h2>
          <p>Engage with interactive modules and courses tailored to the needs of the Deaf community.</p>
        </div>
      </div>
    </div>
  </div>

  <footer className="bg-black text-white text-center py-3">
    <div className="container">
      <h4>About AcousticAll</h4>
      <p>Empowering the Deaf Community - One Connection at a Time.</p>
    </div>
  </footer>
</div>


  );
}