import React, { useState, useEffect } from 'react';
function CurrentUser () {

    const [userProfile, setUserProfile] = useState(null);
    const [updatedProfile, setUpdatedProfile] = useState(null);

        //function to get user profile
    useEffect(() => {
        // Define the API endpoint
        const apiEndpoint = 'http://localhost:5000/users';
    
        // Fetch data from the API
        const fetchData = async () => {
          try {
            const response = await fetch(apiEndpoint, {
              method: 'GET', // Specify the method
              headers: {
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxODczNDcwNCwianRpIjoiNjkxMzA1NGEtOWYyMS00ZGYxLWJiOWYtOWVhYzc3MjAwMDhkIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MSwibmJmIjoxNzE4NzM0NzA0LCJjc3JmIjoiMzIxZjY1ZWUtODczZC00ODNjLTkwNzgtYjZiMzA2YzM4MzFjIiwiZXhwIjoxNzE4NzQxOTA0LCJhZG1pbiI6dHJ1ZX0.YOFOtrsBEtYOWXqVn2j9AGcyqsNh5XKgyAidWhmi-cw`,
                'Content-Type': 'application/json', // Adjust Content-Type if necessary
              },
            });
    
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const textData = await response.text();
            setUserProfile(textData); // Set the fetched text data in the state
          } catch (error) {
            console.error('Fetch error:', error);
          }
        };
    
        fetchData(); // Call the fetchData function
      }, []);

      //function to update user profile
    useEffect(() => {
        const apiEndpoint2 = 'http://localhost:5000/pending_users';
        const updateData = async () => {
          try {
            const response = await fetch(apiEndpoint2, {
              method: 'GET', 
              headers: {
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxODczNDcwNCwianRpIjoiNjkxMzA1NGEtOWYyMS00ZGYxLWJiOWYtOWVhYzc3MjAwMDhkIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MSwibmJmIjoxNzE4NzM0NzA0LCJjc3JmIjoiMzIxZjY1ZWUtODczZC00ODNjLTkwNzgtYjZiMzA2YzM4MzFjIiwiZXhwIjoxNzE4NzQxOTA0LCJhZG1pbiI6dHJ1ZX0.YOFOtrsBEtYOWXqVn2j9AGcyqsNh5XKgyAidWhmi-cw`,
                'Content-Type': 'application/json', 
              },
            });
    
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const textData1 = await response.text();
            setUpdatedProfile(textData1); 
          } catch (error) {
            console.error('Fetch error:', error);
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
                    <p><strong>Note: </strong>I'll need to authorize the <code>read_user</code> scope in order to access a user's private data. Without Bearer token(Client-ID token) this request will return a <code>401 Unauthorized</code> response.</p>
                    <p><strong>Parameters</strong><br></br>None</p>
                    <p><strong>Response</strong></p>
                    <code>200 OK<br></br>X-Ratelimit-Limit: 1000<br></br>X-Ratelimit-Remaining: 999</code>
                    <pre>{userProfile}</pre>
                <h4>UPDATE the user's profile</h4>
                    <code>PUT /me</code>
                    <p><strong>Note: </strong>I'll need to authorize the <code>write_user</code> scope in order to update, otherwise this request will return a <code>403 Forbidden</code> response.</p>
                    <strong>Parameters</strong>
                    <p>All parameters are optional</p>
                    <table>
                        <tr>
                            <th>Parameter</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <code>username</code>
                            <td>Username</td>
                        </tr>
                        <tr>
                            <code>username</code>
                            <td>username</td>
                        </tr>
                        <tr>
                            <code>first_name</code>
                            <td>First name</td>
                        </tr>
                        <tr>
                            <code>last_name</code>
                            <td>Last name</td>
                        </tr>
                        <tr>
                            <code>email</code>
                            <td>Email</td>
                        </tr>
                        <tr>
                            <code>url</code>
                            <td>Portfolio/ personal URL</td>
                        </tr>
                        <tr>
                            <code>location</code>
                            <td>Location</td>
                        </tr>
                        <tr>
                            <code>bio</code>
                            <td>bio/ About</td>
                        </tr>
                        <tr>
                            <code>instagram_username</code>
                            <td>Instagram username</td>
                        </tr>
                    </table>
                    <p><strong>Response</strong></p>
                    <code>200 OK<br></br>X-Ratelimit-Limit: 1000<br></br>X-Ratelimit-Remaining: 999</code>
                    <pre>{updatedProfile}</pre>
                    <br></br>
        </>
    )
}

export default CurrentUser;