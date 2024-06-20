function Authentication () {
    return (
        <>
            <h2>Authentication</h2>
            <h3>Public authentication</h3>
                <p>Most actions, such as searching, fetching, or downloading a photo can be perfomed without requiring authentication from a specific use. To authenicate requests in this manner, you can pass your application's access key via the HTTP Authorization header or as a client_id query parameter:</p>
                <ul>
                    <li><strong>HTTP Authorization header: </strong> 
                    <a>Authoriization</a></li>
                    <li><strong>Query parameter: </strong>
                    <a>Parameters</a></li>
                </ul>
                <p>This from of authentication is widely used by most UnSplash API applications as it does not necessitate user login or joining. 
                    Additionally, its genearlly cacheable bu our system, resulting in faster response times. Howevwe, attemting to perform non-public actions that require user authorization with only the access key will result in a 401 Unauthorized response.</p><br></br>
            <h3>User Authentication</h3>
                <p>For API applications requiring customized response per user (e.g., checking if they have liked a photo, fetchong their private collections) or actions on behalf of the users, user's authentication workflow is necessary. This involves creating individual user bearer tokens for authentication.
                    For detailed guidance, refer to the <a>user authentication workflow documentation.</a>
                </p><br></br>
            <h3>Dynamic Client Registartion</h3>
                <p>
                    We support a special authorization flow following the OAuth dynamic client registartion protocol. This This grants individual API keys to each user through a user friendly sign up process.
                    This approach, or the use of a proxy, is required for decentralized applications such as WordPress or Ghost, where a single API key cannot be shared across all installations.
                    For detailed guidance refer to the <a>dynamic client registartion documentation.</a>
                </p><br></br>
        </>
    )
}

export default Authentication;