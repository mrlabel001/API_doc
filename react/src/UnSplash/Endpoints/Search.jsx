import './Endpoint.css';
function Search() {
    
    return (
        <>
            <h3>Search</h3>
            <h4>Search for photos</h4>
            <code>GET /search/photos</code>
            <table>
                <thead>
                    <tr>
                        <th>Parameter</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>query</code></td>
                        <td>Search terms</td>
                    </tr>
                    <tr>
                        <td><code>page</code></td>
                        <td>Page number to retrieve. (Optional, default is 1)</td>
                    </tr>
                    <tr>
                        <td><code>per_page</code></td>
                        <td>Number of items per page. (Optional, default is 10)</td>
                    </tr>
                    <tr>
                        <td><code>order_by</code></td>
                        <td>Order of photos. (Optional, default is <code>relevant</code>. Valid values include <code>latest</code>)</td>
                    </tr>
                    <tr>
                        <td><code>collections</code></td>
                        <td>Collection IDs to narrow search. Optional. If multiple, comma-separated.</td>
                    </tr>
                    <tr>
                        <td><code>content_filter</code></td>
                        <td>Limit result by content filter. (Optional, default is false. Other option is true.)</td>
                    </tr>
                    <tr>
                        <td><code>color</code></td>
                        <td>Filter result by color. (Optional) Valid values include: <code>black_and_white, black, white, yellow, orange, red, purple, magenta, green, teal, blue</code></td>
                    </tr>
                    <tr>
                        <td><code>orientation</code></td>
                        <td>Filter by photo orientation. (Optional) Valid values include: <code>landscape, portrait, squarish</code></td>
                    </tr>
                </tbody>
            </table>
            <p><strong>Response</strong></p>
            <code>200 OK</code>
        

            <h4>Search for collections</h4>
            <code>GET /search/collections</code>
            <table>
                <thead>
                    <tr>
                        <th>Parameter</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>query</code></td>
                        <td>Search terms</td>
                    </tr>
                    <tr>
                        <td><code>page</code></td>
                        <td>Page number to retrieve. (Optional, default is 1)</td>
                    </tr>
                    <tr>
                        <td><code>per_page</code></td>
                        <td>Number of items per page. (Optional, default is 10)</td>
                    </tr>
                </tbody>
            </table>
            <p><strong>Response</strong></p>
            <code>200 OK</code>
            <h4>Search for users</h4>
            <code>GET /search/users</code>
            <table>
                <thead>
                    <tr>
                        <th>Parameter</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>query</code></td>
                        <td>Search terms</td>
                    </tr>
                    <tr>
                        <td><code>page</code></td>
                        <td>Page number to retrieve. (Optional, default is 1)</td>
                    </tr>
                    <tr>
                        <td><code>per_page</code></td>
                        <td>Number of items per page. (Optional, default is 10)</td>
                    </tr>
                </tbody>
            </table>
            <p><strong>Response</strong></p>
            <code>200 OK</code>
    
        </>
    );
}

export default Search;
