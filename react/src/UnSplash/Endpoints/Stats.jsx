import React, { useState, useEffect } from 'react';

function Stats() {
    const [total, setTotal] = useState(null);
    const [month, setMonth] = useState(null);

    // Fetch total stats
    useEffect(() => {
        const apiEndpoint1 = 'http://localhost:5000/stats/total';
        const fetchTotals = async () => {
            const token = 'YOUR_TOKEN_HERE'; // Replace with your actual token
            try {
                const response = await fetch(apiEndpoint1, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.text();
                setTotal(data);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchTotals();
    }, []);

    // Fetch monthly stats
    useEffect(() => {
        const apiEndpoint2 = 'http://localhost:5000/stats/month';
        const fetchMonth = async () => {
            const token = 'YOUR_TOKEN_HERE'; // Replace with your actual token
            try {
                const response = await fetch(apiEndpoint2, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.text();
                setMonth(data);
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
            <code>GET /stats/total</code><br />
            <strong>Parameters</strong>
            <p><strong>Response</strong></p>
            <code>200 OK<br />X-Ratelimit-Limit: 1000<br />X-Ratelimit-Remaining: 999</code>
            <pre>{total}</pre>

            <h4>Month</h4>
            <code>GET /stats/month</code><br />
            <strong>Parameters</strong>
            <p><strong>Response</strong></p>
            <code>200 OK<br />X-Ratelimit-Limit: 1000<br />X-Ratelimit-Remaining: 999</code>
            <pre>{month}</pre>
        </>
    );
}

export default Stats;
