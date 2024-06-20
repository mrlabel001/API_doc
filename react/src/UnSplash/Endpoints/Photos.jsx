import './Endpoint.css';
function Photos() {
 
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
    
        </>
    );
}

export default Photos;
