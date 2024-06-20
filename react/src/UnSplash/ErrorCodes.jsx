import React from 'react';
import './ErrorCodes.css';

function ErrorCode() {
    return (
        <div className="error-code">
            <h2 className="error-code-title">Error Codes</h2>
            <p className="error-code-description">
                If an error occurs, whether on the client or the server side, the error messages will be returned in an errors array. For example: <br />
                <code>422 Unprocessable Entity</code>. 
                We use conventional HTTP response codes to indicate the success or failure of an API request:
            </p>
            <ul className="error-code-list">
                <li className="error-code-item">
                    <strong>2xx: </strong>Success
                </li>
                <li className="error-code-item">
                    <strong>4xx: </strong>Client error (e.g., a required parameter was omitted)
                </li>
                <li className="error-code-item">
                    <strong>5xx: </strong>Server error (issues with Unsplash's servers)
                </li>
            </ul>
            <br />
        </div>
    );
}

export default ErrorCode;