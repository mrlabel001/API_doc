import React from 'react';
import './RateLimiting.css';

function RateLimiting() {
    return (
        <div className="rate-limiting">
            <h2>Rate limiting</h2>
            <p>The UnSplash API rate limits differ between demo and production modes:</p>

            <h3>Demo mode</h3>
            <ul>
                <li><strong>Rate limit:</strong> 50 requests per hour</li>
            </ul>
            
            <h3>Production mode</h3>
            <ul>
                <li><strong>Rate limit:</strong> 5000 requests per hour</li>
            </ul>
            
            <h3>Monitoring Rate Limit Success</h3>
            <p>Each API response includes headers to include the current rate limit status:</p>
            <ul>
                <li><code>X-Ratelimit-Limit: </code>Total allowed requests per hour.</li>
                <li><code>X-Ratelimit-Remaining: </code>Remaining requests for the current hour.</li>
            </ul>
            <p>Example:</p>
            <ul>
                <li><code>X-Ratelimit-Limit: 1000</code></li>
                <li><code>X-Ratelimit-Limit: 999</code></li>
            </ul>
            
            <h3>Important Details</h3>
            <p>Note that only JSON requests (those to <code>api.unsplash.com</code>) are counted. Image file requests (<code>images.unsplash.com</code>) do not count against your rate limit. If you think you'll need a higher rate limit, <a href="#">contact us.</a></p>
            <p>When retrieving a list of objects, an abbreviated or summary version of that object is returned. To get a full version of that object, fetch it individually.</p>
            
            <h3>HTTP Verbs</h3>
            <ul>
                <li><strong>GET:</strong> Retrieving resources</li>
                <li><strong>POST:</strong> Creating resources</li>
                <li><strong>PATCH:</strong> Updating resources</li>
                <li><strong>DELETE:</strong> Deleting resources</li>
            </ul>
            
            <h3>Pagination</h3>
            <p>Requests that return multiple items like a list of photos will be paginated, showing only 10 images per page by default, with a maximum limit of 30 items per page. The <a href="#">page</a> and <a href="#">per-page</a> query parameters can be optionally provided to specify the desired page number and number of items per page.</p>
            <ul>
                <li>If <code>page</code> is not specified, the first page is returned by default.</li>
                <li>If <code>per-page</code> is not specified, the default number of items per page will be 10.</li>
            </ul>
            <p>More information on pagination is returned in the response headers. The <code>X-per-page</code> and <code>X-total</code> headers give the number of elements returned on each page and the total number of elements returned respectively. URLs for the first, last, next, and previous pages are supplied if applicable. They are separated by a comma and differentiated with a <code>rel</code> attribute.</p>
            
            <h3>Dynamically resizable images</h3>
            <p>Every image returned by the UnSplash API is a dynamic image URL, which means it can be manipulated to create new transformations of the image by simply adjusting the query parameters of the image URL. This enables resizing, cropping, compression, and changing the format of the image in real time on the client's side, without any API calls. Under the hood, UnSplash uses Imgx, a powerful image manipulation service, to provide dynamic image URLs.</p>
            
            <h4>Supported Parameters</h4>
            <p>UnSplash officially supports the following parameters:</p>
            <ul>
                <li><code>w, h:</code> Adjust the width and the height of a photo. Example: </li>
                <li><code>crop:</code> Apply cropping to the photo. Example: </li>
                <li><code>fm:</code> Convert image format. Options include jpg, png, webp. Example: </li>
                <li><code>auto=format:</code> Automatically choose the optimal image format depending on the user's browser. Example: </li>
                <li><code>q:</code> Choose the compression quality when using lossy file formats. Example: </li>
                <li><code>fit:</code> Change the fit of the image within the specified dimensions. Options include crop, clip, max, min, and scale. Example: </li>
                <li><code>dpr:</code> Adjust the device pixel ratio of the image. Example: </li>
            </ul>
            <p>When making a request via the <code>/photos</code> endpoint, you'll retrieve a list of images. For each photo object returned, image URLs are provided under the URLs attribute: </p>
            <ul>
                <li><h5>full:</h5> Photo in jpg with maximum dimensions. Not recommended for performance reasons as it loads slowly.</li>
                <li><h5>regular:</h5> Photo in jpg format with a width of 1080 pixels.</li>
                <li><h5>small:</h5> Photo in jpg format with a width of 400 pixels.</li>
                <li><h5>thumb:</h5> Photo in jpg format with a width of 200 pixels.</li>
                <li><h5>raw:</h5> Base image URL with just the photo path and the ixid parameter for your API application. Use this to easily add additional image parameters.</li>
            </ul>
            <h4>Content filtering</h4>
            <p>By default, endpoints set the <code>content filter</code> to <code>low</code>, ensuring that no content violating our submission <a href="#">guidelines</a> (e.g., images containing nudity or violence) is returned. For additional flexibility, you can set the <code>content filter</code> to <code>high</code> on supported endpoints. This further removes content that may be unsuitable for younger audiences. However, please note that UnSplash cannot guarantee the removal of all potentially unsuitable content.</p>
            
            <h4>BlurHash Placeholders</h4>
            <p>Photos retrieved from the UnSplash API include a compact representation of an image placeholder (<code>blur_hash string</code>) which can be used to display a blurred preview before the real image loads. You can learn more on how to implement <a href="#">blurHash</a> in your application on its <a href="#">official page.</a></p>
            
            <h4>Supported Languages</h4>
            <p>UnSplash is currently testing support for non-English languages on <a href="#">search endpoints.</a> To access the beta, email <a href="mailto:api@unsplash.com">api@unsplash.com</a> with your application ID.</p>
            <br />
        </div>
    )
}

export default RateLimiting;