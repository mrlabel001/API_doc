import React, { useState, useEffect } from 'react';
function Search () {

    const [photos, setPhotos] = useState(null)
    const [collection, setCollection] = useState(null)
    const [users, setUsers] = useState(null)

    //function to search photos
    useEffect(() => {
        // Define the API endpoint
        const apiEndpoint1 = 'http://localhost:5000/users';
    
        // Fetch data from the API
        const fetchPhotos = async () => {
          try {
            const response = await fetch(apiEndpoint1, {
              method: 'GET', // Specify the method
              headers: {
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxODc0Mjk5MywianRpIjoiNzU5MDRhY2MtMmU1OC00OTE1LTljM2UtOGVjZWI2MGFlNDg5IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MSwibmJmIjoxNzE4NzQyOTkzLCJjc3JmIjoiOWZiYzI0Y2EtOWY3Zi00YTk3LWI5MjItZDYxOWFmMjY5Nzc5IiwiZXhwIjoxNzE4NzUwMTkzLCJhZG1pbiI6dHJ1ZX0.vexUOCsFkZ6WwXTL9EjlD1PWpwo8Ki0yZRUbqPi2Z24`,
                'Content-Type': 'application/json', // Adjust Content-Type if necessary
              },
            });
    
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const textData1 = await response.text();
            setPhotos(textData1); // Set the fetched text data in the state
          } catch (error) {
            console.error('Fetch error:', error);
          }
        };
    
        fetchPhotos(); // Call the fetchData function
      }, []);

      //function to search for collections
    useEffect(() => {
        const apiEndpoint2 = 'http://localhost:5000/pending_users';
        const searchCollection = async () => {
          try {
            const response = await fetch(apiEndpoint2, {
              method: 'GET', 
              headers: {
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxODc0Mjk5MywianRpIjoiNzU5MDRhY2MtMmU1OC00OTE1LTljM2UtOGVjZWI2MGFlNDg5IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MSwibmJmIjoxNzE4NzQyOTkzLCJjc3JmIjoiOWZiYzI0Y2EtOWY3Zi00YTk3LWI5MjItZDYxOWFmMjY5Nzc5IiwiZXhwIjoxNzE4NzUwMTkzLCJhZG1pbiI6dHJ1ZX0.vexUOCsFkZ6WwXTL9EjlD1PWpwo8Ki0yZRUbqPi2Z24`,
                'Content-Type': 'application/json', 
              },
            });
    
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const textData2 = await response.text();
            setCollection(textData2); 
          } catch (error) {
            console.error('Fetch error:', error);
          }
        };
    
        searchCollection(); 
      }, []);

      //function to search for users
    useEffect(() => {
        const apiEndpoint3 = 'http://localhost:5000/pending_users';
        const searchUsers = async () => {
          try {
            const response = await fetch(apiEndpoint3, {
              method: 'GET', 
              headers: {
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxODc0Mjk5MywianRpIjoiNzU5MDRhY2MtMmU1OC00OTE1LTljM2UtOGVjZWI2MGFlNDg5IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MSwibmJmIjoxNzE4NzQyOTkzLCJjc3JmIjoiOWZiYzI0Y2EtOWY3Zi00YTk3LWI5MjItZDYxOWFmMjY5Nzc5IiwiZXhwIjoxNzE4NzUwMTkzLCJhZG1pbiI6dHJ1ZX0.vexUOCsFkZ6WwXTL9EjlD1PWpwo8Ki0yZRUbqPi2Z24`,
                'Content-Type': 'application/json', 
              },
            });
    
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const textData3 = await response.text();
            setUsers(textData3); 
          } catch (error) {
            console.error('Fetch error:', error);
          }
        };
    
        searchUsers(); 
      }, []);

    return (
        <>
            <h3>Search</h3>
            <h4>Search for photos</h4>
                <code>GET /search/photos</code><br></br>
                <strong>Parameters</strong>
                    <table>
                        <tr>
                            <th>Parameter</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <code>query</code>
                            <td>Search terms</td>
                        </tr>
                        <tr>
                            <code>page</code>
                            <td>Page number to retrieve.(Optional and default is 1)</td>
                        </tr>
                        <tr>
                            <code>per_page</code>
                            <td>Number of items per page.(Optional and default set to 10)</td>
                        </tr>
                        <tr>
                            <code>order_by</code>
                            <td>Order of photos.(Optional and default set to <code>relevant</code>. Valid values include <code>latest.</code>)</td>
                        </tr>
                        <tr>
                            <code>collections</code>
                            <td>Collection ID's to narrow search. Optional. If multiple, comma-separated.</td>
                        </tr>
                        <tr>
                            <code>content_filter</code>
                            <td>Limit result by content_filter. (Optional and default id false.) Other option id=s true.</td>
                        </tr>
                        <tr>
                            <code>color</code>
                            <td>Filter result by color. (Optional). Valid values include: <code>black_and_white, black, white, yellow, ornage, red, purple, magenta, green, teal, blue.</code></td>
                        </tr>
                        <tr>
                            <code>orientation</code>
                            <td>Filter by photo orientation. (Optional)<code>landscape, potrait, squarish.</code></td>
                        </tr>
                    </table>
                    <p><strong>Response</strong></p>
                    <code>200 OK<br></br>Link: <br></br>X-Ratelimit-Limit: 1000<br></br>X-Ratelimit-Remaining: 999</code>
                    <pre>{photos}</pre>
            <h4>Search for collections</h4>
                <code>GET /search/collections</code><br></br>
                <strong>Parameters</strong>
                    <table>
                        <tr>
                            <th>Parameter</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <code>query</code>
                            <td>Search terms</td>
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
                    <pre>{collection}</pre>
            <h4>Search for users</h4>
                <code>GET /search/users</code><br></br>
                <strong>Parameters</strong>
                    <table>
                        <tr>
                            <th>Parameter</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <code>query</code>
                            <td>Search terms</td>
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
                    <pre>{users}</pre>
                    <br></br>
        </>
    )
}

export default Search;