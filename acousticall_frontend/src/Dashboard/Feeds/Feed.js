import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Feed() {
  const feeds = [
    {
      id: 1,
      content: "Join our upcoming accessible yoga class on October 30, 2023, at the Community Center.",
    },
    {
      id: 2,
      content: "Don't miss the wheelchair basketball tournament on November 15, 2023, at the Sports Complex.",
    },
    {
      id: 3,
      content: "Learn basic sign language skills at our workshop on December 5, 2023, at the Library Meeting Room.",
    },
    {
      id: 4,
      content: "We're organizing a guide dog training session next month. Stay tuned for more details!",
    },
    {
      id: 5,
      content: "Volunteers needed for our inclusive art exhibition. Contact us if you'd like to help!",
    }
  ];

  return (
    <div className="container mt-5">
      <h2>Community Feed</h2>
      <hr />
      {feeds.map(feed => (
        <div key={feed.id} className="card mb-3">
          <div className="card-body">
            <p className="card-text">{feed.content}</p>
            <button className="btn btn-primary">Comment</button>
          </div>
        </div>
      ))}
    </div>
  );
}
