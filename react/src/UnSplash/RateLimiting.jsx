function RateLimiting () {
    return (
        <>
            <h2>Rate limitng</h2>
                <p>The UnSplash API rate limits differ between demo and production modes: </p>
                <h3>Demo mode</h3>
                    <ul>
                        <li><strong>Rate limit</strong>50 requests per hour</li>
                    </ul><br></br>
                <h3>Production mode</h3>
                    <ul>
                        <li><strong>Rate limit</strong>5000 request per hour</li>
                    </ul><br></br>
                <h3>Monitoring Rate Limit Success</h3>
                    <p>Each API response includes headers to include the current rate limit status:</p>
                    <ul>
                        <li>X-Ratelimit-Limit: Total allowed requests per hour.</li>
                        <li>X-Ratelimit-Remaining: Remaining requests for the current hour.</li>
                    </ul>
                    <p>Example: </p>
                    <ul>
                        <li>X-Ratelimit-Limit: 1000</li>
                        <li>X-Ratelimit-Limit: 999</li>
                    </ul><br></br>
                <h3>Important Details</h3>
                    <p>Note that only json requests (those to <a>api.unspalsh.com</a>) are counted. Image file request (<a>images.unspalsh.com</a>) do not count against your rate limit.
                    If you think you'll need a higher rate limit, <a>contact us.</a>   
                    </p>
                    <p>When retrieving a list of objects, an abbreviated or summary version of that object is returned. To get a full version of that object, fetch itindividually.</p><br></br>
                <h3>HTTP Verbs</h3>
                    <ul>
                        <li><strong>GET</strong>Retrieving resources</li>
                        <li><strong>POST</strong>Creating resources</li>
                        <li><strong>PATCH</strong>Updating resources</li>
                        <li><strong>DELETE</strong>Deleting resources</li>
                    </ul><br></br>
                <h3>Pagination</h3>
                    <p>Requests that return multiple items like a list of photos will be paginated, showing only 10 images per page by default,
                    with a maximum limit of 30 items per page. The the <a>page</a> and <a>per-page</a> query parametres can be optionalyy provided to specify the desired page number and number of items per page.</p>
                    <ul>
                        <li>if <a>page</a> is not specified, the first page is retuned by default.</li>
                        <li>If <a>per-page</a> is not spaecified, the default number of items per pgae will be 10.</li>
                    </ul>
                    <p>More infirmation on pagination is returned in the response headers. The <a>X-per-page</a> and <a>X-total</a> headers give the number of elements returned on each page and the total number of elements returned respectively.
                    URLs for the first, last, next and previous pages are supplied if applicable. They are separted by a comma and differntiated with a <a>rel</a> attribute.
                    If for instance you requested for page 3 of the photos list: 
                    <a>example</a></p><br></br>
                <h3>Dynamically resizable images</h3>
                    <p>Every image returned by the UnSplash API is a dynamic image URL, which means it can be manipulated to create new transformations of the image by simpy adjusting the query parameters of the image URL. 
                    This enables resizing, cropping, compresion and changing the format of the image in real time on the client's side, without any API calls. 
                    Under the hood UnSplash uses Imgx, a powerful image manipulation service, to provide dynamic image URLs.</p><br></br>
                    <h4>Supported Parameters</h4>
                        <p>UnSplash officially supports the following parameters: </p>
                        <ul>
                            <li><code>w, h: </code>Adjsut the width and the height of a photo.<br></br>Example: </li>
                            <li><code>crop: </code>Apply cropping to the photo.<br></br>Example: </li>
                            <li><code>fm: </code>Convert image format. Options include jpg, png, webp.<br></br>Example: </li>
                            <li><code>auto=format: </code>Automatically choose the optimal image format depending on the user's browser.<br></br>Example: </li>
                            <li><code>q: </code>Choose the compression quality when using lossy file formats.<br></br>Example: </li>
                            <li><code>fit: </code>Change the fit of the image within the specified dimensions. Options include crop, clip, max, min and scale.<br></br>Example: </li>
                            <li><code>dpr: </code>Adjust the device pixel ratio of the image.<br></br>Example: </li>
                        </ul>
                        <p>Other parameters offered by Imgx can be used, but UnSpash does not officially support them and may remove support for them at any time in the future.
                            Below are some practical examples on how to apply the above transformations.</p>
                            <a>example 1</a><br></br>
                            <a>example 2</a><br></br>
                            <a>example 3</a><br></br>
                            <a>example 4</a><br></br>
                            <a>example 5</a><br></br>
                            <a>example 6</a><br></br>
                            <a>example 7</a><br></br>
                        <p>When making a request via the <a>/photos</a> endpoint, youll retieve a list of images. For each photo object returned, image URLs are provided under the the URLs. *attribute: 
                        <a>example</a></p>
                        <ul>
                            <li><h5>full: </h5>Photo in jpg with maximum dimensions. Not recomended for perfomance reasond=s as it loads slowly.</li>
                            <li><h5>regular: </h5>Photo in jpg format with a with a width of 1080 pixels.</li>
                            <li><h5>small: </h5>Photo in jpg format with a with a width of 400 pixels.</li>
                            <li><h5>thumb</h5>Photo in jpg format with a with a width of 200 pixels.</li>
                            <li><h5>raw: </h5>Base image URL with just the photo path and the ixid parameter for your API application. Use this to easily add additional image parameters.</li>
                        </ul><br></br>
                    <h4>Customizing Image URls</h4>
                        <p>To customize image dimensions, add query parameters to the raw URL:
                        Example 1: Create an image URl with a width of 1500px and a device pixel ratio(DPR) of 2:
                        <a>example</a><br></br>
                        Example 1: Create an image URl with a width of 750px without hitting the API again:
                        <a>example</a><br></br>
                        Fore additional details or queries on image manipulation parameters, refer to the <a>Imgx docs.</a>
                        </p><br></br>
                    <h4>Content filternig</h4>
                        <p>By default, endpoints set the <a>content filter</a> to <a>low</a>, ensuring that no content violating our submission guidelines (e.g., images containig nudity or vilence) is returned.
                        For additional flexibility, you can set the <a>content filter</a> to <a>high</a> on supported endpoints. This further removes content that may be unsuitable for younger audiences. 
                        However please note that UNSplash cannot guarntee the removal of all potentially unsuitable content.                     
                        </p><br></br>
                    <h4>BlurHash Placeholders</h4>
                        <p>
                            Photos retrieved from the UnSplash API include a compact representation of an image placeholder (<a>blur_hash string</a>) which can be used to display a blurred preview before the real image loads.
                            You can learn more on how to implement <a>blurHash </a>in your application on its <a>official page.</a>
                        </p><br></br>
                    <h4>Supported Languages</h4>
                        <p>
                            UnSplash is currently testing support for non-english languages on <a>serach endponits.</a>
                            To access the beta, email <a>api@unsplash.com</a> wuth your application ID.<br></br>
                            <a>table of languages</a>
                        </p><br></br>
                  
        </>
    )
}

export default RateLimiting;