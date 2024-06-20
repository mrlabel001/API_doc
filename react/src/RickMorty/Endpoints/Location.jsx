function Location () {
    return (
        <>
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
                <p><p><code>/location</code> endpoint can be used to access all locations.</p></p>
            <h3>GET a single location</h3>
                <p><p><code>/location/3</code> endpoint can be used to access a single location.</p></p>
            <h3>GET multiple locations</h3>
                <p><p><code>/location/1,2,3 or /location/[1,2,3]</code> endpoint can be used to access a single location.</p></p>
            <h3>Filter locations</h3>
                <p>Available parameters include: </p>
                <ul>
                    <li><strong>name: </strong>filter by given name</li>
                    <li><strong>type: </strong>filter by given type</li>
                    <li><strong>dimension: </strong>filter by given dimension</li>
                </ul>
        </>
    )
}

export default Location;