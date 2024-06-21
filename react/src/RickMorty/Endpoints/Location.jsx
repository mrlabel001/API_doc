import './Endpoint.css';
import pic5 from "./pics/all locations.png";
import pic6 from "./pics/single location.png";
import pic7 from "./pics/multiple locations.png";

function Location () {
    return (
        <div className='endpoint_div' >
            <h2>Location</h2>
            <p>There is a total of 126 locations sorted by id.</p>
            <strong>Location schema</strong>
            <table>
                <tr>
                    <td>key</td>
                    <td>type</td>
                    <td>description</td>
                </tr>
                <tr>
                    <td>id</td>
                    <td>int</td>
                    <td>the id of the location</td>
                </tr>
                <tr>
                    <td>name</td>
                    <td>str</td>
                    <td>the name of the location</td>
                </tr>
                <tr>
                    <td>type</td>
                    <td>str</td>
                    <td>the type of the location</td>
                </tr>
                <tr>
                    <td>dimension</td>
                    <td>str</td>
                    <td>the dimension in which the location is located</td>
                </tr>
                <tr>
                    <td>residents</td>
                    <td>arr</td>
                    <td>list of characters who have been last seen in the location</td>
                </tr>
                <tr>
                    <td>url</td>
                    <td>str</td>
                    <td>link to the location's own endpoint</td>
                </tr>
                <tr>
                    <td>created</td>
                    <td>str</td>
                    <td>time at which the location was created in the database</td>
                </tr>
            </table>
            <h3>GET all locations</h3>
                <p><p><code>/location</code> endpoint can be used to access all locations.</p></p><br />
                <img src={pic5} ></img>
            <h3>GET a single location</h3>
                <p><p><code>/location/3</code> endpoint can be used to access a single location.</p></p><br />
                <img src={pic6} ></img>
            <h3>GET multiple locations</h3>
                <p><p><code>/location/1,2,3 or /location/[1,2,3]</code> endpoint can be used to access a single location.</p></p>
                <img src={pic7} ></img>
            <h3>Filter locations</h3>
                <p>You can also include filters in the URL by including additional query parameters. To start filtering add a <pre>?</pre> 
                followed by the query <pre>query=value. </pre>If you want to chain several queries in the same call, use <pre>&</pre> 
                followed by the query.</p>
                <p>Available parameters include: </p>
                <ul>
                    <li><strong>name: </strong>filter by given name</li>
                    <li><strong>type: </strong>filter by given type</li>
                    <li><strong>dimension: </strong>filter by given dimension</li>
                </ul>
        </div>
    )
}

export default Location;