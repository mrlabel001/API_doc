import React from 'react';
import './Authentication.css';

function Authentication() {
  return (
    <div className="authentication-container">
      <h2>Authentication</h2>
      <p className="authentication-description">
        The Rick and Morty API does not require authentication for accessing its resources. 
        It is an open REST(ish) and GraphQL API, which means that users can access data about characters, 
        images, locations, and episodes without the need for authentication credentials. 
        This open access to the API allows developers and enthusiasts to explore and utilize the data without any barriers to entry, 
        making it easier to integrate the API into various projects and applications.
      </p>
      <br />
    </div>
  );
}

export default Authentication;