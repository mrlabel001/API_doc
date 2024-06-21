import React from 'react';
import './Authentication.css';

function Authentication() {
    return (
        <div className="authentication">
            <h2 className="authentication-title">Authentication</h2>
            <h3 className="section-title">Public Authentication</h3>
            <p className="description">
                Most actions, such as searching, fetching, or downloading a photo, can be performed without requiring authentication from a specific user. To authenticate requests in this manner, you can pass your application's access key via the HTTP Authorization header or as a client_id query parameter:
            </p>
            <code>Authorization: Client-ID YOUR_ACCESS_KEY</code>
            <p>You can also pass this value using a client_id query parameter: </p>
            <code>https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY</code>
            <p>If only your access key is sent, attempting to perform non-public actions that require user authorization will result in a <code>401 Unauthorized</code> response.</p>
            <br />
            <h3 className="section-title">User Authentication</h3>
            <p className="description">
                For API applications requiring customized responses per user (e.g., checking if they have liked a photo, fetching their private collections) or actions on behalf of the users, a user's authentication workflow is necessary. This involves creating individual user bearer tokens for authentication.
                For detailed guidance, refer to the <a href="https://unsplash.com/documentation/user-authentication-workflow" className="link">user authentication workflow documentation.</a>
            </p>
            <br />
            <h3 className="section-title">Dynamic Client Registration</h3>
            <p className="description">
                We support a special authorization flow following the OAuth dynamic client registration protocol. This grants individual API keys to each user through a user-friendly sign-up process.
                This approach, or the use of a proxy, is required for decentralized applications such as WordPress or Ghost, where a single API key cannot be shared across all installations.
                For detailed guidance, refer to the <a href="https://unsplash.com/documentation/dynamic-client-registration" className="link">dynamic client registration documentation.</a>
            </p>
            <br />
        </div>
    );
}

export default Authentication;