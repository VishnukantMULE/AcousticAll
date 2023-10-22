import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Chat = ({ selectedUser }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Fetch chat messages for the selected user from your MongoDB Realm backend
    if (selectedUser) {
      axios.get(`YOUR_BACKEND_ENDPOINT/messages/${selectedUser._id}`)
        .then((response) => {
          setMessages(response.data);
        })
        .catch((error) => {
          console.error('Error fetching messages:', error);
        });
    }
  }, [selectedUser]); // This effect will run whenever selectedUser changes

  const handleSendMessage = () => {
    // Send a new message to the selected user in the backend
    axios.post(`YOUR_BACKEND_ENDPOINT/messages/${selectedUser._id}`, {
      content: newMessage,
      senderId: 'CURRENT_USER_ID', // You need to set the sender's user ID here
    })
      .then((response) => {
        // Handle successful message sending if needed
        console.log('Message sent successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error sending message:', error);
      });
  };

  return (
    <div className="chat">
      <h2>Chat with {selectedUser && selectedUser.username}</h2>
      <div className="message-list">
        {messages.map((message) => (
          <div key={message._id} className="message">
            <strong>{message.sender.username}:</strong> {message.content}
          </div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
