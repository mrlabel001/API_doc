function RateLimiting () {
    return (
    <>
        <h2>Rate Limiting</h2>
            <p>The Rick and Morty API has a rate limit of 10,000 requests per day to prevent malicious usage of the API, 
                such as the use of bots. If the limit is exceeded, a status code of <code>429 Too Many Requests</code> 
                will be received on all requests for a period of 12 hours. During this time, the user will not be able to make firther request untill the allocated day ends.
            </p>
        <h2>Info and Pagination</h2>
            <p>All the resources mentioned above will be paginated by default with a limit of 20 per page. 
                Also, there are two data values in the payload returned that define the pagination: 
                <ul>
                    <li><strong>page</strong>the current page.</li>
                    <li><strong>per_page</strong>how many items per page you are given</li>
                </ul>
            </p>
    </>
    )
}

export default RateLimiting;