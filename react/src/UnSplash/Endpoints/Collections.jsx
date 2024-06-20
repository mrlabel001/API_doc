import React, { useState, useEffect } from 'react';
function Collections () {

    const [collections, setCollections] = useState(null)
    const [collection, setCollection] = useState(null)
    const [photos, setPhotos] = useState(null)
    const [relatedCollections, setRelatedCollections] = useState(null)
    const [createCollection, setCreateCollection] = useState(null)
    const [updateCollection, setUpdateCollection] = useState(null)
    const [deleteCollection, setDeleteCollection] = useState(null)
    const [addPhoto, setAddPhoto] = useState(null)
    const [deletePhoto, setDeletePhoto] = useState(null)

    //function to get collections
    useEffect(() => {
        // Define the API endpoint
        const apiEndpoint1 = 'http://localhost:5000/users';
    
        // Fetch data from the API
        const fetchCollections = async () => {
          try {
            const response = await fetch(apiEndpoint1, {
              method: 'GET', // Specify the method
              headers: {
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxODc0Mjk5MywianRpIjoiNzU5MDRhY2MtMmU1OC00OTE1LTljM2UtOGVjZWI2MGFlNDg5IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MSwibmJmIjoxNzE4NzQyOTkzLCJjc3JmIjoiOWZiYzI0Y2EtOWY3Zi00YTk3LWI5MjItZDYxOWFmMjY5Nzc5IiwiZXhwIjoxNzE4NzUwMTkzLCJhZG1pbiI6dHJ1ZX0.vexUOCsFkZ6WwXTL9EjlD1PWpwo8Ki0yZRUbqPi2Z24`,
                'Content-Type': 'application/json', // Adjust Content-Type if necessary
              },
            });
    
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const textData1 = await response.text();
            setCollections(textData1); // Set the fetched text data in the state
          } catch (error) {
            console.error('Fetch error:', error);
          }
        };
    
        fetchCollections(); // Call the fetchData function
      }, []);

      //function to get a single collection
    useEffect(() => {
        const apiEndpoint2 = 'http://localhost:5000/pending_users';
        const fetchCollection = async () => {
          try {
            const response = await fetch(apiEndpoint2, {
              method: 'GET', 
              headers: {
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxODc0Mjk5MywianRpIjoiNzU5MDRhY2MtMmU1OC00OTE1LTljM2UtOGVjZWI2MGFlNDg5IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MSwibmJmIjoxNzE4NzQyOTkzLCJjc3JmIjoiOWZiYzI0Y2EtOWY3Zi00YTk3LWI5MjItZDYxOWFmMjY5Nzc5IiwiZXhwIjoxNzE4NzUwMTkzLCJhZG1pbiI6dHJ1ZX0.vexUOCsFkZ6WwXTL9EjlD1PWpwo8Ki0yZRUbqPi2Z24`,
                'Content-Type': 'application/json', 
              },
            });
    
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const textData2 = await response.text();
            setCollection(textData2); 
          } catch (error) {
            console.error('Fetch error:', error);
          }
        };
    
        fetchCollection(); 
      }, []);

      //function to get a collection's photos
    useEffect(() => {
        const apiEndpoint3 = 'http://localhost:5000/pending_users';
        const fetchCollectionPhotos = async () => {
          try {
            const response = await fetch(apiEndpoint3, {
              method: 'GET', 
              headers: {
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxODc0Mjk5MywianRpIjoiNzU5MDRhY2MtMmU1OC00OTE1LTljM2UtOGVjZWI2MGFlNDg5IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MSwibmJmIjoxNzE4NzQyOTkzLCJjc3JmIjoiOWZiYzI0Y2EtOWY3Zi00YTk3LWI5MjItZDYxOWFmMjY5Nzc5IiwiZXhwIjoxNzE4NzUwMTkzLCJhZG1pbiI6dHJ1ZX0.vexUOCsFkZ6WwXTL9EjlD1PWpwo8Ki0yZRUbqPi2Z24`,
                'Content-Type': 'application/json', 
              },
            });
    
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const textData3 = await response.text();
            setPhotos(textData3); 
          } catch (error) {
            console.error('Fetch error:', error);
          }
        };
    
        fetchCollectionPhotos(); 
      }, []);

      //function to get a collection's related collections
    useEffect(() => {
        const apiEndpoint4 = 'http://localhost:5000/pending_users';
        const fetchRelatedCollection = async () => {
          try {
            const response = await fetch(apiEndpoint4, {
              method: 'GET', 
              headers: {
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxODc0Mjk5MywianRpIjoiNzU5MDRhY2MtMmU1OC00OTE1LTljM2UtOGVjZWI2MGFlNDg5IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MSwibmJmIjoxNzE4NzQyOTkzLCJjc3JmIjoiOWZiYzI0Y2EtOWY3Zi00YTk3LWI5MjItZDYxOWFmMjY5Nzc5IiwiZXhwIjoxNzE4NzUwMTkzLCJhZG1pbiI6dHJ1ZX0.vexUOCsFkZ6WwXTL9EjlD1PWpwo8Ki0yZRUbqPi2Z24`,
                'Content-Type': 'application/json', 
              },
            });
    
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const textData4 = await response.text();
            setRelatedCollections(textData4); 
          } catch (error) {
            console.error('Fetch error:', error);
          }
        };
    
        fetchRelatedCollection(); 
      }, []);

      //function to create collecion
    useEffect(() => {
        const apiEndpoint5 = 'http://localhost:5000/pending_users';
        const createCollection = async () => {
          try {
            const response = await fetch(apiEndpoint5, {
              method: 'GET', 
              headers: {
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxODc0Mjk5MywianRpIjoiNzU5MDRhY2MtMmU1OC00OTE1LTljM2UtOGVjZWI2MGFlNDg5IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MSwibmJmIjoxNzE4NzQyOTkzLCJjc3JmIjoiOWZiYzI0Y2EtOWY3Zi00YTk3LWI5MjItZDYxOWFmMjY5Nzc5IiwiZXhwIjoxNzE4NzUwMTkzLCJhZG1pbiI6dHJ1ZX0.vexUOCsFkZ6WwXTL9EjlD1PWpwo8Ki0yZRUbqPi2Z24`,
                'Content-Type': 'application/json', 
              },
            });
    
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const textData5 = await response.text();
            setCreateCollection(textData5); 
          } catch (error) {
            console.error('Fetch error:', error);
          }
        };
    
        createCollection(); 
      }, []);

      //function to update collecion
    useEffect(() => {
        const apiEndpoint6 = 'http://localhost:5000/pending_users';
        const updateCollection = async () => {
          try {
            const response = await fetch(apiEndpoint6, {
              method: 'GET', 
              headers: {
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxODc0Mjk5MywianRpIjoiNzU5MDRhY2MtMmU1OC00OTE1LTljM2UtOGVjZWI2MGFlNDg5IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MSwibmJmIjoxNzE4NzQyOTkzLCJjc3JmIjoiOWZiYzI0Y2EtOWY3Zi00YTk3LWI5MjItZDYxOWFmMjY5Nzc5IiwiZXhwIjoxNzE4NzUwMTkzLCJhZG1pbiI6dHJ1ZX0.vexUOCsFkZ6WwXTL9EjlD1PWpwo8Ki0yZRUbqPi2Z24`,
                'Content-Type': 'application/json', 
              },
            });
    
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const textData6 = await response.text();
            setUpdateCollection(textData6); 
          } catch (error) {
            console.error('Fetch error:', error);
          }
        };
    
        updateCollection(); 
      }, []);

      //function to delete collecion
    useEffect(() => {
        const apiEndpoint7 = 'http://localhost:5000/pending_users';
        const deleteCollection = async () => {
          try {
            const response = await fetch(apiEndpoint7, {
              method: 'GET', 
              headers: {
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxODc0Mjk5MywianRpIjoiNzU5MDRhY2MtMmU1OC00OTE1LTljM2UtOGVjZWI2MGFlNDg5IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MSwibmJmIjoxNzE4NzQyOTkzLCJjc3JmIjoiOWZiYzI0Y2EtOWY3Zi00YTk3LWI5MjItZDYxOWFmMjY5Nzc5IiwiZXhwIjoxNzE4NzUwMTkzLCJhZG1pbiI6dHJ1ZX0.vexUOCsFkZ6WwXTL9EjlD1PWpwo8Ki0yZRUbqPi2Z24`,
                'Content-Type': 'application/json', 
              },
            });
    
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const textData7 = await response.text();
            setDeleteCollection(textData7); 
          } catch (error) {
            console.error('Fetch error:', error);
          }
        };
    
        deleteCollection(); 
      }, []);

      //function to add photo to a collection
    useEffect(() => {
      const apiEndpoint8 = 'http://localhost:5000/pending_users';
      const addPhoto = async () => {
        try {
          const response = await fetch(apiEndpoint8, {
            method: 'GET', 
            headers: {
              Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxODc0Mjk5MywianRpIjoiNzU5MDRhY2MtMmU1OC00OTE1LTljM2UtOGVjZWI2MGFlNDg5IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MSwibmJmIjoxNzE4NzQyOTkzLCJjc3JmIjoiOWZiYzI0Y2EtOWY3Zi00YTk3LWI5MjItZDYxOWFmMjY5Nzc5IiwiZXhwIjoxNzE4NzUwMTkzLCJhZG1pbiI6dHJ1ZX0.vexUOCsFkZ6WwXTL9EjlD1PWpwo8Ki0yZRUbqPi2Z24`,
              'Content-Type': 'application/json', 
            },
          });
  
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const textData8 = await response.text();
          setAddPhoto(textData8); 
        } catch (error) {
          console.error('Fetch error:', error);
        }
      };
  
      addPhoto(); 
    }, []);

    //function to delete photo from a collection
    useEffect(() => {
      const apiEndpoint9 = 'http://localhost:5000/pending_users';
      const deletePhoto = async () => {
        try {
          const response = await fetch(apiEndpoint9, {
            method: 'GET', 
            headers: {
              Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxODc0Mjk5MywianRpIjoiNzU5MDRhY2MtMmU1OC00OTE1LTljM2UtOGVjZWI2MGFlNDg5IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MSwibmJmIjoxNzE4NzQyOTkzLCJjc3JmIjoiOWZiYzI0Y2EtOWY3Zi00YTk3LWI5MjItZDYxOWFmMjY5Nzc5IiwiZXhwIjoxNzE4NzUwMTkzLCJhZG1pbiI6dHJ1ZX0.vexUOCsFkZ6WwXTL9EjlD1PWpwo8Ki0yZRUbqPi2Z24`,
              'Content-Type': 'application/json', 
            },
          });
  
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const textData9 = await response.text();
          setDeletePhoto(textData9); 
        } catch (error) {
          console.error('Fetch error:', error);
        }
      };
  
      deletePhoto(); 
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