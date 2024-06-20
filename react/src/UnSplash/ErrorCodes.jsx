import React from 'react';
import './ErrorCodes.css';

function ErrorCode() {
    return (
        <div className="error-code">
            <h2 className="error-code-title">Error Codes</h2>
            <p className="error-code-description">
                If an error occurs, whether on the client or the server side, the error messages will be returned in an errors array. For example: <br />
                <a href="#" className="error-code-link">error sample</a>
                We use conventional HTTP response codes to indicate the success or failure of an API request:
            </p>
            <ul className="error-code-list">
                <li className="error-code-item">
                    <h5>2xx: </h5>Success
                </li>
                <li className="error-code-item">
                    <h5>4xx: </h5>Client error (e.g., a required parameter was omitted)
                </li>
                <li className="error-code-item">
                    <h5>5xx: </h5>Server error (issues with Unsplash's servers)
                </li>
            </ul>
            <br />
        </div>
    );
}

export default ErrorCode;