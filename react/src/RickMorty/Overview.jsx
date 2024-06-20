import React from 'react';
import './Overview.css'; 

function Overview() {
    return (
        <div className="overview-container">
            <h2 className="overview-heading">Overview</h2>
            <div className="section">
                <h3 className="section-heading">Description</h3>
                <p className="section-content">
                    The Rick and Morty API is a REST and GraphQL API based on the television show Rick and Morty. 
                    It provides access to data about hundreds of characters, images, locations, and episodes, and is filled with canonical information as seen on the TV show. 
                    The API also has a JavaScript client that gives access to its features and infrastructure maintenance. 
                    Additionally, there are examples of web apps and templates that utilize the Rick and Morty API.
                </p>
            </div>
            <div className="section">
                <h3 className="section-heading">Base URL</h3>
                <div className="base-url-section">
                    <strong>GraphQL</strong>
                    <p><code>https://rickandmortyapi.com/graphql</code></p>
                </div>
                <div className="base-url-section">
                    <strong>REST</strong>
                    <p><code>https://rickandmortyapi.com/api</code></p>
                </div>
            </div>
            <div className="section">
                <h3 className="section-heading">Version</h3>
            </div>
            <br />
        </div>
    );
}

export default Overview;