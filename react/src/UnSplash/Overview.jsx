function Overview () {
    return (
        <>
            <h2>Overview and introduction</h2>
            <h3>API description</h3>
                <p>The UnSplash photo API provides access to high quality, free-to-use images. This API is perfect for developers looking to integrate beatiful photography into their applications, and for entreprenuers seeking to enhance their product or marketing visuals.</p>
                <ul>
                    <li><strong>Developers: </strong>Easily fetch, search and display stunning images.</li>
                    <li><strong>Entreprenuers: </strong>Utilize beautiful visuals to enhance your brand's online presence.</li>
                </ul><br></br>
                <h4>Getting started</h4>
                    <p>To access and hence utilize the UnSplash API, youll first need to <a>register</a> if you do not have a pre existing account or <a>login</a> for users who already have an account.
                        Once your in, visit <a>your apps</a>. Then click on "New application" and fill in the required fields to get going.<br></br>
                        To start, your application operates in demo mode, capped at 50 requests per hour-ideal for testing, educational use and demo apps. Transition to production mode by following the "Apply for Production" guidlines. Upon approval, your rate limit will be raised to its full capacity. Applications have specific <a>guidlines</a> which include <a>properly providing attribution for the photographer and UnSplash.</a>
                    </p><br></br>
                <h4>Libraries and SDKs</h4>
                    <p>UnSplash photo API has a range of official libraries and Software Development Kits(SDK) that make it easy and possible to integrate the API.</p>
                    <ul>
                        <li>PHP (<a>unsplash-php</a>)</li>
                        <li>Ruby (<a>unsplash-rb</a>)</li>
                        <li>JavaScript (<a>unsplash-js</a>)</li>
                        <li>iOS (<a>unsplash-photopicker-ios</a>)</li>
                        <li>Android (<a>unsplash-photopicker-android</a>)</li>
                    </ul><br></br>
                <h4>Hotlinking</h4>
                    <p>Unlike typical API, UnSplash mandates that the image URLs retrieved must be directly utilized or embeded, or toherwise known as (hotlinking) within the API follwing a set of hotlinking <a>guidelines</a>. Levereging our Content Delivery Network (CDN) and embeding the photo URLs facilitates better tracking of photo views and popularity. Thses statistics are then relayed to the photographer, offering insights into their photos popularity nad usage context. Refer to documentation on how to hotlink to <a>resized images</a></p><br></br>
                <h4>UnSplash API for entreprenuers</h4>
                    <ol>
                        <li><h5>Presentation and visual content: </h5>Businesses can integrate UnSplash's extensive library of free, high definition photos directly into their visual content creation tools to enhance the visual appeal of their presentaions and marketing materilas.</li>
                        <li><h5>Social media campaigns: </h5>The UnSplash APi enables businesses to incoporate stuniing photgraphy into their email and social media campaigns, thereby making their content more visually engaging and imapactful.</li>
                        <li><h5>Simplifying workflows and designs: </h5>Designers acn stramline their creative process by accessing UnSplash's vast image collection directly from design platforms allowing for seamless integration of high quality photos into their designs and mockups.</li>
                        <li><h5>Personal and commercila use: </h5>UnSplash photo API provides businesses with access to a rapidly growing library of millions of photos, with options of license free high definition photos for both personal and commercial use eliminating the need for costly image subscriptions and additional fees.</li>
                        <li>Depending on need or niche, the UnSplash API can be leveraged to boost productivity or marketing for any business. If you need further details on any specific use case or have any other questions related to the UnSpalsh API,<a>feel free to ask?</a></li>
                    </ol>
                <h4>UnSplash API for developers</h4>
                    <ol>
                        <li>Integrate high quality photos into their applications or websites by accesing a vast library og images for various purposes.</li>
                        <li>Enhance user experience with visually appealing content by, for example implemem=nting dynamic backgrounds or illustrations.</li>
                        <li>Enabling search and display of of specific type of images, user profiles and portfolios.</li>
                        <li>Supporting content creation in blogging platforms or designing tools.</li>
                        <li>Enhance visual storytelling in applications or presentations.</li>
                    </ol><br></br>
            <h3>Version</h3>
                <p>All request recive the v1 version of the API. We encourage you to specifically request this via the Accept-version header.</p><br></br>
            <h3>Base URL</h3>
                <p>The API is available at <a>https://api.unsplash.com/</a>. Responses are sent as JSON.</p><br></br>
        </>
    )
}

export default Overview;