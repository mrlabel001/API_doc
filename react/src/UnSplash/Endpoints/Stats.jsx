import React, { useState, useEffect } from 'react';
function Stats () {

    const [total, setTotal] = useState(null)
    const [month, setMonth] = useState(null)

    //function to get total stats
    useEffect(() => {
        // Define the API endpoint
        const apiEndpoint1 = 'http://localhost:5000/users';
    
        // Fetch data from the API
        const fetchTotals = async () => {
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
            setTotal(textData1); // Set the fetched text data in the state
          } catch (error) {
            console.error('Fetch error:', error);
          }
        };
    
        fetchTotals(); // Call the fetchData function
      }, []);

      //function to get monthly stat
    useEffect(() => {
        const apiEndpoint2 = 'http://localhost:5000/pending_users';
        const fetchMonth = async () => {
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
            setMonth(textData2); 
          } catch (error) {
            console.error('Fetch error:', error);
          }
        };
    
        fetchMonth(); 
      }, []);

    return (
        <>
            <h3>Stats</h3>
            <h4>Totals</h4>
                <code>GET /stats/total</code><br></br>
                <strong>Parameters</strong>
                <p><strong>Response</strong></p>
                <code>200 OK<br></br>X-Ratelimit-Limit: 1000<br></br>X-Ratelimit-Remaining: 999</code>
                <pre>{total}</pre>
            <h4>Month</h4>
                <code>GET /stats/month</code><br></br>
                <strong>Parameters</strong>
                <p><strong>Response</strong></p>
                <code>200 OK<br></br>X-Ratelimit-Limit: 1000<br></br>X-Ratelimit-Remaining: 999</code>
                <pre>{month}</pre>
        </>
    )
}

export default Stats;