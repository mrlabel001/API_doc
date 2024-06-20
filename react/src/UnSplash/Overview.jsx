import React from 'react';
import './Overview.css';

function Overview() {
    return (
        <div className="overview">
            <h2 className="overview-title">Overview and Introduction</h2>
            <h3 className="section-title">API Description</h3>
            <p className="description">
                The Unsplash photo API provides access to high-quality, free-to-use images. This API is perfect for developers looking to integrate beautiful photography into their applications, and for entrepreneurs seeking to enhance their product or marketing visuals.
            </p>
            <ul className="description-list">
                <li className="description-item"><strong>Developers: </strong>Easily fetch, search, and display stunning images.</li>
                <li className="description-item"><strong>Entrepreneurs: </strong>Utilize beautiful visuals to enhance your brand's online presence.</li>
            </ul>
            <br />
            <h4 className="section-subtitle">Getting Started</h4>
            <p className="description">
                To access and utilize the Unsplash API, you'll first need to <a href="#" className="link">register</a> if you do not have a pre-existing account or <a href="#" className="link">login</a> if you already have an account. Once you're in, visit <a href="#" className="link">your apps</a>. Then click on "New application" and fill in the required fields to get started.<br />
                To start, your application operates in demo mode, capped at 50 requests per hour—ideal for testing, educational use, and demo apps. Transition to production mode by following the "Apply for Production" guidelines. Upon approval, your rate limit will be raised to its full capacity. Applications have specific <a href="#" className="link">guidelines</a> which include <a href="#" className="link">properly providing attribution for the photographer and Unsplash</a>. 
                All applications must follow the <a href="#" className="link">API Guidelines</a> or contact the official <a href="#" className="link">API team.</a>
            </p>
            <br />
            <h4 className="section-subtitle">Libraries and SDKs</h4>
            <p className="description">Unsplash photo API has a range of official libraries and Software Development Kits (SDKs) that make it easy to integrate the API.</p>
            <ul className="sdk-list">
                <li className="sdk-item">PHP (<a href="#" className="link">unsplash-php</a>)</li>
                <li className="sdk-item">Ruby (<a href="#" className="link">unsplash-rb</a>)</li>
                <li className="sdk-item">JavaScript (<a href="#" className="link">unsplash-js</a>)</li>
                <li className="sdk-item">iOS (<a href="#" className="link">unsplash-photopicker-ios</a>)</li>
                <li className="sdk-item">Android (<a href="#" className="link">unsplash-photopicker-android</a>)</li>
            </ul>
            <br />
            <h4 className="section-subtitle">Hotlinking</h4>
            <p className="description">
                Unlike typical APIs, Unsplash mandates that the image URLs retrieved must be directly utilized or embedded, otherwise known as hotlinking, following a set of hotlinking <a href="#" className="link">guidelines</a>. Leveraging our Content Delivery Network (CDN) and embedding the photo URLs facilitates better tracking of photo views and popularity. These statistics are then relayed to the photographer, offering insights into their photos' popularity and usage context. Refer to documentation on how to hotlink to <a href="#" className="link">resized images</a>.
            </p>
            <br />
            <h4 className="section-subtitle">Unsplash API for Entrepreneurs</h4>
            <ol className="entrepreneurs-list">
                <li className="entrepreneurs-item">
                    <h5 className="sub-item-title">Presentation and Visual Content: </h5>
                    Businesses can integrate Unsplash's extensive library of free, high-definition photos directly into their visual content creation tools to enhance the visual appeal of their presentations and marketing materials.
                </li>
                <li className="entrepreneurs-item">
                    <h5 className="sub-item-title">Social Media Campaigns: </h5>
                    The Unsplash API enables businesses to incorporate stunning photography into their email and social media campaigns, thereby making their content more visually engaging and impactful.
                </li>
                <li className="entrepreneurs-item">
                    <h5 className="sub-item-title">Simplifying Workflows and Designs: </h5>
                    Designers can streamline their creative process by accessing Unsplash's vast image collection directly from design platforms, allowing for seamless integration of high-quality photos into their designs and mockups.
                </li>
                <li className="entrepreneurs-item">
                    <h5 className="sub-item-title">Personal and Commercial Use: </h5>
                    Unsplash photo API provides businesses with access to a rapidly growing library of millions of photos, with options of license-free high-definition photos for both personal and commercial use, eliminating the need for costly image subscriptions and additional fees.
                </li>
                <li className="entrepreneurs-item">
                    <h5>Depending on need or niche</h5> the Unsplash API can be leveraged to boost productivity or marketing for any business. If you need further details on any specific use case or have any other questions related to the Unsplash API, <a href="#" className="link">feel free to ask</a>.
                </li>
            </ol>
            <h4 className="section-subtitle">Unsplash API for Developers</h4>
            <ol className="developers-list">
                <li className="developers-item">Integrate high-quality photos into their applications or websites by accessing a vast library of images for various purposes.</li>
                <li className="developers-item">Enhance user experience with visually appealing content by, for example, implementing dynamic backgrounds or illustrations.</li>
                <li className="developers-item">Enable search and display of specific types of images, user profiles, and portfolios.</li>
                <li className="developers-item">Support content creation in blogging platforms or design tools.</li>
                <li className="developers-item">Enhance visual storytelling in applications or presentations.</li>
            </ol>
            <br />
            <h3 className="section-title">Version</h3>
            <p className="description">All requests receive the <code>v1 version</code> of the API. We encourage you to specifically request this via the Accept-Version header.</p>
            <br />
            <h3 className="section-title">Base URL</h3>
            <p className="description">The API is available at <code>https://api.unsplash.com/</code>. Responses are sent as JSON.</p>
            <br />
        </div>
    );
}

export default Overview;