import React from 'react';
import './ErrorCode.css'; // Import CSS file for component styling

function ErrorCode() {
  return (
    <div className="error-code-container">
      <h2>Error codes</h2>
      <p className="error-description">
        If an error occurs, whether on the client or the server side, the error messages will be returned in an errors array.
        For example: <br></br>
        <a className="error-sample">error sample</a>
      </p>
      <p className="http-codes-description">
        We use conventional HTTP response codes to indicate the success or failure of an API request:
      </p>
      <ul className="http-codes-list">
        <li className="http-code-item"><span className="http-code">2xx:</span> Success</li>
        <li className="http-code-item"><span className="http-code">4xx:</span> Client error (e.g., a required parameter was omitted)</li>
        <li className="http-code-item"><span className="http-code">5xx:</span> Server error (issues with UnSplash's servers)</li>
      </ul>
    </div>
  );
}

export default ErrorCode;