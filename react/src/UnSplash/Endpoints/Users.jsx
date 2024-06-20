import React, { useState, useEffect } from 'react';
function Users () {

    const [profile, setProfile] = useState(null);
    const [portfolio, setPortfolio] = useState(null)
    const [photos, setPhotos] = useState(null)
    const [likes, setLikes] = useState(null)
    const [collections, setCollections] = useState(null)
    const [stats, setStats] = useState(null)

        //function to get user's public profile
    useEffect(() => {
        // Define the API endpoint
        const apiEndpoint1 = 'http://localhost:5000/users';
    
        // Fetch data from the API
        const fetchProfile = async () => {
          try {
            const response = await fetch(apiEndpoint1, {
              method: 'GET', // Specify the method
              headers: {
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxODczNDcwNCwianRpIjoiNjkxMzA1NGEtOWYyMS00ZGYxLWJiOWYtOWVhYzc3MjAwMDhkIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MSwibmJmIjoxNzE4NzM0NzA0LCJjc3JmIjoiMzIxZjY1ZWUtODczZC00ODNjLTkwNzgtYjZiMzA2YzM4MzFjIiwiZXhwIjoxNzE4NzQxOTA0LCJhZG1pbiI6dHJ1ZX0.YOFOtrsBEtYOWXqVn2j9AGcyqsNh5XKgyAidWhmi-cw`,
                'Content-Type': 'application/json', // Adjust Content-Type if necessary
              },
            });
    
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const textData1 = await response.text();
            setProfile(textData1); // Set the fetched text data in the state
          } catch (error) {
            console.error('Fetch error:', error);
          }
        };
    
        fetchProfile(); // Call the fetchData function
      }, []);

        //function to get user portfolio link
    useEffect(() => {
        const apiEndpoint2 = 'http://localhost:5000/pending_users';
        const fetchPortfolio = async () => {
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
            const textData2 = await response.text();
            setPortfolio(textData2); 
          } catch (error) {
            console.error('Fetch error:', error);
          }
        };
    
        fetchPortfolio(); 
      }, []);

      //function to get user's photos
    useEffect(() => {
        const apiEndpoint3 = 'http://localhost:5000/users';
        const fetchPhotos = async () => {
          try {
            const response = await fetch(apiEndpoint3, {
              method: 'GET', 
              headers: {
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxODczNDcwNCwianRpIjoiNjkxMzA1NGEtOWYyMS00ZGYxLWJiOWYtOWVhYzc3MjAwMDhkIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MSwibmJmIjoxNzE4NzM0NzA0LCJjc3JmIjoiMzIxZjY1ZWUtODczZC00ODNjLTkwNzgtYjZiMzA2YzM4MzFjIiwiZXhwIjoxNzE4NzQxOTA0LCJhZG1pbiI6dHJ1ZX0.YOFOtrsBEtYOWXqVn2j9AGcyqsNh5XKgyAidWhmi-cw`,
                'Content-Type': 'application/json', 
              },
            });
    
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const textData3 = await response.text();
            setPhotos(textData3); 
          } catch (error) {
            console.error('Fetch error:', error);
          }
        };
    
        fetchPhotos(); 
      }, []);

      //function to get user's liked photos
    useEffect(() => {
        const apiEndpoint4 = 'http://localhost:5000/users';
        const fetchLikes = async () => {
          try {
            const response = await fetch(apiEndpoint4, {
              method: 'GET', 
              headers: {
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxODczNDcwNCwianRpIjoiNjkxMzA1NGEtOWYyMS00ZGYxLWJiOWYtOWVhYzc3MjAwMDhkIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MSwibmJmIjoxNzE4NzM0NzA0LCJjc3JmIjoiMzIxZjY1ZWUtODczZC00ODNjLTkwNzgtYjZiMzA2YzM4MzFjIiwiZXhwIjoxNzE4NzQxOTA0LCJhZG1pbiI6dHJ1ZX0.YOFOtrsBEtYOWXqVn2j9AGcyqsNh5XKgyAidWhmi-cw`,
                'Content-Type': 'application/json', 
              },
            });
    
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const textData4 = await response.text();
            setLikes(textData4); 
          } catch (error) {
            console.error('Fetch error:', error);
          }
        };
    
        fetchLikes(); 
      }, []);

      //function to get user's collections
    useEffect(() => {
        const apiEndpoint5 = 'http://localhost:5000/users';
        const fetchCollections = async () => {
          try {
            const response = await fetch(apiEndpoint5, {
              method: 'GET', 
              headers: {
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxODczNDcwNCwianRpIjoiNjkxMzA1NGEtOWYyMS00ZGYxLWJiOWYtOWVhYzc3MjAwMDhkIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MSwibmJmIjoxNzE4NzM0NzA0LCJjc3JmIjoiMzIxZjY1ZWUtODczZC00ODNjLTkwNzgtYjZiMzA2YzM4MzFjIiwiZXhwIjoxNzE4NzQxOTA0LCJhZG1pbiI6dHJ1ZX0.YOFOtrsBEtYOWXqVn2j9AGcyqsNh5XKgyAidWhmi-cw`,
                'Content-Type': 'application/json', 
              },
            });
    
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const textData5 = await response.text();
            setCollections(textData5); 
          } catch (error) {
            console.error('Fetch error:', error);
          }
        };
    
        fetchCollections(); 
      }, []);

      //function to get user's stats
    useEffect(() => {
        const apiEndpoint6 = 'http://localhost:5000/users';
        const fetchStats = async () => {
          try {
            const response = await fetch(apiEndpoint6, {
              method: 'GET', 
              headers: {
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxODczNDcwNCwianRpIjoiNjkxMzA1NGEtOWYyMS00ZGYxLWJiOWYtOWVhYzc3MjAwMDhkIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MSwibmJmIjoxNzE4NzM0NzA0LCJjc3JmIjoiMzIxZjY1ZWUtODczZC00ODNjLTkwNzgtYjZiMzA2YzM4MzFjIiwiZXhwIjoxNzE4NzQxOTA0LCJhZG1pbiI6dHJ1ZX0.YOFOtrsBEtYOWXqVn2j9AGcyqsNh5XKgyAidWhmi-cw`,
                'Content-Type': 'application/json', 
              },
            });
    
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const textData6 = await response.text();
            setStats(textData6); 
          } catch (error) {
            console.error('Fetch error:', error);
          }
        };
    
        fetchStats(); 
      }, []);

    return (
        <>
            <h3>Users</h3>
            <p>Users have link relations that include: </p>
                <table>
                    <tr>
                        <th>Relationship</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <code>self</code>
                        <td>API location of this user.</td>
                    </tr>
                    <tr>
                        <code>html</code>
                        <td>HTML location of this user.</td>
                    </tr>
                    <tr>
                        <code>photos</code>
                        <td>API location of this user's photos.</td>
                    </tr>
                    <tr>
                        <code>portfolio</code>
                        <td>API location of this user's portfolio</td>
                    </tr>
                    <tr>
                        <code>followers</code>
                        <td>API location of this user's followers.</td>
                    </tr>
                    <tr>
                        <code>following</code>
                        <td>API location of the users this user is following.</td>
                    </tr>
                </table>
            <h4>GET user's public profile</h4>
                <code>GET /users/:username</code><br></br>
                <strong>Parameters</strong>
                <table>
                    <tr>
                        <th>Parameter</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <code>username</code>
                        <td>The user's username. Required</td>
                    </tr>
               </table>
               <p><strong>Response</strong></p>
               <p>This response will only display data that is publicly available information. To get private details, i'll need to use the <code>GET /me</code> as demonstrated above.</p>
               <code>200 OK<br></br>X-Ratelimit-Limit: 1000<br></br>X-Ratelimit-Remaining: 999</code>
               <pre>{profile}</pre>
            <h4>GET user's portfolio link</h4>
                <code>GET /users/:username/portfolio</code><br></br>
                <strong>Parameters</strong>
                <table>
                    <tr>
                        <th>Parameter</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <code>username</code>
                        <td>The user's username. Required</td>
                    </tr>
                </table>
                <p><strong>Response</strong></p>
                <p>This response will only display data that is publicly available information. To get private details, i'll need to use the <code>GET /me</code> as demonstrated above.</p>
                <code>200 OK<br></br>X-Ratelimit-Limit: 1000<br></br>X-Ratelimit-Remaining: 999</code>
                <pre>{portfolio}</pre>
            <h4>GET user's photos</h4>
                <code>GET /users/:username/photos</code><br></br>
                <strong>Parameters</strong>
                <table>
                    <tr>
                        <th>Parameter</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <code>username</code>
                        <td>The user's username. Required</td>
                    </tr>
                    <tr>
                        <code>page</code>
                        <td>Page number i'd like to retrieve. (Optional and default set to page 1)</td>
                    </tr>
                    <tr>
                        <code>per_page</code>
                        <td>Number of items per page.(Optional and default set to 10)</td>
                    </tr>
                    <tr>
                        <code>order_by</code>
                        <td>Order of photos.(Optional and default set to <code>latest</code>. Valid values include <code>oldest, popular, views, downloads.</code>)</td>
                    </tr>
                    <tr>
                        <code>stats</code>
                        <td>Show stats for each user's photos.(Optional and default is <code>false</code>)</td>
                    </tr>
                    <tr>
                        <code>resolution</code>
                        <td>Frequency of this stats.(Optional and default is "days")</td>
                    </tr>
                    <tr>
                        <code>quantity</code>
                        <td>The amount for each stat.(Optional and default is 30)</td>
                    </tr>
                    <tr>
                        <code>orientation</code>
                        <td>Filter photo by orientation.(Optional and valid values include <code>landscape, potrait, squarish.</code>)</td>
                    </tr>
                </table>
                <p><strong>Response</strong></p>
                <p>The photo object returned is abbreviated. To get full details, ill use the route <code>GET /photos/:id</code>.</p>
                <code>200 OK<br></br>X-Ratelimit-Limit: 1000<br></br>X-Ratelimit-Remaining: 999</code>
                <pre>{photos}</pre>
                <p>I'll set the <code>stats</code> to true to incclude each photo's stats.</p>
                <pre>{photos}</pre>
            <h4>GET user's liked photos</h4>
                <code>GET /users/:username/likes</code><br></br>
                <strong>Parameters</strong>
                <table>
                    <tr>
                        <th>Parameter</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <code>username</code>
                        <td>The user's username. Required</td>
                    </tr>
                    <tr>
                        <code>page</code>
                        <td>Page number i'd like to retrieve. (Optional and default set to page 1)</td>
                    </tr>
                    <tr>
                        <code>per_page</code>
                        <td>Number of items per page.(Optional and default set to 10)</td>
                    </tr>
                    <tr>
                        <code>order_by</code>
                        <td>Order of photos.(Optional and default set to <code>latest</code>. Valid values include <code>oldest, popular.</code>)</td>
                    </tr>
                    <tr>
                        <code>orientation</code>
                        <td>Filter photo by orientation.(Optional and valid values include <code>landscape, potrait, squarish.</code>)</td>
                    </tr>
                </table>
                <p><strong>Response</strong></p>
                <p>The photo object returned is abbreviated. To get full details, ill use the route <code>GET /photos/:id</code>.</p>
                <code>200 OK<br></br>Link: <br></br>X-Ratelimit-Limit: 1000<br></br>X-Ratelimit-Remaining: 999</code>
                <pre>{likes}</pre>
            <h4>GET user's collections</h4>
                <code>GET /users/:username/collections</code><br></br>
                <strong>Parameters</strong>
                <table>
                    <tr>
                        <th>Parameter</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <code>username</code>
                        <td>The user's username. Required.</td>
                    </tr>
                    <tr>
                        <code>page</code>
                        <td>Page number i'd like to retrieve. (Optional and default set to page 1)</td>
                    </tr>
                    <tr>
                        <code>per_page</code>
                        <td>Number of items per page.(Optional and default set to 10)</td>
                    </tr>
                </table>
                <p><strong>Response</strong></p>
                <code>200 OK<br></br>Link: <br></br>X-Ratelimit-Limit: 1000<br></br>X-Ratelimit-Remaining: 999</code>
                <pre>{collections}</pre>
            <h4>GET user's statistics</h4>
                <p>I'll retrieve the number of downloads, views and likes of all user's photos at a timeframe set to default which is 30 days.</p>
                <code>GET /users/:username/statistics</code><br></br>
                <strong>Parameters</strong>
                <table>
                    <tr>
                        <th>Parameter</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <code>username</code>
                        <td>The user's username. Required.</td>
                    </tr>
                    <tr>
                        <code>resolution</code>
                        <td>The frequency of the stats.(Optional and default is "days". Number cab be between 1 and 30.)</td>
                    </tr>
                    <tr>
                        <code>quantity</code>
                        <td>Amount for each stat. (Optional and default is 30)</td>
                    </tr>
                </table>
                <p><strong>Response</strong></p>
                <code>200 OK<br></br>X-Ratelimit-Limit: 1000<br></br>X-Ratelimit-Remaining: 999</code>
                <pre>{stats}</pre>
                <br></br>
        </>
    )
}

export default Users;