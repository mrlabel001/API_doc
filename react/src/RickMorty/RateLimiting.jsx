import React from 'react';
import './RateLimiting.css'; // Import your CSS file

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
                    All the resources mentioned above will be paginated by default with a limit of 20 per page. 
                    Also, there are two data values in the payload returned that define the pagination:
                </p>
                <ul>
                    <li><strong>page</strong>: the current page.</li>
                    <li><strong>per_page</strong>: how many items per page you are given.</li>
                </ul>
            </div>
        </div>
    );
}

export default RateLimiting;