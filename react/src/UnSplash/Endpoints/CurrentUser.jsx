import './Endpoint.css';
import pic1 from "./assets/Get current user profile.png"
import pic2 from "./assets/update current user profile.png"

function CurrentUser () {

    return (
        <>
            <h2>Endpoints</h2>
            <p>I will display how to retrieve data or responses from various endpoints and the expected results.</p>
            <h3>Current user</h3>
                <h4>GET the user's profile</h4>
                    <code>GET /me</code>
                    <p><strong>Note: </strong>I'll need to authorize the <code>read_user</code> scope in order to access a user's private data. Without Bearer token(Client-ID token) this request will return a <code>401 Unauthorized</code> response.</p>
                    <p><strong>Parameters</strong><br></br>None</p>
                    <p><strong>Response</strong></p>
                    <code>200 OK<br></br>X-Ratelimit-Limit: 1000<br></br>X-Ratelimit-Remaining: 999</code><br />
                    <img src={pic1}></img>
                    <br />
                <h4>UPDATE the user's profile</h4>
                    <code>PUT /me</code>
                    <p><strong>Note: </strong>I'll need to authorize the <code>write_user</code> scope in order to update, otherwise this request will return a <code>403 Forbidden</code> response.</p>
                    <strong>Parameters</strong>
                    <p>All parameters are optional</p>
                    <table>
                        <tr>
                            <th>Parameter</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td><code>username</code></td>
                            <td>Username</td>
                        </tr>
                        <tr>
                            <td><code>username</code></td>
                            <td>username</td>
                        </tr>
                        <tr>
                            <td><code>first_name</code></td>
                            <td>First name</td>
                        </tr>
                        <tr>
                            <td><code>last_name</code></td>
                            <td>Last name</td>
                        </tr>
                        <tr>
                            <td><code>email</code></td>
                            <td>Email</td>
                        </tr>
                        <tr>
                            <td><code>url</code></td>
                            <td>Portfolio/ personal URL</td>
                        </tr>
                        <tr>
                            <td><code>location</code></td>
                            <td>Location</td>
                        </tr>
                        <tr>
                            <td><code>bio</code></td>
                            <td>bio/ About</td>
                        </tr>
                        <tr>
                            <td><code>instagram_username</code></td>
                            <td>Instagram username</td>
                        </tr>
                    </table>
                    <p><strong>Response</strong></p>
                    <code>200 OK<br></br>X-Ratelimit-Limit: 1000<br></br>X-Ratelimit-Remaining: 999</code><br />
                    <img src={pic2}></img>
                    <br />
        </>
    )
}

export default CurrentUser;