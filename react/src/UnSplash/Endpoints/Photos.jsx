import React, { useState, useEffect } from 'react';

function Photos() {
    const [photos, setPhotos] = useState(null);
    const [photo, setPhoto] = useState(null);
    const [randomPhoto, setRandomPhoto] = useState(null);
    const [stats, setStats] = useState(null);
    const [download, setDownload] = useState(null);
    const [photoUpdate, setPhotoUpdate] = useState(null);
    const [like, setLike] = useState(null);
    const [unlike, setUnlike] = useState(null);

    useEffect(() => {
        const fetchPhotos = async () => {
            const apiEndpoint = 'https://api.unsplash.com/photos/';
            const clientId = 'alzL4jjLBXo5GMEiFtJuCjJoflqNBY0GcrYE_o7Ehhg';
            try {
                const response = await fetch(`${apiEndpoint}?client_id=${clientId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPhotos(data);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchPhotos();
    }, []);

    useEffect(() => {
        const fetchPhoto = async () => {
            const apiEndpoint = 'http://localhost:5000/photo';
            const token = 'YOUR_TOKEN_HERE'; // Replace with your actual token
            try {
                const response = await fetch(apiEndpoint, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPhoto(data);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchPhoto();
    }, []);

    useEffect(() => {
        const fetchRandomPhoto = async () => {
            const apiEndpoint = 'http://localhost:5000/random_photo';
            const token = 'YOUR_TOKEN_HERE'; // Replace with your actual token
            try {
                const response = await fetch(apiEndpoint, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setRandomPhoto(data);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchRandomPhoto();
    }, []);

    useEffect(() => {
        const fetchPhotoStats = async () => {
            const apiEndpoint = 'http://localhost:5000/stats';
            const token = 'YOUR_TOKEN_HERE'; // Replace with your actual token
            try {
                const response = await fetch(apiEndpoint, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setStats(data);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchPhotoStats();
    }, []);

    useEffect(() => {
        const fetchDownloads = async () => {
            const apiEndpoint = 'http://localhost:5000/download';
            const token = 'YOUR_TOKEN_HERE'; // Replace with your actual token
            try {
                const response = await fetch(apiEndpoint, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setDownload(data);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchDownloads();
    }, []);

    useEffect(() => {
        const updatePhoto = async () => {
            const apiEndpoint = 'http://localhost:5000/photo_update';
            const token = 'YOUR_TOKEN_HERE'; // Replace with your actual token
            try {
                const response = await fetch(apiEndpoint, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPhotoUpdate(data);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        updatePhoto();
    }, []);

    useEffect(() => {
        const likePhoto = async () => {
            const apiEndpoint = 'http://localhost:5000/like';
            const token = 'YOUR_TOKEN_HERE'; // Replace with your actual token
            try {
                const response = await fetch(apiEndpoint, {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setLike(data);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        likePhoto();
    }, []);

    useEffect(() => {
        const unlikePhoto = async () => {
            const apiEndpoint = 'http://localhost:5000/unlike';
            const token = 'YOUR_TOKEN_HERE'; // Replace with your actual token
            try {
                const response = await fetch(apiEndpoint, {
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setUnlike(data);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        unlikePhoto();
    }, []);

    return (
        <>
            <h3>Photos</h3>
            <p>Photos have link relations that include: </p>
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
                        <td>API location of this photo.</td>
                    </tr>
                    <tr>
                        <td><code>html</code></td>
                        <td>HTML location of this photo.</td>
                    </tr>
                    <tr>
                        <td><code>download</code></td>
                        <td>Download location of this photo.</td>
                    </tr>
                </tbody>
            </table>

            {/* GET photos */}
            <h4>GET photos</h4>
            <code>GET /photos</code><br />
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
                        <td><code>page</code></td>
                        <td>Page number I'd like to retrieve. (Optional and default set to page 1)</td>
                    </tr>
                    <tr>
                        <td><code>per_page</code></td>
                        <td>Number of items per page. (Optional and default set to 10)</td>
                    </tr>
                    <tr>
                        <td><code>order_by</code></td>
                        <td>Order of photos. (Optional and default set to <code>latest</code>. Valid values include <code>oldest, popular</code>)</td>
                    </tr>
                </tbody>
            </table>
            <p><strong>Response</strong></p>
            <pre>{JSON.stringify(photos, null, 2)}</pre>

            {/* GET a single photo */}
            <h4>GET a single photo</h4>
            <code>GET /photos/:id</code><br />
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
                        <td><code>id</code></td>
                        <td>The photo's ID. Required.</td>
                    </tr>
                </tbody>
            </table>
            <p><strong>Response</strong></p>
            <pre>{JSON.stringify(photo, null, 2)}</pre>

            {/* GET a random photo */}
            <h4>GET a random photo</h4>
            <code>GET /photos/random</code><br />
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
                        <td><code>collections</code></td>
                        <td>Public collection ID(s) to filter selection. If multiple, comma-separated.</td>
                    </tr>
                    <tr>
                        <td><code>topics</code></td>
                        <td>Public topic ID(s) to filter selection. If multiple, comma-separated.</td>
                    </tr>
                    <tr>
                        <td><code>featured</code></td>
                        <td>Limit selection to featured photos.</td>
                    </tr>
                </tbody>
            </table>
            <p><strong>Response</strong></p>
            <pre>{JSON.stringify(randomPhoto, null, 2)}</pre>

            {/* GET photo statistics */}
            <h4>GET photo statistics</h4>
            <code>GET /photos/:id/statistics</code><br />
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
                        <td><code>id</code></td>
                        <td>The photo's ID. Required.</td>
                    </tr>
                </tbody>
            </table>
            <p><strong>Response</strong></p>
            <pre>{JSON.stringify(stats, null, 2)}</pre>

            {/* GET a photo's download link */}
            <h4>GET a photo's download link</h4>
            <code>GET /photos/:id/download</code><br />
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
                        <td><code>id</code></td>
                        <td>The photo's ID. Required.</td>
                    </tr>
                </tbody>
            </table>
            <p><strong>Response</strong></p>
            <pre>{JSON.stringify(download, null, 2)}</pre>

            {/* Update a photo */}
            <h4>Update a photo</h4>
            <code>PUT /photos/:id</code><br />
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
                        <td><code>id</code></td>
                        <td>The photo's ID. Required.</td>
                    </tr>
                    <tr>
                        <td><code>description</code></td>
                        <td>The photo's new description.</td>
                    </tr>
                </tbody>
            </table>
            <p><strong>Response</strong></p>
            <pre>{JSON.stringify(photoUpdate, null, 2)}</pre>

            {/* Like a photo */}
            <h4>Like a photo</h4>
            <code>POST /photos/:id/like</code><br />
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
                        <td><code>id</code></td>
                        <td>The photo's ID. Required.</td>
                    </tr>
                </tbody>
            </table>
            <p><strong>Response</strong></p>
            <pre>{JSON.stringify(like, null, 2)}</pre>

            {/* Unlike a photo */}
            <h4>Unlike a photo</h4>
            <code>DELETE /photos/:id/like</code><br />
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
                        <td><code>id</code></td>
                        <td>The photo's ID. Required.</td>
                    </tr>
                </tbody>
            </table>
            <p><strong>Response</strong></p>
            <pre>{JSON.stringify(unlike, null, 2)}</pre>
        </>
    );
}

export default Photos;
