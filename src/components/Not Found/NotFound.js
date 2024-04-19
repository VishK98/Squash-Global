// NotFound.js
import React from 'react';
import './NotFound.css'; // Import your CSS file for animations

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-message">
        <h1>404 Not Found</h1>
        <p>Oops! The page you are looking for does not exist.</p>
      </div>
      <button className="go-back-button" onClick={() => window.history.back()}>
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
