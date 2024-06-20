import React, { useState, useEffect } from 'react';

function Topics() {
    const [topics, setTopics] = useState(null);
    const [topic, setTopic] = useState(null);

    // Fetch topics
    useEffect(() => {
        const apiEndpoint1 = 'http://localhost:5000/topics';

        const fetchTopics = async () => {
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
                setTopics(data);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchTopics();
    }, []);

    // Fetch a single topic
    useEffect(() => {
        const apiEndpoint2 = 'http://localhost:5000/topic';

        const fetchSingleTopic = async () => {
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
                setTopic(data);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchSingleTopic();
    }, []);

    return (
        <>
            <h3>Topics</h3>
            <p>Topics have link relations that include:</p>
            <table>
                <thead>
                    <tr>
                        <th>Relationship</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>self</code></td>
                        <td>API location of this topic</td>
                    </tr>
                    <tr>
                        <td><code>html</code></td>
                        <td>HTML location of this topic</td>
                    </tr>
                    <tr>
                        <td><code>photos</code></td>
                        <td>API location of this topic's photos</td>
                    </tr>
                </tbody>
            </table>

            <h4>GET topics</h4>
            <code>GET /topics</code><br />
            <strong>Parameters</strong>
            <table>
                <thead>
                    <tr>
                        <th>Parameter</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>ids</code></td>
                        <td>Limit to only matching topic ids or slugs. (Optional and comma separated string.)</td>
                    </tr>
                    <tr>
                        <td><code>page</code></td>
                        <td>Page number i'd like to retrieve. (Optional and default set to page 1)</td>
                    </tr>
                    <tr>
                        <td><code>per_page</code></td>
                        <td>Number of items per page. (Optional and default set to 10)</td>
                    </tr>
                    <tr>
                        <td><code>order_by</code></td>
                        <td>Order of topics. (Optional and default set to <code>position</code>. Valid values include <code>oldest, popular, featured, latest.</code>)</td>
                    </tr>
                </tbody>
            </table>
            <p><strong>Response</strong></p>
            <code>200 OK<br />Link: <br />X-Ratelimit-Limit: 1000<br />X-Ratelimit-Remaining: 999</code>
            <pre>{topics}</pre>

            <h4>GET a single topic</h4>
            <code>GET /topics/:id_or_slug</code><br />
            <strong>Parameters</strong>
            <table>
                <thead>
                    <tr>
                        <th>Parameter</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>id_or_slug</code></td>
                        <td>The topic's ID or slug</td>
                    </tr>
                </tbody>
            </table>
            <p><strong>Response</strong></p>
            <code>200 OK<br />X-Ratelimit-Limit: 1000<br />X-Ratelimit-Remaining: 999</code>
            <pre>{topic}</pre>

            <h4>GET a topic's photos</h4>
            <code>GET /topics/:id_or_slug/photos</code><br />
            <strong>Parameters</strong>
            <table>
                <thead>
                    <tr>
                        <th>Parameter</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>id_or_slug</code></td>
                        <td>The topic's ID or slug. Required.</td>
                    </tr>
                    <tr>
                        <td><code>page</code></td>
                        <td>Page number i'd like to retrieve. (Optional and default set to page 1)</td>
                    </tr>
                    <tr>
                        <td><code>per_page</code></td>
                        <td>Number of items per page. (Optional and default set to 10)</td>
                    </tr>
                    <tr>
                        <td><code>orientation</code></td>
                        <td>Filter by photo orientation. (Optional)<code>landscape, portrait, squarish.</code></td>
                    </tr>
                    <tr>
                        <td><code>order_by</code></td>
                        <td>Order of photos. (Optional and default set to <code>latest</code>. Valid values include <code>oldest, popular.</code>)</td>
                    </tr>
                </tbody>
            </table>
            <p><strong>Response</strong></p>
            <code>200 OK<br />Link: <br />X-Ratelimit-Limit: 1000<br />X-Ratelimit-Remaining: 999</code>
        </>
    );
}

export default Topics;
