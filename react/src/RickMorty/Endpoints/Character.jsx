import './Endpoint.css';
import pic1 from "./pics/all characters.png"
import pic2 from "./pics/single character.png"
import pic3 from "./pics/multiple characters.png"
import pic4 from "./pics/filter characters.png"

function Character () {
    return (
        <div className='endpoint_div' >
            <h2>Character</h2>
                <p>There is a total of 826 characters sorted by id.</p>
                <h3>Character schema</h3>
                <table>
                    <tr>
                        <th>Key</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td>id</td>
                        <td>int</td>
                        <td>the id of the character</td>
                    </tr>
                    <tr>
                        <td>name</td>
                        <td>str</td>
                        <td>the name of the character</td>
                    </tr>
                    <tr>
                        <td>status</td>
                        <td>str</td>
                        <td>the status of the character, dead, alive or unknown</td>
                    </tr>
                    <tr>
                        <td>species</td>
                        <td>str</td>
                        <td>the species of the character</td>
                    </tr>
                    <tr>
                        <td>type</td>
                        <td>str</td>
                        <td>the type or subspecies of the character</td>
                    </tr>
                    <tr>
                        <td>gender</td>
                        <td>str</td>
                        <td>the gender of the character, male, female, genderless or unknown</td>
                    </tr>
                    <tr>
                        <td>origin</td>
                        <td>object</td>
                        <td>name and link to the character's origin location</td>
                    </tr>
                    <tr>
                        <td>location</td>
                        <td>object</td>
                        <td>name and link to the character's last known location endpoint</td>
                    </tr>
                    <tr>
                        <td>image</td>
                        <td>str(url)</td>
                        <td>link to the character's image. All images are 300x300px and most are meduim shots or potraits since they are intended to be used as avatars.</td>
                    </tr>
                    <tr>
                        <td>episode</td>
                        <td>array(url)</td>
                        <td>list of episodes in which this character appeared.</td>
                    </tr>
                    <tr>
                        <td>url</td>
                        <td>str(url)</td>
                        <td>link to the character's own URL endpoint</td>
                    </tr>
                    <tr>
                        <td>created</td>
                        <td>str</td>
                        <td>time at which the character was created in the database</td>
                    </tr>
                </table>
            <h3>GET all characters</h3>
                <p>You can use the list of all characters by using the <code>/character</code> endpoint.</p><br />
                <img src={pic1} ></img><br />
            <h3>GET a single character</h3>
                <p>You can get a single character by adding the <code>id</code> as a parameter</p>
                <code>/character/2</code><br />
                <img src={pic2} ></img><br />
            <h3>GET multiple characters</h3>
                <p>You can get multiple characters by adding an array of <code>ids</code> as a parameter: </p>
                <code>/character/[1,2,3] or /caharcter/1,2,3</code><br />
                <img src={pic3} ></img><br />
            <h3>Filter characters</h3>
            <p>You can also include filters in the URL by including additional query parameters. To start filtering add a <code>?</code> 
                followed by the query <code>query=value. </code>If you want to chain several queries in the same call, use <code>&</code> 
                followed by the query.</p>
                <p>Available parameters include: </p>
                <ul>
                    <li><code>name: </code>filter by a given name</li>
                    <li><code>status: </code>filter by a given status, dead, alive or unknown</li>
                    <li><code>species:</code>filter by a given species</li>
                    <li><code>type: </code>filter by a given type</li>
                    <li><code>gender: </code>filter by a given gender, female, male, genderless or unknown</li>
                </ul>
                <code>GET https://rickandmortyapi.com/api/character/?name=rick&status=alive</code><br />
                <img src={pic4} ></img>
            <br />

        </div>
    )
}

export default Character;

