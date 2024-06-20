import React, { useState, useEffect } from 'react';
function Photos () {

    const [photos, setPhotos] = useState(null)
    const [photo, setPhoto] = useState(null)
    const [randomPhoto, setRandomPhoto] = useState(null)
    const [stats, setStats] = useState(null)
    const [download, setDownload] = useState(null)
    const [photoUpdate, setPhotoUpdate] = useState(null)
    const [like, setLike] = useState(null)
    const [unlike, setUnLike] = useState(null)


    //function to get list of photos
    useEffect(() => {
        // Define the API endpoint
        const apiEndpoint1 = 'https://api.unsplash.com/photos/?client_id=alzL4jjLBXo5GMEiFtJuCjJoflqNBY0GcrYE_o7Ehhg';
    
        // Fetch data from the API
        const fetchPhotos = async () => {
          try {
            const response = await fetch(apiEndpoint1, {
              method: 'GET', // Specify the method
              headers: {
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxODczNDcwNCwianRpIjoiNjkxMzA1NGEtOWYyMS00ZGYxLWJiOWYtOWVhYzc3MjAwMDhkIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MSwibmJmIjoxNzE4NzM0NzA0LCJjc3JmIjoiMzIxZjY1ZWUtODczZC00ODNjLTkwNzgtYjZiMzA2YzM4MzFjIiwiZXhwIjoxNzE4NzQxOTA0LCJhZG1pbiI6dHJ1ZX0.YOFOtrsBEtYOWXqVn2j9AGcyqsNh5XKgyAidWhmi-cw`,
                'Content-Type': 'application/json', // Adjust Content-Type if necessary
              },
            });
    
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const textData1 = await response.text();
            setPhotos(textData1); // Set the fetched text data in the state
          } catch (error) {
            console.error('Fetch error:', error);
          }
        };
    
        fetchPhotos(); // Call the fetchData function
      }, []);

      //function to get a photo
    useEffect(() => {
        const apiEndpoint2 = 'http://localhost:5000/pending_users';
        const fetchPhoto = async () => {
          try {
            const response = await fetch(apiEndpoint2, {
              method: 'GET', 
              headers: {
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxODczNDcwNCwianRpIjoiNjkxMzA1NGEtOWYyMS00ZGYxLWJiOWYtOWVhYzc3MjAwMDhkIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MSwibmJmIjoxNzE4NzM0NzA0LCJjc3JmIjoiMzIxZjY1ZWUtODczZC00ODNjLTkwNzgtYjZiMzA2YzM4MzFjIiwiZXhwIjoxNzE4NzQxOTA0LCJhZG1pbiI6dHJ1ZX0.YOFOtrsBEtYOWXqVn2j9AGcyqsNh5XKgyAidWhmi-cw`,
                'Content-Type': 'application/json', 
              },
            });
    
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const textData2 = await response.text();
            setPhoto(textData2); 
          } catch (error) {
            console.error('Fetch error:', error);
          }
        };
    
        fetchPhoto(); 
      }, []);

      //function to get a random photo
    useEffect(() => {
        const apiEndpoint3 = 'http://localhost:5000/pending_users';
        const fetchRandomPhoto = async () => {
          try {
            const response = await fetch(apiEndpoint3, {
              method: 'GET', 
              headers: {
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxODczNDcwNCwianRpIjoiNjkxMzA1NGEtOWYyMS00ZGYxLWJiOWYtOWVhYzc3MjAwMDhkIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MSwibmJmIjoxNzE4NzM0NzA0LCJjc3JmIjoiMzIxZjY1ZWUtODczZC00ODNjLTkwNzgtYjZiMzA2YzM4MzFjIiwiZXhwIjoxNzE4NzQxOTA0LCJhZG1pbiI6dHJ1ZX0.YOFOtrsBEtYOWXqVn2j9AGcyqsNh5XKgyAidWhmi-cw`,
                'Content-Type': 'application/json', 
              },
            });
    
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const textData3 = await response.text();
            setRandomPhoto(textData3); 
          } catch (error) {
            console.error('Fetch error:', error);
          }
        };
    
        fetchRandomPhoto(); 
      }, []);

      //function to get photo stats
    useEffect(() => {
        const apiEndpoint4 = 'http://localhost:5000/pending_users';
        const fetchPhotoStats = async () => {
          try {
            const response = await fetch(apiEndpoint4, {
              method: 'GET', 
              headers: {
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxODczNDcwNCwianRpIjoiNjkxMzA1NGEtOWYyMS00ZGYxLWJiOWYtOWVhYzc3MjAwMDhkIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MSwibmJmIjoxNzE4NzM0NzA0LCJjc3JmIjoiMzIxZjY1ZWUtODczZC00ODNjLTkwNzgtYjZiMzA2YzM4MzFjIiwiZXhwIjoxNzE4NzQxOTA0LCJhZG1pbiI6dHJ1ZX0.YOFOtrsBEtYOWXqVn2j9AGcyqsNh5XKgyAidWhmi-cw`,
                'Content-Type': 'application/json', 
              },
            });
    
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const textData4 = await response.text();
            setStats(textData4); 
          } catch (error) {
            console.error('Fetch error:', error);
          }
        };
    
        fetchPhotoStats(); 
      }, []);

      //function to get photo download stats
    useEffect(() => {
        const apiEndpoint5 = 'http://localhost:5000/pending_users';
        const fetchDownloads = async () => {
          try {
            const response = await fetch(apiEndpoint5, {
              method: 'GET', 
              headers: {
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxODczNDcwNCwianRpIjoiNjkxMzA1NGEtOWYyMS00ZGYxLWJiOWYtOWVhYzc3MjAwMDhkIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MSwibmJmIjoxNzE4NzM0NzA0LCJjc3JmIjoiMzIxZjY1ZWUtODczZC00ODNjLTkwNzgtYjZiMzA2YzM4MzFjIiwiZXhwIjoxNzE4NzQxOTA0LCJhZG1pbiI6dHJ1ZX0.YOFOtrsBEtYOWXqVn2j9AGcyqsNh5XKgyAidWhmi-cw`,
                'Content-Type': 'application/json', 
              },
            });
    
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const textData5 = await response.text();
            setDownload(textData5); 
          } catch (error) {
            console.error('Fetch error:', error);
          }
        };
    
        fetchDownloads(); 
      }, []);

      //function to update photo
    useEffect(() => {
        const apiEndpoint6 = 'http://localhost:5000/pending_users';
        const updatePhoto = async () => {
          try {
            const response = await fetch(apiEndpoint6, {
              method: 'GET', 
              headers: {
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxODczNDcwNCwianRpIjoiNjkxMzA1NGEtOWYyMS00ZGYxLWJiOWYtOWVhYzc3MjAwMDhkIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MSwibmJmIjoxNzE4NzM0NzA0LCJjc3JmIjoiMzIxZjY1ZWUtODczZC00ODNjLTkwNzgtYjZiMzA2YzM4MzFjIiwiZXhwIjoxNzE4NzQxOTA0LCJhZG1pbiI6dHJ1ZX0.YOFOtrsBEtYOWXqVn2j9AGcyqsNh5XKgyAidWhmi-cw`,
                'Content-Type': 'application/json', 
              },
            });
    
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const textData6 = await response.text();
            setPhotoUpdate(textData6); 
          } catch (error) {
            console.error('Fetch error:', error);
          }
        };
    
        updatePhoto(); 
      }, []);

      //function to like photo
    useEffect(() => {
        const apiEndpoint7 = 'http://localhost:5000/pending_users';
        const likePhoto = async () => {
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
            setLike(textData7); 
          } catch (error) {
            console.error('Fetch error:', error);
          }
        };
    
        likePhoto(); 
      }, []);

      //function to unlike photo
    useEffect(() => {
        const apiEndpoint8 = 'http://localhost:5000/pending_users';
        const unlikePhoto = async () => {
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
            setUnLike(textData8); 
          } catch (error) {
            console.error('Fetch error:', error);
          }
        };
    
        unlikePhoto(); 
      }, []);

    return (
        <>
            <h3>Photos</h3>
            <p>Photos have link relations that include: </p>
                <table>
                    <tr>
                        <th>Relationship</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <code>self</code>
                        <td>API location of this photo.</td>
                    </tr>
                    <tr>
                        <code>html</code>
                        <td>HTML location of this photo.</td>
                    </tr>
                    <tr>
                        <code>download</code>
                        <td>Download location of this photo.</td>
                    </tr>
                </table>
            <h4>GET photos</h4>
                <code>GET /photos</code><br></br>
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
                    <tr>
                        <code>order_by</code>
                        <td>Order of photos.(Optional and default set to <code>latest</code>. Valid values include <code>oldest, popular.</code>)</td>
                    </tr>
                </table>
                <p><strong>Response</strong></p>
                <p>The photo object returned is abbreviated. To get full details, ill use the route <code>GET /photos/:id</code>.</p>
                <code>200 OK<br></br>Link: <br></br>X-Ratelimit-Limit: 1000<br></br>X-Ratelimit-Remaining: 999</code>
                <pre>{photos}</pre>
            <h4>GET a single photo</h4>
                <code>GET /photos/:id</code><br></br>
                <strong>Parameters</strong>
                <table>
                    <tr>
                        <th>Parameter</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <code>id</code>
                        <td>The photo's ID. Required.</td>
                    </tr>
                </table>
                <p><strong>Response</strong></p>
                <code>200 OK<br></br>X-Ratelimit-Limit: 1000<br></br>X-Ratelimit-Remaining: 999</code>
                <pre>{photo}</pre>
            <h4>GET a random photo</h4>
            <code>GET /photos/random</code><br></br>
                <strong>Parameters</strong>
                <p>Though i'm trying to get a random photo and all parameters are optional, i can combine parameters to narrow down to get a bit more specific photo from the pool of photos.</p>
                <table>
                    <tr>
                        <th>Parameter</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <code>collections</code>
                        <td>Public collection ID('s) to filter selection. If multiple, comma-separated.</td>
                    </tr>
                    <tr>
                        <code>topics</code>
                        <td>Public topic ID('s) to filter selection. If multiple, comma-separated.</td>
                    </tr>
                    <tr>
                        <code>username</code>
                        <td>Limit selection to a single user.</td>
                    </tr>
                    <tr>
                        <code>query</code>
                        <td>Limit selection to photos matching a search term.</td>
                    </tr>
                    <tr>
                        <code>orientation</code>
                        <td>Filter by photo orientation. ()Sample of valid values are: <code>landscape, potrait, squarish.</code></td>
                    </tr>
                    <tr>
                        <code>content_filter</code>
                        <td>Limit result by content safety. Default value is <code>low</code> but can be adjusted to <code>high</code> to access more content.</td>
                    </tr>
                    <tr>
                        <code>count</code>
                        <td>The number of photos to return.(Default is 1 photo and max set at 30.)</td>
                    </tr>
                </table>
                <p><strong>Response</strong></p>
                <p><strong>Note: </strong>When supplying a <code>count</code> parameter, the response will be an array of photos even if the value of the count is 1.</p>
                <code>200 OK<br></br>X-Ratelimit-Limit: 1000<br></br>X-Ratelimit-Remaining: 999</code>
                <pre>{randomPhoto}</pre>
            <h4>GET photo statistics</h4>
                <code>GET /photos/:id/statistics</code><br></br>
                <strong>Parameters</strong>
                <table>
                    <tr>
                        <th>Parameter</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <code>id</code>
                        <td>The public id of the photo. Required.</td>
                    </tr>
                    <tr>
                        <code>resolution</code>
                        <td>The frequency of the stats.(Optional and default is "days".)</td>
                    </tr>
                    <tr>
                        <code>quantity</code>
                        <td>The amount for each stat. (Optional and default is 30.)</td>
                    </tr>
                </table>
                <p><strong>Response</strong></p>
                <code>200 OK<br></br>X-Ratelimit-Limit: 1000<br></br>X-Ratelimit-Remaining: 999</code>
                <pre>{stats}</pre>
            <h4>GET/ track photo downloads</h4>
                <p>GPT</p>
                <code>GET /photos/:id/download</code><br></br>
                <strong>Parameters</strong>
                <table>
                    <tr>
                        <th>Parameter</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <code>id</code>
                        <td>The photos ID. Required.</td>
                    </tr>
                </table>
                <p><strong>Response</strong></p>
                <code>200 OK<br></br>X-Ratelimit-Limit: 1000<br></br>X-Ratelimit-Remaining: 999</code>
                <pre>{download}</pre>
            <h4>UPDATE a photo</h4>
                <p>I'll require a <code>write_photos</code> scope to update a photo on behalf of the logged-in user.</p>
                <code>PUT /photos/:id</code><br></br>
                <strong>Parameters</strong>
                <table>
                    <tr>
                        <th>Parameter</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <code>id</code>
                        <td>The photo's ID. Required</td>
                    </tr>
                    <tr>
                        <code>description</code>
                        <td>The photo's description.(Optional)</td>
                    </tr>
                    <tr>
                        <code>show_on_profile</code>
                        <td>The photo's visibility.(Optional)</td>
                    </tr>
                    <tr>
                        <code>tags</code>
                        <td>The photo's tags.(Optional)</td>
                    </tr>
                    <tr>
                        <code>location[latitude]</code>
                        <td>The photo's location latitude rounde to 6 dp(Optional)</td>
                    </tr>
                    <tr>
                        <code>location[longitude]</code>
                        <td>The photo's location longitude rounde to 6 dp(Optional)</td>
                    </tr>
                    <tr>
                        <code>location[time]</code>
                        <td>The photo's full location string including city and country.(Optional)</td>
                    </tr>
                    <tr>
                        <code>location[city]</code>
                        <td>The photo's location city(Optional)</td>
                    </tr>
                    <tr>
                        <code>location[country]</code>
                        <td>The photo's location country(Optional)</td>
                    </tr>
                    <tr>
                        <code>exif[make]</code>
                        <td>Camera's brand(Optional)</td>
                    </tr>
                    <tr>
                        <code>exif[make]</code>
                        <td>Camera's model(Optional)</td>
                    </tr>
                    <tr>
                        <code>exif[exposure_time]</code>
                        <td>Camera's exposure time(Optional)</td>
                    </tr>
                    <tr>
                        <code>exif[aperture_value]</code>
                        <td>Camera's aperture_value(Optional)</td>
                    </tr>
                    <tr>
                        <code>exif[focal_length]</code>
                        <td>Camera's focal_length(Optional)</td>
                    </tr>
                    <tr>
                        <code>exif[iso_speed_ratings]</code>
                        <td>Camera's iso_speed_ratings(Optional)</td>
                    </tr>
                </table>
                <p><strong>Response</strong></p>
                <code>201 Created<br></br>X-Ratelimit-Limit: 1000<br></br>X-Ratelimit-Remaining: 999</code>
                <pre>{photoUpdate}</pre>
            <h4>Like a photo</h4>
            <p>I'll need a <code>write_likes</code> scope to like a photo on behalf of logged-in user. I can only like a photo once and hence sending this request multiple times will not have any additional effects.</p>
                <code>POST /photos/:id/like</code><br></br>
                <strong>Parameters</strong>
                <table>
                    <tr>
                        <th>Parameter</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <code>id</code>
                        <td>The photo's ID. Required</td>
                    </tr>
                </table>
                <p><strong>Response</strong></p>
                <code>201 Created<br></br>X-Ratelimit-Limit: 1000<br></br>X-Ratelimit-Remaining: 999</code>
                <pre>{like}</pre>
            <h4>Unlike a photo</h4>
                <code>DELETE /photos/:id/like</code><br></br>
                <strong>Parameters</strong>
                    <table>
                        <tr>
                            <th>Parameter</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <code>username</code>
                            <td>username</td>
                        </tr>
                    </table>
                    <p><strong>Response</strong></p>
                    <p>I can only unlike a photo once and hence sending this request multiple times will not have any additional effects.</p>
                    <code>200 OK<br></br>X-Ratelimit-Limit: 1000<br></br>X-Ratelimit-Remaining: 999</code>
                    <pre>{unlike}</pre>
                    <br></br>
        </>
    )
}

export default Photos;