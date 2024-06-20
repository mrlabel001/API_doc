import React, { useState, useEffect } from 'react';

function Users() {
    const [profile, setProfile] = useState(null);
    const [portfolio, setPortfolio] = useState(null);
    const [photos, setPhotos] = useState(null);
    const [likes, setLikes] = useState(null);
    const [collections, setCollections] = useState(null);
    const [stats, setStats] = useState(null);

    useEffect(() => {
        const fetchData = async (endpoint, setter) => {
            try {
                const response = await fetch(endpoint, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxODczNDcwNCwianRpIjoiNjkxMzA1NGEtOWYyMS00ZGYxLWJiOWYtOWVhYzc3MjAwMDhkIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MSwibmJmIjoxNzE4NzM0NzA0LCJjc3JmIjoiMzIxZjY1ZWUtODczZC00ODNjLTkwNzgtYjZiMzA2YzM4MzFjIiwiZXhwIjoxNzE4NzQxOTA0LCJhZG1pbiI6dHJ1ZX0.YOFOtrsBEtYOWXqVn2j9AGcyqsNh5XKgyAidWhmi-cw`,
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const textData = await response.text();
                setter(textData);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchData('http://localhost:5000/profile', setProfile);
        fetchData('http://localhost:5000/portfolio', setPortfolio);
        fetchData('http://localhost:5000/photos', setPhotos);
        fetchData('http://localhost:5000/likes', setLikes);
        fetchData('http://localhost:5000/collections', setCollections);
        fetchData('http://localhost:5000/stats', setStats);
    }, []);

    return (
        <>
            <h3>Users</h3>
            <p>Users have link relations that include: </p>
            <table>
                <tbody>
                    <tr>
                        <th>Relationship</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td><code>self</code></td>
                        <td>API location of this user.</td>
                    </tr>
                    <tr>
                        <td><code>html</code></td>
                        <td>HTML location of this user.</td>
                    </tr>
                    <tr>
                        <td><code>photos</code></td>
                        <td>API location of this user's photos.</td>
                    </tr>
                    <tr>
                        <td><code>portfolio</code></td>
                        <td>API location of this user's portfolio</td>
                    </tr>
                    <tr>
                        <td><code>followers</code></td>
                        <td>API location of this user's followers.</td>
                    </tr>
                    <tr>
                        <td><code>following</code></td>
                        <td>API location of the users this user is following.</td>
                    </tr>
                </tbody>
            </table>

            <h4>GET user's public profile</h4>
            <code>GET /users/:username</code><br />
            <strong>Parameters</strong>
            <table>
                <tbody>
                    <tr>
                        <th>Parameter</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td><code>username</code></td>
                        <td>The user's username. Required</td>
                    </tr>
                </tbody>
            </table>
            <p><strong>Response</strong></p>
            <p>This response will only display data that is publicly available information. To get private details, use <code>GET /me</code> as demonstrated above.</p>
            <code>200 OK<br />X-Ratelimit-Limit: 1000<br />X-Ratelimit-Remaining: 999</code>
            <pre>{profile}</pre>

            <h4>GET user's portfolio link</h4>
            <code>GET /users/:username/portfolio</code><br />
            <strong>Parameters</strong>
            <table>
                <tbody>
                    <tr>
                        <th>Parameter</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td><code>username</code></td>
                        <td>The user's username. Required</td>
                    </tr>
                </tbody>
            </table>
            <p><strong>Response</strong></p>
            <p>This response will only display data that is publicly available information. To get private details, use <code>GET /me</code> as demonstrated above.</p>
            <code>200 OK<br />X-Ratelimit-Limit: 1000<br />X-Ratelimit-Remaining: 999</code>
            <pre>{portfolio}</pre>

            <h4>GET user's photos</h4>
            <code>GET /users/:username/photos</code><br />
            <strong>Parameters</strong>
            <table>
                <tbody>
                    <tr>
                        <th>Parameter</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td><code>username</code></td>
                        <td>The user's username. Required</td>
                    </tr>
                    <tr>
                        <td><code>page</code></td>
                        <td>Page number you'd like to retrieve. (Optional, default is page 1)</td>
                    </tr>
                    <tr>
                        <td><code>per_page</code></td>
                        <td>Number of items per page. (Optional, default is 10)</td>
                    </tr>
                    <tr>
                        <td><code>order_by</code></td>
                        <td>Order of photos. (Optional, default is <code>latest</code>. Valid values include <code>oldest, popular, views, downloads</code>)</td>
                    </tr>
                    <tr>
                        <td><code>stats</code></td>
                        <td>Show stats for each user's photo. (Optional, default is <code>false</code>)</td>
                    </tr>
                    <tr>
                        <td><code>resolution</code></td>
                        <td>Frequency of stats. (Optional, default is "days")</td>
                    </tr>
                    <tr>
                        <td><code>quantity</code></td>
                        <td>The amount for each stat. (Optional, default is 30)</td>
                    </tr>
                    <tr>
                        <td><code>orientation</code></td>
                        <td>Filter photo by orientation. (Optional, valid values include <code>landscape, portrait, squarish</code>)</td>
                    </tr>
                </tbody>
            </table>
            <p><strong>Response</strong></p>
            <p>The photo object returned is abbreviated. To get full details, use <code>GET /photos/:id</code>.</p>
            <code>200 OK<br />X-Ratelimit-Limit: 1000<br />X-Ratelimit-Remaining: 999</code>
            <pre>{photos}</pre>

            <h4>GET user's liked photos</h4>
            <code>GET /users/:username/likes</code><br />
            <strong>Parameters</strong>
            <table>
                <tbody>
                    <tr>
                        <th>Parameter</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td><code>username</code></td>
                        <td>The user's username. Required</td>
                    </tr>
                    <tr>
                        <td><code>page</code></td>
                        <td>Page number you'd like to retrieve. (Optional, default is page 1)</td>
                    </tr>
                    <tr>
                        <td><code>per_page</code></td>
                        <td>Number of items per page. (Optional, default is 10)</td>
                    </tr>
                    <tr>
                        <td><code>order_by</code></td>
                        <td>Order of photos. (Optional, default is <code>latest</code>. Valid values include <code>oldest, popular</code>)</td>
                    </tr>
                    <tr>
                        <td><code>orientation</code></td>
                        <td>Filter photo by orientation. (Optional, valid values include <code>landscape, portrait, squarish</code>)</td>
                    </tr>
                </tbody>
            </table>
            <p><strong>Response</strong></p>
            <p>The photo object returned is abbreviated. To get full details, use <code>GET /photos/:id</code>.</p>
            <code>200 OK<br />X-Ratelimit-Limit: 1000<br />X-Ratelimit-Remaining: 999</code>
            <pre>{likes}</pre>

            <h4>GET user's collections</h4>
            <code>GET /users/:username/collections</code><br />
            <strong>Parameters</strong>
            <table>
                <tbody>
                    <tr>
                        <th>Parameter</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td><code>username</code></td>
                        <td>The user's username. Required</td>
                    </tr>
                    <tr>
                        <td><code>page</code></td>
                        <td>Page number you'd like to retrieve. (Optional, default is page 1)</td>
                    </tr>
                    <tr>
                        <td><code>per_page</code></td>
                        <td>Number of items per page. (Optional, default is 10)</td>
                    </tr>
                    <tr>
                        <td><code>order_by</code></td>
                        <td>Order of collections. (Optional, default is <code>published</code>. Valid values include <code>updated, total_photos</code>)</td>
                    </tr>
                </tbody>
            </table>
            <p><strong>Response</strong></p>
            <p>The collections object returned is abbreviated. To get full details, use <code>GET /collections/:id</code>.</p>
            <code>200 OK<br />X-Ratelimit-Limit: 1000<br />X-Ratelimit-Remaining: 999</code>
            <pre>{collections}</pre>

            <h4>GET user's statistics</h4>
            <code>GET /users/:username/stats</code><br />
            <strong>Parameters</strong>
            <table>
                <tbody>
                    <tr>
                        <th>Parameter</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td><code>username</code></td>
                        <td>The user's username. Required</td>
                    </tr>
                </tbody>
            </table>
            <p><strong>Response</strong></p>
            <p>The statistics object returned is abbreviated. To get full details, use <code>GET /users/:username</code>.</p>
            <code>200 OK<br />X-Ratelimit-Limit: 1000<br />X-Ratelimit-Remaining: 999</code>
            <pre>{stats}</pre>
        </>
    );
}

export default Users;
