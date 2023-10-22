import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Dashboard from "./Dashboard/Dashboard";
import Home from "./Home/Home";
import Profile from './Dashboard/Profile';
import Event from './Dashboard/Event/Event';
import Message from './Dashboard/Message/Message';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/event" element={<Event />} />
        <Route path="/message" element={<Message />} />



      </Routes>
    </Router>
  );
}

export default App;
