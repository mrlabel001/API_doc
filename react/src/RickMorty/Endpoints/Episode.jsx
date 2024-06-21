import './Endpoint.css';
import pic8 from "./pics/all episodes.png";
import pic9 from "./pics/single episode.png";
import pic10 from "./pics/multiple episodes.png";

function Episode () {
    return (
        <div className='endpoint_div' >
            <h2>Episode</h2>
            <p>There are a total of 51 episodes sorted by id</p>
            <h3>Episode schema</h3>
                <table>
                        <tr>
                            <th>Key</th>
                            <th>Type</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td>id</td>
                            <td>int</td>
                            <td>the id of the episode</td>
                        </tr>
                        <tr>
                            <td>name</td>
                            <td>string</td>
                            <td>the name of the episode</td>
                        </tr>
                        <tr>
                            <td>air_date</td>
                            <td>str</td>
                            <td>the air date of the episode</td>
                        </tr>
                        <tr>
                            <td>episode</td>
                            <td>str</td>
                            <td>the code of the episode</td>
                        </tr>
                        <tr>
                            <td>characters</td>
                            <td>str</td>
                            <td>list of characters in the episode</td>
                        </tr>
                        <tr>
                            <td>url</td>
                            <td>str</td>
                            <td>link to the episode's own endpoint</td>
                        </tr>
                        <tr>
                            <td>created</td>
                            <td>str</td>
                            <td>time at which the episode was created in the database</td>
                        </tr>
                    </table>
                <h3>GET all episodes</h3>
                    <p><code>/episodes</code> endpoint can be used to access all episodes.</p><br />
                    <img src={pic8} ></img>
                <h3>GET a single episode</h3>
                    <p><code>/episode/id</code> endpoint can be used to access a single and specific episode</p><br />
                    <img src={pic9} ></img>
                <h3>GET multiple episodes</h3>
                    <p><code>/episodes/[1,2,3] or /episodes/1,2,3</code> can be used to access multiple episodes</p><br />
                    <img src={pic10} ></img>
                <h3>Filter episodes</h3>
                <p>Available parameters: </p>
                <ul>
                    <li><code>name: </code>filter by a given name</li>
                    <li><code>episode: </code>filter by a given episode code</li>
                </ul>
        </div>
    )
}

export default Episode;