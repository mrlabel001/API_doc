import React, { useState, useEffect } from 'react';

function CurrentUser() {
  const [userProfile, setUserProfile] = useState(null);
  const [updatedProfile, setUpdatedProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const apiEndpoint = 'http://localhost:5000/user_profile';
      try {
        setIsLoading(true);
        const response = await fetch(apiEndpoint, {
          method: 'GET',
          headers: {
            Authorization: `Bearer your_access_token_here`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const userData = await response.json(); // Parse JSON response
        setUserProfile(userData);
      } catch (error) {
        setErrorMessage('Failed to fetch user profile');
        console.error('Fetch error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const updateData = async () => {
      const apiEndpoint = 'http://localhost:5000/update_profile';
      try {
        setIsLoading(true);
        const response = await fetch(apiEndpoint, {
          method: 'PUT',
          headers: {
            Authorization: `Bearer your_access_token_here`,
            'Content-Type': 'application/json',
          },
          // Add body with updated profile data if needed
          body: JSON.stringify({
            username: 'new_username',
            // Add other fields as needed
          }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const updatedData = await response.json(); // Parse JSON response
        setUpdatedProfile(updatedData);
      } catch (error) {
        setErrorMessage('Failed to update user profile');
        console.error('Fetch error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    updateData();
  }, []);

  return (
    <>
      <h2>Endpoints</h2>
      <p>I will display how to retrieve data or responses from various endpoints and the expected results.</p>
      <h3>Current user</h3>
      <h4>GET the user's profile</h4>
      <code>GET /me</code>
      <p>
        <strong>Note: </strong>I'll need to authorize the <code>read_user</code> scope in order to access a user's private data. Without Bearer
        token(Client-ID token) this request will return a <code>401 Unauthorized</code> response.
      </p>
      <p>
        <strong>Parameters</strong>
        <br />
        None
      </p>
      <p>
        <strong>Response</strong>
      </p>
      <code>200 OK</code>
      <br />
      <pre>{isLoading ? 'Loading...' : userProfile}</pre>
      {errorMessage && <p>Error: {errorMessage}</p>}
      <h4>UPDATE the user's profile</h4>
      <code>PUT /me</code>
      <p>
        <strong>Note: </strong>I'll need to authorize the <code>write_user</code> scope in order to update, otherwise this request will return a{' '}
        <code>403 Forbidden</code> response.
      </p>
      <strong>Parameters</strong>
      <p>All parameters are optional</p>
      <table>
        <tbody>
          <tr>
            <th>Parameter</th>
            <th>Description</th>
          </tr>
          <tr>
            <td><code>username</code></td>
            <td>Username</td>
          </tr>
          <tr>
            <td><code>first_name</code></td>
            <td>First name</td>
          </tr>
          {/* Add more rows for other parameters */}
        </tbody>
      </table>
      <p>
        <strong>Response</strong>
      </p>
      <code>200 OK</code>
      <br />
      <pre>{isLoading ? 'Loading...' : updatedProfile}</pre>
      {errorMessage && <p>Error: {errorMessage}</p>}
      <br />
    </>
  );
}

export default CurrentUser;
