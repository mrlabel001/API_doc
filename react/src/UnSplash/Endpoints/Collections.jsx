import React, { useState, useEffect } from 'react';

function Collections() {
  const [collections, setCollections] = useState(null);
  const [collection, setCollection] = useState(null);
  const [photos, setPhotos] = useState(null);
  const [relatedCollections, setRelatedCollections] = useState(null);
  const [createCollection, setCreateCollection] = useState(null);
  const [updateCollection, setUpdateCollection] = useState(null);
  const [deleteCollection, setDeleteCollection] = useState(null);
  const [addPhoto, setAddPhoto] = useState(null);
  const [deletePhoto, setDeletePhoto] = useState(null);

  const fetchApiData = async (apiEndpoint, setStateCallback) => {
    try {
      const response = await fetch(apiEndpoint, {
        method: 'GET',
        headers: {
          Authorization: `Bearer your_jwt_token_here`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const textData = await response.text();
      setStateCallback(textData);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  useEffect(() => {
    const apiEndpoint1 = 'http://localhost:5000/collections';
    fetchApiData(apiEndpoint1, setCollections);
  }, []);

  useEffect(() => {
    const apiEndpoint2 = 'http://localhost:5000/collection';
    fetchApiData(apiEndpoint2, setCollection);
  }, []);

  useEffect(() => {
    const apiEndpoint3 = 'http://localhost:5000/photos';
    fetchApiData(apiEndpoint3, setPhotos);
  }, []);

  useEffect(() => {
    const apiEndpoint4 = 'http://localhost:5000/related_collections';
    fetchApiData(apiEndpoint4, setRelatedCollections);
  }, []);

  useEffect(() => {
    const apiEndpoint5 = 'http://localhost:5000/create_collection';
    fetchApiData(apiEndpoint5, setCreateCollection);
  }, []);

  useEffect(() => {
    const apiEndpoint6 = 'http://localhost:5000/update_collection';
    fetchApiData(apiEndpoint6, setUpdateCollection);
  }, []);

  useEffect(() => {
    const apiEndpoint7 = 'http://localhost:5000/delete_collection';
    fetchApiData(apiEndpoint7, setDeleteCollection);
  }, []);

  useEffect(() => {
    const apiEndpoint8 = 'http://localhost:5000/add_photo';
    fetchApiData(apiEndpoint8, setAddPhoto);
  }, []);

  useEffect(() => {
    const apiEndpoint9 = 'http://localhost:5000/delete_photo';
    fetchApiData(apiEndpoint9, setDeletePhoto);
  }, []);

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
                        <code>self</code>
                        <td>API location of this collection</td>
                    </tr>
                    <tr>
                        <code>html</code>
                        <td>HTML location of this collection</td>
                    </tr>
                    <tr>
                        <code>photos</code>
                        <td>API location of this collection's photos</td>
                    </tr>
                    <tr>
                        <code>related</code>
                        <td>API location of this collection's related collections</td>
                    </tr>
                </table>
            <h4>GET collections</h4>
                <code>GET /collections</code><br></br>
                <strong>Parameters</strong>
                    <table>
                        <tr>
                            <th>Parameter</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <code>page</code>
                            <td>Page number i'd like to retrieve. (Optional and default set to page 1)</td>
                        </tr>
                        <tr>
                            <code>per_page</code>
                            <td>Number of items per page.(Optional and default set to 10)</td>
                        </tr>
                    </table>
                    <p><strong>Response</strong></p>
                    <code>200 OK<br></br>Link: <br></br>X-Ratelimit-Limit: 1000<br></br>X-Ratelimit-Remaining: 999</code>
                    <pre>{collections}</pre>
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
                            <code>id</code>
                            <td>The collection;s ID. Required</td>
                        </tr>
                    </table>
                    <p><strong>Response</strong></p>
                    <code>200 OK<br></br>X-Ratelimit-Limit: 1000<br></br>X-Ratelimit-Remaining: 999</code>
                    <pre>{collection}</pre>
            <h4>GET a collection's photos</h4>
                <code>GET /collections/:id/photos</code><br></br>
                <strong>Parameters</strong>
                    <table>
                        <tr>
                            <th>Parameter</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <code>id</code>
                            <td>The collection;s ID. Required</td>
                        </tr>
                        <tr>
                            <code>page</code>
                            <td>Page number i'd like to retrieve. (Optional and default set to page 1)</td>
                        </tr>
                        <tr>
                            <code>per_page</code>
                            <td>Number of items per page.(Optional and default set to 10)</td>
                        </tr>
                        <tr>
                            <code>orientation</code>
                            <td>Filter by photo orientation. (Optional)<code>landscape, potrait, squarish.</code></td>
                        </tr>
                    </table>
                    <p><strong>Response</strong></p>
                    <code>200 OK<br></br>X-Ratelimit-Limit: 1000<br></br>X-Ratelimit-Remaining: 999</code>
                    <pre>{photos}</pre>
            <h4>GET a collection's related collections</h4>
                <code>GET /collections/:id/related</code><br></br>
                <strong>Parameters</strong>
                    <table>
                        <tr>
                            <th>Parameter</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <code>id</code>
                            <td>The collection;s ID. Required</td>
                        </tr>
                    </table>
                    <p><strong>Response</strong></p>
                    <code>200 OK<br></br>X-Ratelimit-Limit: 1000<br></br>X-Ratelimit-Remaining: 999</code>
                    <pre>{relatedCollections}</pre>
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
                            <code>title</code>
                            <td>The title of the collection. Required.</td>
                        </tr>
                        <tr>
                            <code>description</code>
                            <td>The description of the collection. (Optional)</td>
                        </tr>
                        <tr>
                            <code>private</code>
                            <td>Whether to make collection private. (Optional. default is false.)</td>
                        </tr>
                    </table>
                    <p><strong>Response</strong></p>
                    <code>201 Created<br></br>X-Ratelimit-Limit: 1000<br></br>X-Ratelimit-Remaining: 999</code>
                    <pre>{createCollection}</pre>
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
                    <code>title</code>
                    <td>The title of the collection. Required.</td>
                  </tr>
                  <tr>
                    <code>description</code>
                    <td>The description of the collection. (Optional)</td>
                  </tr>
                  <tr>
                    <code>private</code>
                    <td>Whether to make collection private. (Optional. default is false.)</td>
                  </tr>
                  </table>
                  <p><strong>Response</strong></p>
                  <code>200 OK<br></br>X-Ratelimit-Limit: 1000<br></br>X-Ratelimit-Remaining: 999</code>
                  <pre>{updateCollection}</pre>
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
                  <code>id</code>
                  <td>The collection's ID. Required.</td>
                </tr>
              </table>
              <p><strong>Response</strong></p>
              <code>204 No Content<br></br>X-Ratelimit-Limit: 1000<br></br>X-Ratelimit-Remaining: 999</code>
              <pre>{deleteCollection}</pre>
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
                    <code>collection_id</code>
                    <td>The collection's ID. Required.</td>
                  </tr>
                  <tr>
                    <code>photo_id</code>
                    <td>The photo's ID. Required.</td>
                  </tr>
                </table>
                <p><strong>Response</strong></p>
                <code>201 Created<br></br>X-Ratelimit-Limit: 1000<br></br>X-Ratelimit-Remaining: 999</code>
                <pre>{addPhoto}</pre>
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
                    <code>collection_id</code>
                    <td>The collection's ID. Required.</td>
                  </tr>
                  <tr>
                    <code>photo_id</code>
                    <td>The photo's ID. Required.</td>
                  </tr>
                </table>
                <p><strong>Response</strong></p>
                <code>200 Success<br></br>X-Ratelimit-Limit: 1000<br></br>X-Ratelimit-Remaining: 999</code>
                <pre>{deletePhoto}</pre>
        </>
    )
}

export default Collections;