import React, { useState, useEffect } from 'react';
function Topics () {

    const [topics, setTopics] = useState(null)

    //function to get topics
    useEffect(() => {
        // Define the API endpoint
        const apiEndpoint1 = 'http://localhost:5000/users';
    
        // Fetch data from the API
        const fetchTopics = async () => {
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
            setTopics(textData1); // Set the fetched text data in the state
          } catch (error) {
            console.error('Fetch error:', error);
          }
        };
    
        fetchTopics(); // Call the fetchData function
      }, []);

    return (
        <>
            <h3>Topics</h3>
            <p>Topics have link relations that include: </p>
            <table>
                    <tr>
                        <th>Relationship</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <code>self</code>
                        <td>API location of this topic</td>
                    </tr>
                    <tr>
                        <code>html</code>
                        <td>HTML location of this topic</td>
                    </tr>
                    <tr>
                        <code>photos</code>
                        <td>API location of this topic's photos</td>
                    </tr>
                </table>
            <h4>GET topics</h4>
                <code>GET /topics</code><br></br>
                <strong>Parameters</strong>
                    <table>
                        <tr>
                            <th>Parameter</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <code>ids</code>
                            <td>Limit to only matching topic ids or slugs. (Optional and comma separated string.)</td>
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
                            <td>Order of topics.(Optional and default set to <code>position</code>. Valid values include <code>oldest, popular, featured, latest.</code>)</td>
                    </tr>
                    </table>
                    <p><strong>Response</strong></p>
                    <code>200 OK<br></br>Link: <br></br>X-Ratelimit-Limit: 1000<br></br>X-Ratelimit-Remaining: 999</code>
                    <pre>{topics}</pre>
            <h4>GET a single topic</h4>
                <code>GET /topics/:id_or_slug</code><br></br>
                <strong>Parameters</strong>
                    <table>
                        <tr>
                            <th>Parameter</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <code>username</code>
                            <td>username</td>
                        </tr>
                    </table>
                    <p><strong>Response</strong></p>
                    <code>200 OK<br></br>X-Ratelimit-Limit: 1000<br></br>X-Ratelimit-Remaining: 999</code>
            <h4>GET a topic's photos</h4>
                <code>GET /topics/:id_or_slug/photos</code><br></br>
                <strong>Parameters</strong>
                    <table>
                        <tr>
                            <th>Parameter</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <code>username</code>
                            <td>username</td>
                        </tr>
                    </table>
                    <p><strong>Response</strong></p>
                    <code>200 OK<br></br>X-Ratelimit-Limit: 1000<br></br>X-Ratelimit-Remaining: 999</code>
        </>
    )
}

export default Topics;