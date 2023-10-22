import React, { useState } from 'react';
import CreateEvent from './CreateEvent';

export default function Event() {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
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
  );
}
