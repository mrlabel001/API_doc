import React from 'react';
import './ErrorCode.css'; 

function ErrorCode() {
  return (
    <div className="error-code-container">
      <h2>Error codes</h2>
      <p className="error-description">
        If an error occurs, whether on the client or the server side, the error messages will be returned in an errors array.
        For example: <br></br>
      </p>
      <p className="http-codes-description">
        We use conventional HTTP response codes to indicate the success or failure of an API request:
      </p>
      <table>
                  <tr>
                    <th>common codes</th>
                    <th>Description</th>
                  </tr>
                  <tr>
                    <td><code>200- OK</code></td>
                    <td>Everything worked as expected.</td>
                  </tr>
                  <tr>
                    <td><code>400 - Bad Request</code></td>
                    <td>The request was unacceptable, often due to missing a required parameter.</td>
                  </tr>
                  <tr>
                    <td><code>401 - Unauthorized</code></td>
                    <td>The request was unacceptable, often due to missing a required parameter.</td>
                  </tr>
                  <tr>
                    <td><code>403 - Forbidden</code></td>
                    <td>Missing permissions to perform request.</td>
                  </tr>
                  <tr>
                    <td><code>404 - Not Found</code></td>
                    <td>The requested resource doesn’t exist.</td>
                  </tr>
                  <tr>
                    <td><code>500,503</code></td>
                    <td>Something went wrong on server end.</td>
                  </tr>
                </table>
    </div>
  );
}

export default ErrorCode;