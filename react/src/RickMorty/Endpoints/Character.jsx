function Character () {
    return (
        <>
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
                        <td>string</td>
                        <td>the name of the character</td>
                    </tr>
                    <tr>
                        <td>status</td>
                        <td>string</td>
                        <td>the status of the character, dead, alive or unknown</td>
                    </tr>
                    <tr>
                        <td>species</td>
                        <td>string</td>
                        <td>the species of the character</td>
                    </tr>
                    <tr>
                        <td>type</td>
                        <td>string</td>
                        <td>the type or subspecies of the character</td>
                    </tr>
                    <tr>
                        <td>gender</td>
                        <td>string</td>
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
                        <td>string(url)</td>
                        <td>link to the character's image. All images are 300x300px and most are meduim shots or potraits since they are intended to be used as avatars.</td>
                    </tr>
                    <tr>
                        <td>episode</td>
                        <td>array(url)</td>
                        <td>list of episodes in which this character appeared.</td>
                    </tr>
                    <tr>
                        <td>url</td>
                        <td>string(url)</td>
                        <td>link to the character's own URL endpoint</td>
                    </tr>
                    <tr>
                        <td>created</td>
                        <td>string</td>
                        <td>time at which the character was created in the database</td>
                    </tr>
                </table>
            <h3>GET all characters</h3>
                <p>You can use the list of all characters by using the <code>/character</code> endpoint.</p>
            <h3>GET a single character</h3>
                <p>You can get a single character by adding the <code>id</code> as a parameter</p>
                <code>/character/2</code>
            <h3>GET multiple characters</h3>
                <p>You can get multiple characters by adding an array of <code>ids</code> as a parameter: </p>
                <code>/character/[1,2,3] or /caharcter/1,2,3</code>
            <h3>Filter characters</h3>
                <p>adddddddddddddd<br></br>
                Available parameters include: </p>
                <ul>
                    <li><code>name: </code>filter by a given name</li>
                    <li><code>status: </code>filter by a given status, dead, alive or unknown</li>
                    <li><code>species:</code>filter by a given species</li>
                    <li><code>type: </code>filter by a given type</li>
                    <li><code>gender: </code>filter by a given gender, female, male, genderless or unknown</li>
                </ul>
            <br></br>

        </>
    )
}

export default Character;

