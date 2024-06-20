function ErrorCode () {
    return (
        <>
            <h2>Error codes</h2>
            <p>If an error occurs, whether on the client or the server side, the error messages will be returned in an errors array. For example: <br></br>
            <a>error sample</a>
            We use convetional HTTP response codes to indicate the success or failure of an API request: </p>
            <ul>
                <li><h5>2xx: </h5>Success</li>
                <li><h5>4xx: </h5>Client error (e.g., a required parameter was ommitted)</li>
                <li><h5>5xx: </h5>Server error (issues with UnSplash's servers)</li>
            </ul> 
        </>
    )
}

export default ErrorCode;