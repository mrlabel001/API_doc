import React from 'react';
import './Overview.css'; 
import pic11 from "./Endpoints/pics/REST.png"
import pic12 from "./Endpoints/pics/GraphQl.png"

function Overview() {
    return (
        <div className="overview-container">
            <h2 className="overview-heading">Overview</h2>
            <div className="section">
                <h3 className="section-heading">Description</h3>
                <p className="section-content">
                    The Rick and Morty API is a REST and GraphQL API based on the television show Rick and Morty. 
                    It provides access to data about hundreds of characters, images, locations, and episodes, and is filled with canonical information as seen on the TV show. 
                    The API also has a JavaScript client that gives access to its features and infrastructure maintenance. 
                    Additionally, there are examples of web apps and templates that utilize the Rick and Morty API.
                </p>
                <h4>Rick and Morty API for developers</h4>
                    <ol>
                        <li><strong>Character Information: </strong>Retrieve detailed information about characters from the Rick and Morty universe, including their names, species, status, origin, and location data.</li>
                        <li><strong>Episode Details: </strong>Access information about episodes, including their titles, air dates, episode numbers, and characters featured in each episode.</li>
                        <li><strong>Location Data: </strong>Fetch data about various locations featured in the series, including their names, types (like planet or space station), and residents associated with those locations.</li>
                        <li><strong>Integration into Apps: </strong>Developers can integrate Rick and Morty data into their applications, such as trivia apps, character databases, or episode guides, to provide fans with comprehensive information.</li>
                        <li><strong>Educational and Fun Projects: </strong>Use the API for educational purposes, such as learning about RESTful APIs, data fetching, and parsing JSON responses, while also building entertaining projects related to the series.</li>
                    </ol>
                    <h4>Rick and Morty API for entreprenuers</h4>
                        <ol>
                            <li><strong>Merchandise and Collectibles: </strong>Develop an e-commerce platform that sells merchandise and collectibles related to Rick and Morty characters, episodes, and locations. Use the API to dynamically fetch character details, episode summaries, and images for product listings.</li>
                            <li><strong>Fan Community and Engagement: </strong>Create a social networking platform or a fan community centered around Rick and Morty. Use the API to provide users with character quizzes, episode discussions, and interactive content based on real-time data updates from the API.</li>
                            <li><strong>Augmented Reality (AR) Experiences: </strong>Develop an AR application that overlays information about Rick and Morty characters, locations, and episodes onto real-world environments. Use the API to fetch character models, location details, and episode summaries for an immersive AR experience.</li>
                            <li><strong>Content Creation Tools: </strong>Build tools for content creators, such as meme generators, GIF libraries, or soundboard apps featuring iconic Rick and Morty quotes. Use the API to access episode transcripts, character quotes, and media assets to power these tools.</li>
                            <li><strong>Trivia and Quiz Platforms: </strong>Create a trivia or quiz app/game centered around Rick and Morty. Use the API to retrieve random character details, episode summaries, and plot points to generate challenging and engaging quiz questions for users.</li>
                        </ol>
            </div>
            <div className="section">
                <h3 className="section-heading">Base URL</h3>
                <div className="base-url-section">
                    <strong>GraphQL</strong>
                    <p><code>https://rickandmortyapi.com/graphql</code></p><br />
                    <img src={pic12} ></img>
                </div>
                <div className="base-url-section">
                    <strong>REST</strong>
                    <p><code>https://rickandmortyapi.com/api</code></p>
                    <p>The base url contains information about all available API's resources. All requests are GET requests and go over https. All responses will return data in <code>json</code>.</p>
                    <img src={pic11}></img>
                </div>
            </div>
            <div className="section">
                <h3 className="section-heading">Version</h3>
            </div>
            <br />
        </div>
    );
}

export default Overview;