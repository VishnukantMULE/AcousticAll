import React from 'react';

export default function Nav({ setSelectedOption, selectedOption }) {

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <span className={`navbar-brand ${selectedOption === 'company' ? 'active' : ''}`} onClick={() => handleOptionClick('company')}>Company Name</span>
                <ul className="navbar-nav">
                    <li className={`nav-item ${selectedOption === 'message' ? 'active' : ''}`} onClick={() => handleOptionClick('message')}>
                        <span className="nav-link" >Messages</span>
                    </li>
                    <li className={`nav-item ${selectedOption === 'events' ? 'active' : ''}`} onClick={() => handleOptionClick('events')}>
                        <span className="nav-link">Events</span>
                    </li>
                    <li className={`nav-item ${selectedOption === 'community' ? 'active' : ''}`} onClick={() => handleOptionClick('community')}>
                        <span className="nav-link" >Community</span>
                    </li>
                    <li className={`nav-item ${selectedOption === 'profile' ? 'active' : ''}`} onClick={() => handleOptionClick('profile')}>
                        <span className="nav-link" >Profile</span>
                    </li>
                </ul>
                <form className="d-flex">
    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
    <button className="btn btn-outline-light" type="submit">Search</button>
</form>

            </div>
        </nav>
    );
}
