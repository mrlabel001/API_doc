import React from 'react';
import './RateLimiting.css'; 

function RateLimiting() {
    return (
        <div className="rate-limiting-container">
            <h2 className="section-heading">Rate Limiting</h2>
            <div className="section-content">
                <p>
                    The Rick and Morty API has a rate limit of 10,000 requests per day to prevent malicious usage of the API, 
                    such as the use of bots. If the limit is exceeded, a status code of <code>429 Too Many Requests</code> 
                    will be received on all requests for a period of 12 hours. During this time, the user will not be able to make further requests until the allocated day ends.
                </p>
            </div>
            <h2 className="section-heading">Info and Pagination</h2>
            <div className="section-content">
                <p>
                The API will automatically paginate the responses. You will receive up to 20 documents per page.
                Each resource contains an info object with information about the response.
                </p>
                <table>
                    <tr>
                        <th>Key</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td>count</td>
                        <td>int</td>
                        <td>The length of the response</td>
                    </tr>
                    <tr>
                        <td>pages</td>
                        <td>unt</td>
                        <td>The amount of pages</td>
                    </tr>
                    <tr>
                        <td>next</td>
                        <td>str</td>
                        <td>Link to the next page (if it exists)</td>
                    </tr>
                    <tr>
                        <td>prev</td>
                        <td>str</td>
                        <td>Link to the previous page (if it exists)</td>
                    </tr>
                </table>
                <p>You can access different pages with the <code>page</code> parameter. If you don't specify any page, the first page will be shown. For example, in order to access page 2, add <code>?page=2</code> to the end of the URL.</p>
            </div>
        </div>
    );
}

export default RateLimiting;