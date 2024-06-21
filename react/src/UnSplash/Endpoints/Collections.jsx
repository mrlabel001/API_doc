import './Endpoint.css';
import pic20 from "./assets/get collections.png"
import pic21 from "./assets/get a collection.png"
import pic22 from "./assets/get a collection photos.png"
import pic23 from "./assets/get a collection related collection.png"
import pic24 from "./assets/create new collection.png"
import pic25 from "./assets/update collection.png"
import pic26 from "./assets/delete collection.png"
import pic27 from "./assets/add photo to collection.png"
import pic28 from "./assets/remove photo from collection.png"

function Collections() {

    return (
        <>
            <h3>Collections</h3>
            <p>Collections have link relations that include: </p>
                <table>
                    <tr>
                        <th>Relationship</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td><code>self</code></td>
                        <td>API location of this collection</td>
                    </tr>
                    <tr>
                        <td><code>html</code></td>
                        <td>HTML location of this collection</td>
                    </tr>
                    <tr>
                        <td><code>photos</code></td>
                        <td>API location of this collection's photos</td>
                    </tr>
                    <tr>
                        <td><code>related</code></td>
                        <td>API location of this collection's related collections</td>
                    </tr>
                </table>
                <br />
            <h4>GET collections</h4>
                <code>GET /collections</code><br></br>
                <strong>Parameters</strong>
                    <table>
                        <tr>
                            <th>Parameter</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td><code>page</code></td>
                            <td>Page number i'd like to retrieve. (Optional and default set to page 1)</td>
                        </tr>
                        <tr>
                            <td><code>per_page</code></td>
                            <td>Number of items per page.(Optional and default set to 10)</td>
                        </tr>
                    </table>
                    <p><strong>Response</strong></p>
                    <code>200 OK<br></br>Link: <br></br>X-Ratelimit-Limit: 1000<br></br>X-Ratelimit-Remaining: 999</code><br />
                    <img src={pic20}></img>
                    <br />
            <h4>GET a single collection</h4>
                <p>I'll need the <code>read_collrctions</code> to view user's private collections.</p>
                <code>GET /collections/:id</code><br></br>
                <strong>Parameters</strong>
                    <table>
                        <tr>
                            <th>Parameter</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td><code>id</code></td>
                            <td>The collection;s ID. Required</td>
                        </tr>
                    </table>
                    <p><strong>Response</strong></p>
                    <code>200 OK<br></br>X-Ratelimit-Limit: 1000<br></br>X-Ratelimit-Remaining: 999</code><br />
                    <img src={pic21}></img>
                    <br />
            <h4>GET a collection's photos</h4>
                <code>GET /collections/:id/photos</code><br></br>
                <strong>Parameters</strong>
                    <table>
                        <tr>
                            <th>Parameter</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td><code>id</code></td>
                            <td>The collection;s ID. Required</td>
                        </tr>
                        <tr>
                            <td><code>page</code></td>
                            <td>Page number i'd like to retrieve. (Optional and default set to page 1)</td>
                        </tr>
                        <tr>
                            <td><code>per_page</code></td>
                            <td>Number of items per page.(Optional and default set to 10)</td>
                        </tr>
                        <tr>
                            <td><code>orientation</code></td>
                            <td>Filter by photo orientation. (Optional)<code>landscape, potrait, squarish.</code></td>
                        </tr>
                    </table>
                    <p><strong>Response</strong></p>
                    <code>200 OK<br></br>X-Ratelimit-Limit: 1000<br></br>X-Ratelimit-Remaining: 999</code><br />
                    <img src={pic22}></img>
                    <br />
            <h4>GET a collection's related collections</h4>
                <code>GET /collections/:id/related</code><br></br>
                <strong>Parameters</strong>
                    <table>
                        <tr>
                            <th>Parameter</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td><code>id</code></td>
                            <td>The collection;s ID. Required</td>
                        </tr>
                    </table>
                    <p><strong>Response</strong></p>
                    <code>200 OK<br></br>X-Ratelimit-Limit: 1000<br></br>X-Ratelimit-Remaining: 999</code><br />
                    <img src={pic23}></img>
                    <br />
            <h4>CREATE a new collection</h4>
                <code>POST /collections</code><br></br>
                <p>This requires the <code>write_collections</code> scope.</p>
                <strong>Parameters</strong>
                    <table>
                        <tr>
                            <th>Parameter</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td><code>title</code></td>
                            <td>The title of the collection. Required.</td>
                        </tr>
                        <tr>
                            <td><code>description</code></td>
                            <td>The description of the collection. (Optional)</td>
                        </tr>
                        <tr>
                            <td><code>private</code></td>
                            <td>Whether to make collection private. (Optional. default is false.)</td>
                        </tr>
                    </table>
                    <p><strong>Response</strong></p>
                    <code>201 Created<br></br>X-Ratelimit-Limit: 1000<br></br>X-Ratelimit-Remaining: 999</code><br />
                    <img src={pic24}></img>
                    <br />
            <h4>UPDATE existing collection</h4>
              <p>I'll need the <code>write_collections</code> scope to update user's collection.</p>
              <code>PUT /collections/:id</code><br></br>
              <strong>Parameters</strong>
                <table>
                  <tr>
                    <th>Parameter</th>
                    <th>Description</th>
                  </tr>
                  <tr>
                    <td><code>title</code></td>
                    <td>The title of the collection. Required.</td>
                  </tr>
                  <tr>
                    <td><code>description</code></td>
                    <td>The description of the collection. (Optional)</td>
                  </tr>
                  <tr>
                    <td><code>private</code></td>
                    <td>Whether to make collection private. (Optional. default is false.)</td>
                  </tr>
                  </table>
                  <p><strong>Response</strong></p>
                  <code>200 OK<br></br>X-Ratelimit-Limit: 1000<br></br>X-Ratelimit-Remaining: 999</code><br />
                  <img src={pic25}></img>
                  <br />
            <h4>DELETE a collection</h4>
              <p>I'll need the <code>write_collections</code> scope to delete user's collection.</p>
              <code>DELETE /collections/:id</code><br></br>
              <strong>Parameters</strong>
              <table>
                <tr>
                  <th>Parameter</th>
                  <th>Description</th>
                </tr>
                <tr>
                  <td><code>id</code></td>
                  <td>The collection's ID. Required.</td>
                </tr>
              </table>
              <p><strong>Response</strong></p>
              <code>204 No Content<br></br>X-Ratelimit-Limit: 1000<br></br>X-Ratelimit-Remaining: 999</code><br />
              <img src={pic26}></img>
              <br />
            <h4>ADD a photo to a collection</h4>
              <p>I'll need the <code>write_collections</code> scope to add a photo to a collection.</p>
              <code>POST /collections/:collection_id/add</code><br></br>
              <strong>Parameters</strong>
                <table>
                  <tr>
                    <th>Parameter</th>
                    <th>Description</th>
                  </tr>
                  <tr>
                    <td><code>collection_id</code></td>
                    <td>The collection's ID. Required.</td>
                  </tr>
                  <tr>
                    <td><code>photo_id</code></td>
                    <td>The photo's ID. Required.</td>
                  </tr>
                </table>
                <p><strong>Response</strong></p>
                <code>201 Created<br></br>X-Ratelimit-Limit: 1000<br></br>X-Ratelimit-Remaining: 999</code><br />
                <img src={pic27}></img>
                <br />
            <h4>DELETE photo from a collection</h4>
              <p>This requires the <code>write_collections</code> scope.</p>
              <code>DELETE /collections/:collection_id/remove</code><br></br>
              <strong>Parameters</strong>
                <table>
                  <tr>
                    <th>Parameter</th>
                    <th>Description</th>
                  </tr>
                  <tr>
                    <td><code>collection_id</code></td>
                    <td>The collection's ID. Required.</td>
                  </tr>
                  <tr>
                    <td><code>photo_id</code></td>
                    <td>The photo's ID. Required.</td>
                  </tr>
                </table>
                <p><strong>Response</strong></p>
                <code>200 Success<br></br>X-Ratelimit-Limit: 1000<br></br>X-Ratelimit-Remaining: 999</code><br />
                <img src={pic28}></img>
                <br />
        </>
    )
}

export default Collections;