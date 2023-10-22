
import Nav from './Nav'
import Message from './Message/Message';
import Event from './Event/Event';
import Profile from './Profile';
import Feed from './Feeds/Feed';
import React, { useState } from 'react';



export default function Dashboard() {
  const [selectedOption, setSelectedOption] = useState('create-course');

  const renderComponent = () => {
    switch (selectedOption) {
      case 'message':
        return <Message/>;
      case 'events':
        return <Event />;
      case 'feed':
        return <Feed/>;
      case 'profile':
        return <Profile />;
      default:
        return <Feed />;
    }
  };

  return (
    <div>
      <Nav setSelectedOption={setSelectedOption} selectedOption={selectedOption}/>
      <div className="content">{renderComponent()}</div>

    </div>
  )
}
